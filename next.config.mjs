/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dev con Webpack evita hydration mismatch en Next.Metadata con Turbopack (Next 16).
  // Usa `npm run dev:turbo` si prefieres Turbopack a sabiendas del aviso en consola.
  output: 'export',        // 👈 clave para que genere HTML estático
  
  typescript: {
    ignoreBuildErrors: true,
  },
  
  images: {
    unoptimized: true,     // necesario para export estático
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  poweredByHeader: false,
  reactStrictMode: true,
  
  // Trailing slash para mejor compatibilidad con servidores estáticos
  trailingSlash: false,
  
  // Nota: async headers() no está disponible con output: 'export'
  // Los headers deben configurarse en el servidor web (nginx, Apache, etc.)
}

export default nextConfig