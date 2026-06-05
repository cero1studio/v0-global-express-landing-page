/**
 * Google Apps Script para recibir datos del formulario y guardarlos en Google Sheets
 * 
 * INSTRUCCIONES:
 * 1. Copia este código completo
 * 2. Pégalo en Google Apps Script (script.google.com)
 * 3. Reemplaza SHEET_ID con el ID de tu Google Sheet
 * 4. Guarda el proyecto
 * 5. Despliega como Web App (ver instrucciones en GOOGLE_SHEETS_SETUP.md)
 */

/**
 * Strips leading formula-injection characters (=, +, -, @, tab, CR)
 * and enforces a max length to prevent CSV/Sheets formula execution.
 */
function sanitize(value, maxLen) {
  if (typeof value !== 'string') return '';
  return value.replace(/^[=+\-@\t\r]+/, '').slice(0, maxLen || 500);
}

/** Validates an e-mail address with a simple regex. */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

/** Validates that canCover is one of the expected enum values. */
function isValidCanCover(value) {
  return ['si', 'no', 'parcialmente', ''].indexOf(value) !== -1;
}

/**
 * Verifies a Proof-of-Work token.
 * Rejects challenges older than 10 minutes to prevent replay attacks.
 * Returns true only if SHA256(`${challenge}:${nonce}`) starts with `difficulty` hex zeros.
 */
function verifyPoW(pow) {
  if (!pow || typeof pow.challenge !== 'string' || typeof pow.nonce !== 'number') return false;

  // Validate challenge format: "{timestamp}-{hex}" and check it's not too old
  const parts = pow.challenge.split('-');
  if (parts.length < 2) return false;
  const ts = parseInt(parts[0], 10);
  if (isNaN(ts) || Date.now() - ts > 10 * 60 * 1000) return false; // older than 10 min

  const difficulty = typeof pow.difficulty === 'number' ? Math.min(pow.difficulty, 5) : 3;
  const prefix = '0'.repeat(difficulty);
  const input = pow.challenge + ':' + pow.nonce;
  const bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, input, Utilities.Charset.UTF_8);
  const hex = bytes.map(function(b) { return (b < 0 ? b + 256 : b).toString(16).padStart(2, '0'); }).join('');
  return hex.startsWith(prefix);
}

/** Validates a country code: + followed by 1-4 digits. */
function isValidCountryCode(code) {
  return /^\+[0-9]{1,4}$/.test(code);
}

function doPost(e) {
  try {
    if (!e) {
      throw new Error('Este script debe ejecutarse desde el formulario web, no manualmente');
    }

    const SHEET_ID = '1wnmjSeId7O-V9Q55RBHKTThL1Tfqx9y5j59KC-gNz7M';
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();

    let data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      data = e.parameter;
    } else {
      throw new Error('No se recibieron datos en el formato esperado');
    }

    // Honeypot: if _hp is present and non-empty, silently discard
    if (data._hp) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: true }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Proof-of-Work verification
    const pow = typeof data._pow === 'object' ? data._pow : null;
    if (!verifyPoW(pow)) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, error: 'PoW inválido' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Field-level validation
    const name = sanitize(String(data.name || ''), 100);
    const phone = String(data.phone || '').replace(/\D/g, '').slice(0, 15);
    const rawCC = String(data.countryCode || '+57');
    const countryCode = isValidCountryCode(rawCC) ? rawCC : '+57';
    const email = String(data.email || '').trim().toLowerCase().slice(0, 254);
    const city = sanitize(String(data.city || ''), 100);
    const canCoverRaw = String(data.canCover || '');
    const canCover = isValidCanCover(canCoverRaw) ? canCoverRaw : '';

    if (!name || name.length < 2) throw new Error('Nombre inválido');
    if (!phone || phone.length < 6) throw new Error('Teléfono inválido');
    if (!isValidEmail(email)) throw new Error('Email inválido');

    const timestamp = new Date();
    const phoneWithCountryCode = countryCode + phone;

    const rowData = [
      timestamp,
      name,
      phoneWithCountryCode,
      email,
      city,
      canCover,
      data.understandsCost === true || data.understandsCost === 'true' ? 'Sí' : 'No',
      data.acceptsPrivacy === true || data.acceptsPrivacy === 'true' ? 'Sí' : 'No'
    ];

    sheet.appendRow(rowData);
    
    // Log de éxito
    console.log('Datos guardados exitosamente en la fila:', sheet.getLastRow());
    
    // Retornar éxito con CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'Datos guardados correctamente en Google Sheets',
        row: sheet.getLastRow()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log del error para debugging
    console.error('Error:', error.toString());
    console.error('Stack:', error.stack);
    
    // Retornar error
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Función opcional para probar el script
function doGet(e) {
  return ContentService
    .createTextOutput('Este endpoint solo acepta POST requests. El formulario está funcionando correctamente.')
    .setMimeType(ContentService.MimeType.TEXT);
}

// Función de PRUEBA - Ejecuta esta función para probar que el script puede escribir en el Sheet
function testScript() {
  try {
    // ID de tu Google Sheet
    const SHEET_ID = '1wnmjSeId7O-V9Q55RBHKTThL1Tfqx9y5j59KC-gNz7M';
    
    // Abrir el sheet
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    // Datos de prueba
    const testData = {
      name: 'Prueba de Script',
      countryCode: '+57',
      phone: '1234567890',
      email: 'test@example.com',
      city: 'Bogotá',
      canCover: 'si',
      understandsCost: true,
      acceptsPrivacy: true
    };
    
    // Obtener la fecha y hora actual
    const timestamp = new Date();
    
    // Combinar código de país + teléfono (sin espacio)
    const phoneWithCountryCode = testData.countryCode + testData.phone;
    
    // Preparar los datos para la fila
    const rowData = [
      timestamp,
      testData.name,
      phoneWithCountryCode,
      testData.email,
      testData.city,
      testData.canCover,
      'Sí',
      'Sí'
    ];
    
    // Agregar la fila al sheet
    sheet.appendRow(rowData);
    
    // Retornar éxito
    Logger.log('✅ Prueba exitosa! Datos guardados en la fila: ' + sheet.getLastRow());
    return '✅ Prueba exitosa! Los datos se guardaron correctamente en la fila: ' + sheet.getLastRow();
    
  } catch (error) {
    Logger.log('❌ Error en la prueba: ' + error.toString());
    return '❌ Error: ' + error.toString();
  }
}

