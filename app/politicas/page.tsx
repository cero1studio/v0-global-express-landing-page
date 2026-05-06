'use client';

import { useEffect } from 'react';

/**
 * Redirige automáticamente a la página de términos y condiciones y tratamiento de datos.
 */
export default function PoliticasPage() {
  useEffect(() => {
    window.location.href = 'https://globalexpresscol.com/wp-content/uploads/2025/06/TERMINOS-Y-CONDICIONES-TRATAMIENTO-DE-DATOS.pdf';
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontFamily: 'sans-serif'
    }}>
      <p>Redirigiendo a las políticas de privacidad...</p>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.href = "https://globalexpresscol.com/wp-content/uploads/2025/06/TERMINOS-Y-CONDICIONES-TRATAMIENTO-DE-DATOS.pdf";`,
        }}
      />
    </div>
  );
}
