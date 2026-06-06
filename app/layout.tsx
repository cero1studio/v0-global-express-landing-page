import type { Metadata, Viewport } from 'next'
import { Oswald, Inter } from 'next/font/google'
import { GoogleTags } from '@/components/google-tags'
import { GoogleTagRuntime } from '@/components/google-tag-runtime'
import { SITE_URL } from '@/lib/site-config'
import './globals.css'

const oswald = Oswald({ 
  subsets: ["latin"],
  variable: '--font-oswald',
  display: 'swap',
  preload: true,
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const siteUrl = SITE_URL
const siteName = 'Global Express Recruiting';
const defaultTitle = 'Global Express Recruiting - Su Camino Legal a Estados Unidos';
const defaultDescription = 'Seguridad, estabilidad y respaldo legal para su nuevo comienzo en Estados Unidos. Asesoría profesional para visas EB-3, residencia permanente y empleo legal en EE.UU.';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  // Tells Android Chrome to shrink the layout viewport when the keyboard opens.
  // Without this, position:fixed elements (like the drawer) stay anchored to the
  // full-screen layout viewport even though the keyboard covers the bottom half.
  interactiveWidget: 'resizes-content',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    'visa EB-3',
    'visa trabajo Estados Unidos',
    'residencia permanente USA',
    'green card',
    'migración legal Estados Unidos',
    'empleo legal USA',
    'sponsor laboral',
    'visa trabajo Colombia',
    'migración laboral',
    'trabajar legalmente en Estados Unidos',
    'proceso migratorio legal',
    'asesoría migratoria',
    'Global Express Recruiting',
    'visa EB3 Colombia',
    'empleo en Estados Unidos',
    'reclutamiento internacional',
    'patrocinio laboral USA'
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: 'Next.js',
  applicationName: siteName,
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: siteUrl,
    siteName: siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: '/images/design-mode/GlobalExpressRecruiting_Color.png',
        width: 1200,
        height: 630,
        alt: 'Global Express Recruiting - Su Camino Legal a Estados Unidos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/images/design-mode/GlobalExpressRecruiting_Color.png'],
    creator: '@globalexpressrecruiting',
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [{ url: '/faviconger.png', type: 'image/png' }],
    apple: '/faviconger.png',
    shortcut: '/faviconger.png',
  },
  manifest: '/manifest.json',
  category: 'Immigration Services',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Global Express Recruiting',
    url: siteUrl,
    logo: `${siteUrl}/images/design-mode/GlobalExpressRecruiting_Color.png`,
    description: defaultDescription,
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: '7771 Oakland Park Blvd',
        addressLocality: 'Sunrise',
        addressRegion: 'FL',
        postalCode: '33351',
        addressCountry: 'US',
        addressType: 'Oficina Estados Unidos'
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'Av. Carrera 45 #108-27 Torre 2',
        addressLocality: 'Bogotá',
        addressRegion: 'Cundinamarca',
        postalCode: '110111',
        addressCountry: 'CO',
        addressType: 'Oficina Colombia'
      }
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+57 318 4122230',
        contactType: 'customer service',
        email: 'coordinacion@globalexpressrecruiting.com.co',
        areaServed: ['CO', 'US', 'MX'],
        availableLanguage: ['Spanish', 'English']
      }
    ],
    sameAs: [
      'https://www.facebook.com/globalexpressrecruiting',
      'https://www.instagram.com/globalexpressrecruiting',
      'https://www.linkedin.com/company/globalexpressrecruiting'
    ],
    areaServed: {
      '@type': 'Country',
      name: ['United States', 'Colombia', 'Mexico']
    },
    serviceType: 'Immigration Services',
    knowsAbout: [
      'Visa EB-3',
      'Green Card',
      'Immigration Law',
      'Employment Sponsorship',
      'Legal Migration to USA'
    ]
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Global Express Recruiting',
    image: `${siteUrl}/images/design-mode/GlobalExpressRecruiting_Color.png`,
    '@id': siteUrl,
    url: siteUrl,
    telephone: '+57 318 4122230',
    email: 'coordinacion@globalexpressrecruiting.com.co',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7771 Oakland Park Blvd',
      addressLocality: 'Sunrise',
      addressRegion: 'FL',
      postalCode: '33351',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.1770,
      longitude: -80.2560
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      opens: '09:00',
      closes: '18:00'
    },
    priceRange: '$$',
    servesCuisine: false
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Immigration and Visa Services',
    provider: {
      '@type': 'Organization',
      name: 'Global Express Recruiting'
    },
    areaServed: {
      '@type': 'Country',
      name: ['United States', 'Colombia', 'Mexico']
    },
    description: 'Servicios de asesoría migratoria para visas EB-3, residencia permanente y empleo legal en Estados Unidos',
    offers: {
      '@type': 'Offer',
      description: 'Asesoría profesional para proceso migratorio legal a Estados Unidos',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cuánto dura el proceso?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Los tiempos varían según la categoría del patrocinio y el caso particular; típicamente el proceso puede tardar entre 24 y 36 meses. En la consulta inicial le daremos un estimado según su perfil.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Mi familia puede acompañarme?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. En las categorías basadas en empleo, la familia nuclear puede incluirse en el proceso (Esposa (o) e hijos menores de 18 años). Le explicaremos opciones según su caso en su asesoría.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Necesito nivel de inglés avanzado?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Depende del puesto. Muchas posiciones requieren un nivel básico intermedio; otras, técnico-idiomático más alto. Evaluamos su caso para recomendarle estrategias.'
        }
      }
    ]
  };

  const ldJson = [
    organizationSchema,
    localBusinessSchema,
    serviceSchema,
    faqSchema,
  ] as const

  return (
    <html lang="es" className={`${oswald.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        {ldJson.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <GoogleTags />
        <GoogleTagRuntime />
        {children}
      </body>
    </html>
  )
}
