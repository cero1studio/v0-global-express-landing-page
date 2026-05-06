# Global Express Recruiting - Landing Page

Landing page oficial de Global Express Recruiting, especialistas en asesoría migratoria para visas EB-3, residencia permanente y empleo legal en Estados Unidos.

## Descripción

Sitio web optimizado para SEO que presenta los servicios de Global Express Recruiting, incluyendo:
- Asesoría profesional para proceso migratorio legal
- Patrocinio laboral para visas EB-3
- Residencia permanente en Estados Unidos
- Casos de éxito y testimonios

## Tecnologías

- **Next.js 16** - Framework React con SSR
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **Radix UI** - Componentes accesibles
- **Next.js Export** - Generación de sitio estático

## Desarrollo

Desarrollado por [CeroUno Digital](https://cerouno.digital)

## Instalación

```bash
npm install
# o
pnpm install
```

## Desarrollo

```bash
npm run dev
# o
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Build para Producción (Export Estático)

```bash
npm run build
```

Esto generará todos los archivos estáticos en la carpeta `out/`.

### ⚠️ Importante: Cómo probar el export estático

**NO abras el archivo HTML directamente desde el sistema de archivos** (`file://`) porque las rutas no funcionarán.

**Usa un servidor local:**

```bash
# Opción 1: Usar serve (instalar con: npm install -g serve)
npx serve out

# Opción 2: Usar Python
cd out
python -m http.server 8000

# Opción 3: Usar PHP
cd out
php -S localhost:8000
```

Luego abre: `http://localhost:3000` (o el puerto que indique)

### Desplegar

Los archivos en `out/` están listos para desplegar en cualquier hosting estático:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Cualquier servidor web estático

## Características SEO

- ✅ Metadata completa (Open Graph, Twitter Cards)
- ✅ Structured Data (Schema.org)
- ✅ Sitemap dinámico
- ✅ Robots.txt optimizado
- ✅ Imágenes optimizadas con lazy loading
- ✅ Estructura semántica HTML5
- ✅ PWA ready con manifest.json

## Estructura del Proyecto

```
├── app/
│   ├── layout.tsx      # Layout principal con metadata SEO
│   └── page.tsx        # Página principal
├── public/
│   ├── sitemap.xml     # Sitemap estático
│   └── robots.txt      # Robots.txt estático
├── components/         # Componentes reutilizables
├── public/            # Archivos estáticos
└── lib/               # Utilidades
```

## Licencia

Privado - Global Express Recruiting
