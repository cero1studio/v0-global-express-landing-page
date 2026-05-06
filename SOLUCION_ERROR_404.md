# Solución al Error 404 al Autorizar Google Apps Script

## 🔴 Problema: Error 404 al autorizar

Si ves un error 404 al intentar autorizar el Google Apps Script, sigue estos pasos:

---

## ✅ Solución Paso a Paso

### Paso 1: Guardar el Proyecto Correctamente

1. En Google Apps Script, asegúrate de que el código esté pegado
2. Haz clic en el icono de **guardar** (💾) o presiona `Cmd+S` (Mac) / `Ctrl+S` (Windows)
3. Espera a que aparezca **"Guardado"** en la parte superior
4. Si el proyecto no tiene nombre, haz clic en **"Proyecto sin título"** y ponle un nombre como: `Formulario GER`

### Paso 2: Ejecutar el Script Primero (Importante)

1. En la barra superior, haz clic en **"Ejecutar"** (▶️) o presiona `Cmd+Enter`
2. Si es la primera vez, te pedirá autorización:
   - Haz clic en **"Revisar permisos"**
   - Selecciona tu cuenta de Google
   - Haz clic en **"Avanzado"**
   - Haz clic en **"Ir a [nombre del proyecto] (no seguro)"**
   - Haz clic en **"Permitir"**
3. Esto autorizará el script para acceder a tu Google Sheet

### Paso 3: Verificar que Funciona

1. Después de autorizar, deberías ver en la consola: `Ejecución completada`
2. Si hay errores, revísalos y corrígelos

### Paso 4: Ahora Desplegar como Web App

1. Una vez que el script esté autorizado y funcionando, ve a **"Desplegar"** > **"Nueva implementación"**
2. Haz clic en el icono de **engranaje** (⚙️) y selecciona **"Aplicación web"**
3. Configura:
   - **Descripción**: `Formulario Landing Page Global Express Recruiting`
   - **Ejecutar como**: **"Yo"** (tu cuenta)
   - **Quién tiene acceso**: **"Cualquiera"** ⚠️
4. Haz clic en **"Desplegar"**
5. **NO debería pedirte autorización de nuevo** (ya la diste en el Paso 2)
6. Copia la URL del Web App

---

## 🔧 Soluciones Alternativas

### Si el Error 404 Persiste:

#### Opción A: Usar una Cuenta de Google Diferente

1. Cierra todas las ventanas de Google Apps Script
2. Abre una ventana de incógnito
3. Ve a [script.google.com](https://script.google.com/)
4. Inicia sesión con una cuenta diferente
5. Crea el proyecto de nuevo

#### Opción B: Verificar que el Sheet Existe

1. Abre tu Google Sheet: `https://docs.google.com/spreadsheets/d/1wnmjSeld7O-V9Q55RBHKTThL1Tfqx9y5j59KC-gNz7M/edit`
2. Verifica que puedas acceder a él
3. Asegúrate de que estés usando la misma cuenta de Google para el Script y el Sheet

#### Opción C: Crear el Script desde el Sheet

1. Abre tu Google Sheet
2. Ve a **"Extensiones"** > **"Apps Script"**
3. Se abrirá un editor de Apps Script vinculado directamente a tu Sheet
4. Pega el código ahí (pero **NO necesitas el SHEET_ID** porque ya está vinculado)
5. Usa este código simplificado:

```javascript
function doPost(e) {
  try {
    // Obtener el sheet activo (ya está vinculado)
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parsear los datos recibidos
    const data = JSON.parse(e.postData.contents);
    
    // Obtener la fecha y hora actual
    const timestamp = new Date();
    
    // Combinar código de país + teléfono en un solo campo
    const phoneWithCountryCode = (data.countryCode || '') + ' ' + (data.phone || '');
    
    // Preparar los datos para la fila
    const rowData = [
      timestamp,                                    // Columna A: Fecha y Hora
      data.name || '',                              // Columna B: Nombre
      phoneWithCountryCode.trim(),                 // Columna C: Código País + Teléfono
      data.email || '',                             // Columna D: Email
      data.city || '',                              // Columna E: Ciudad
      data.canCover || '',                          // Columna F: ¿Puede cubrir costos?
      data.understandsCost ? 'Sí' : 'No',          // Columna G: Entiende costos
      data.acceptsPrivacy ? 'Sí' : 'No'             // Columna H: Acepta privacidad
    ];
    
    // Agregar la fila al sheet
    sheet.appendRow(rowData);
    
    // Retornar éxito
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'Datos guardados correctamente' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('Este endpoint solo acepta POST requests.')
    .setMimeType(ContentService.MimeType.TEXT);
}
```

6. Guarda y ejecuta primero (Paso 2)
7. Luego despliega como Web App

---

## 📝 Notas Importantes

- ✅ **Siempre ejecuta el script primero** antes de desplegarlo
- ✅ **Usa la misma cuenta de Google** para el Script y el Sheet
- ✅ **La autorización debe hacerse al ejecutar**, no al desplegar
- ✅ Si usas la Opción C (desde el Sheet), no necesitas el SHEET_ID en el código

---

## 🆘 Si Nada Funciona

1. Espera unos minutos y vuelve a intentar
2. Limpia la caché del navegador
3. Prueba en otro navegador
4. Verifica que tu cuenta de Google tenga permisos para crear Apps Script

