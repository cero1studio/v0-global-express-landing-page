# Configuración de Google Sheets para el Formulario

## ⚠️ IMPORTANTE: La Sheet NO necesita ser pública

**Solo el Google Apps Script debe ser público (como Web App).** La sheet puede permanecer privada.

---

## Paso 1: Crear el Google Apps Script

1. Ve a [Google Apps Script](https://script.google.com/)
2. Si es tu primera vez, haz clic en **"Nuevo proyecto"**
3. Se abrirá un editor con un archivo llamado `Código.gs`
4. **Borra todo el contenido** del archivo
5. Abre el archivo `google-apps-script.js` de este proyecto
6. **Copia TODO el código** del archivo
7. **Pega el código** en el editor de Google Apps Script
8. **Verifica que el SHEET_ID esté correcto** (línea 15):
   ```javascript
   const SHEET_ID = '1wnmjSeld7O-V9Q55RBHKTThL1Tfqx9y5j59KC-gNz7M';
   ```
   Este ID ya está configurado con tu sheet, pero verifica que sea correcto.

---

## Paso 2: Guardar el Proyecto

1. En la parte superior, haz clic en el campo **"Proyecto sin título"**
2. Cambia el nombre a: **"Formulario Global Express Recruiting"**
3. Haz clic en el icono de **guardar** (💾) o presiona `Cmd+S` (Mac) / `Ctrl+S` (Windows)
4. Espera a que aparezca "Guardado" en la parte superior

---

## Paso 3: Desplegar como Web App

1. En la barra superior, haz clic en **"Desplegar"** > **"Nueva implementación"**
2. Haz clic en el icono de **engranaje** (⚙️) junto a "Seleccionar tipo"
3. Selecciona **"Aplicación web"**
4. Se abrirá un modal de configuración:
   - **Descripción**: `Formulario Landing Page Global Express Recruiting`
   - **Ejecutar como**: Selecciona **"Yo"** (tu cuenta de Google)
   - **Quién tiene acceso**: Selecciona **"Cualquiera"** ⚠️ (Esto es necesario para que funcione desde tu sitio web)
5. Haz clic en **"Desplegar"**
6. **Primera vez**: Google te pedirá autorización:
   - Haz clic en **"Autorizar acceso"**
   - Selecciona tu cuenta de Google
   - Haz clic en **"Avanzado"** > **"Ir a [nombre del proyecto] (no seguro)"**
   - Haz clic en **"Permitir"**
7. **Después de autorizar**, verás una ventana con la URL del Web App
8. **Copia esa URL completa** (se verá algo como: `https://script.google.com/macros/s/AKfycby.../exec`)

---

## Paso 4: Configurar la URL en el Código

1. Abre el archivo `app/page.tsx` en tu proyecto
2. Busca la línea 10 que dice:
   ```typescript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/TU_SCRIPT_ID_AQUI/exec'
   ```
3. **Reemplaza** `TU_SCRIPT_ID_AQUI` con la URL completa que copiaste en el Paso 3
4. Debería quedar así:
   ```typescript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby.../exec'
   ```
5. Guarda el archivo

---

## Paso 5: Verificar la Estructura del Google Sheet

Asegúrate de que tu Google Sheet tenga estos encabezados en la **primera fila**:

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Fecha y Hora | Nombre | Código País + Teléfono | Email | Ciudad | ¿Puede cubrir costos? | Entiende costos | Acepta privacidad |

**Tu sheet ya tiene estos encabezados correctamente configurados.** ✅

---

## Paso 6: Probar el Formulario

1. Ejecuta tu proyecto localmente:
   ```bash
   npm run dev
   ```
2. Abre el sitio en el navegador
3. Haz clic en **"Contáctenos"** o **"Solicitar asesoría"**
4. Llena el formulario con datos de prueba
5. Haz clic en **"APLICAR AHORA"**
6. Verifica en tu Google Sheet que los datos aparezcan en una nueva fila

---

## Solución de Problemas

### ❌ Error: "Este endpoint solo acepta POST requests"
- **Solución**: Esto es normal. El script está funcionando, solo que estás accediendo con GET en lugar de POST.

### ❌ Los datos no aparecen en el Sheet
- Verifica que el **SHEET_ID** en el script sea correcto
- Verifica que el script tenga **permisos** para editar el sheet
- Revisa la consola del navegador (F12) para ver errores

### ❌ Error de CORS
- Asegúrate de que el Web App esté configurado con **"Cualquiera"** tiene acceso
- Verifica que estés usando `mode: 'no-cors'` en el fetch (ya está configurado)

### ❌ El formulario no envía
- Verifica que la URL del script esté correcta en `app/page.tsx`
- Asegúrate de que todos los campos requeridos estén llenos
- Verifica que el checkbox de privacidad esté marcado

---

## Notas Importantes

- ✅ **La Sheet puede permanecer privada** - Solo el Web App necesita ser público
- ✅ **El código combina automáticamente** código de país + teléfono en la columna C
- ✅ **Los datos se guardan con fecha y hora** automáticamente
- ✅ **No necesitas variables de entorno** - Todo está hardcodeado

---

## Estructura de Datos Enviados

El formulario envía estos datos al script:

```json
{
  "name": "Juan Pérez",
  "countryCode": "+57",
  "phone": "3012345678",
  "email": "juan@example.com",
  "city": "Bogotá",
  "canCover": "si",
  "understandsCost": true,
  "acceptsPrivacy": true
}
```

Y el script los guarda así en el Sheet:

| Fecha y Hora | Nombre | Código País + Teléfono | Email | Ciudad | ¿Puede cubrir costos? | Entiende costos | Acepta privacidad |
|--------------|--------|------------------------|-------|--------|----------------------|------------------|-------------------|
| 2025-01-27... | Juan Pérez | +57 3012345678 | juan@example.com | Bogotá | si | Sí | Sí |

---

¡Listo! Tu formulario ahora enviará los datos directamente a Google Sheets. 🎉
