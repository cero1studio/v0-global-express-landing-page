'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { GE_LEAD_EC_KEY, toPhoneE164 } from '@/lib/google-enhanced-conversions'
import { makePowChallenge, solvePoW, POW_DIFFICULTY } from '@/lib/pow'
import { ChevronDown, Menu, X, ChevronLeft, ChevronRight, Play, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Drawer } from 'vaul'

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyHdXW8v9_DZ5uq-Vf-E-w_NnMTFlQVXZYoeZcyoFdaRuj39USCMdboXtuezflP13SPjg/exec'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_RE = /^[0-9\s\-().]{6,20}$/
const FORM_COOLDOWN_MS = 60_000
const FORM_LS_KEY = '__ge_form_last_submit'

const SOCIAL_PROOF_STATS = [
  { value: '+500', label: 'Familias asesoradas' },
  { value: '+5',   label: 'Años de experiencia' },
  { value: '3',    label: 'Países de origen' },
  { value: '100%', label: 'Proceso 100% legal' },
] as const

function sanitizeField(value: string): string {
  // Strip leading formula-injection characters to prevent CSV/Sheets formula attacks
  return value.replace(/^[=+\-@\t\r]+/, '').slice(0, 500)
}

function checkRateLimit(): boolean {
  try {
    const last = parseInt(localStorage.getItem(FORM_LS_KEY) ?? '0', 10)
    return Date.now() - last < FORM_COOLDOWN_MS
  } catch {
    return false
  }
}

function markSubmitted(): void {
  try {
    localStorage.setItem(FORM_LS_KEY, String(Date.now()))
  } catch { /* ignore */ }
}

export default function GlobalExpressRecruitingPage() {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const [currentBanner, setCurrentBanner] = useState(0)
  const [currentMediaSlide, setCurrentMediaSlide] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [countryCode, setCountryCode] = useState('+57')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')
  const [powChallenge, setPowChallenge] = useState('')
  const [powNonce, setPowNonce] = useState<number | null>(null)
  const [powReady, setPowReady] = useState(false)
  const [formStep, setFormStep] = useState<1 | 2>(1)
  const [isMobile, setIsMobile] = useState(false)
  const [heroVisible, setHeroVisible] = useState(true)
  const heroRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    canCover: '',
    understandsCost: false,
    acceptsPrivacy: false,
    _hp: '',  // honeypot — must stay empty
  })

  // Prevenir scroll cuando el modal está abierto
  useEffect(() => {
    if (isModalOpen || isVideoModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isModalOpen, isVideoModalOpen])

  // Detect mobile viewport for drawer vs modal switch
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check, { passive: true })
    return () => window.removeEventListener('resize', check)
  }, [])

  // Sync --visual-vh CSS var to visualViewport so the drawer reacts instantly
  // (CSS variable update bypasses React render cycle — no blank-space flash)
  useEffect(() => {
    const root = document.documentElement
    const update = () => {
      const h = window.visualViewport?.height ?? window.innerHeight
      root.style.setProperty('--visual-vh', `${h}px`)
    }
    update()
    window.visualViewport?.addEventListener('resize', update)
    window.addEventListener('resize', update, { passive: true })
    return () => {
      window.visualViewport?.removeEventListener('resize', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  // Hide sticky CTA bar while hero section is in view (avoid 3 competing CTAs)
  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Start PoW computation in background when the form modal opens; reset form state
  useEffect(() => {
    if (!isModalOpen) return
    setFormStep(1)
    setSubmitStatus('idle')
    setSubmitMessage('')
    const challenge = makePowChallenge()
    setPowChallenge(challenge)
    setPowNonce(null)
    setPowReady(false)
    let cancelled = false
    solvePoW(challenge, POW_DIFFICULTY).then(nonce => {
      if (!cancelled) {
        setPowNonce(nonce)
        setPowReady(true)
      }
    })
    return () => { cancelled = true }
  }, [isModalOpen])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const heroBanners = [
    {
      title: "SU CAMINO LEGAL Y SEGURO PARA VIVIR EN ESTADOS UNIDOS",
      subtitle: "Seguridad, estabilidad y respaldo legal para su nuevo comienzo.",
      image: "/happy-family-together-smiling.jpg",
      alt: "Familia tradicional con mascota"
    },
    {
      title: "CONSTRUYAN JUNTOS SU FUTURO EN ESTADOS UNIDOS",
      subtitle: "Oportunidades profesionales para parejas que buscan crecer en Estados Unidos.",
      image: "/professional-couple-smiling-together-planning-futu.jpg",
      alt: "Pareja sin hijos"
    },
    {
      title: "UN MEJOR FUTURO PARA USTED Y SU FAMILIA",
      subtitle: "Brindamos apoyo integral a padres y madres solteros con hijos.",
      image: "/single-parent-with-child-smiling-hopeful.jpg",
      alt: "Soltero(a) con hijo(a)"
    }
  ]

  const mediaTestimonials = [
    {
      quote: "Nota destacada sobre oportunidades laborales para familias colombianas que buscan radicarse en los Estados Unidos a través de programas migratorios legales.",
      logo: "https://globalexpresscol.com/wp-content/uploads/2025/09/Semana_Colombia_logo.svg.svg",
      url: "https://www.semana.com/hablan-las-marcas/articulo/le-gustaria-vivir-en-estados-unidos-esta-compania-ofrece-asesoria-para-ser-reclutado-por-empresas-americanas/202300/"
    },
    {
      quote: "Entrevista sobre nuestro liderazgo en reclutamiento internacional y apoyo en la reducción del déficit laboral en los Estados Unidos, con enfoque en familias colombianas que inician su proceso migratorio.",
      logo: "https://globalexpresscol.com/wp-content/uploads/2025/09/Logo_oficial_de_Blu_Radio.svg",
      url: "https://www.bluradio.com/sociedad/estilo-de-vida/global-express-recruiting-la-compania-que-gestiona-su-residencia-permanente-en-usa-cm25"
    },
    {
      quote: "Nota especial sobre alternativas de migración legal para profesionales y empresarios que buscan radicarse en los Estados Unidos a través del visado EB-3.",
      logo: "https://globalexpresscol.com/wp-content/uploads/2025/09/Group-2686.svg",
      url: "https://www.semana.com/hablan-las-marcas/articulo/le-gustaria-vivir-en-estados-unidos-esta-compania-ofrece-asesoria-para-ser-reclutado-por-empresas-americanas/202300/"
    },
    {
      quote: "Reporte sobre el impacto del programa EB-3 en Colombia, destacando cómo Global Express Recruiting facilita el acceso legal a empleo y residencia permanente en EE. UU. para perfiles calificados.",
      logo: "https://globalexpresscol.com/wp-content/uploads/2025/09/Group-2687.svg",
      url: "https://www.infobae.com/colombia/2023/12/01/colombiana-explico-una-visa-simple-para-trabajar-legal-en-estados-unidos/"
    },
    {
      quote: "Análisis sobre los errores más comunes en entrevistas consulares y cómo Global Express Recruiting orienta a los aplicantes del programa EB-3 para afrontarlas con preparación y respaldo legal.",
      logo: "https://globalexpresscol.com/wp-content/uploads/2025/09/LA-FM-1.svg",
      url: "https://www.lafm.com.co/estilo-de-vida/los-errores-que-nunca-debe-cometer-durante-la-entrevista-para-solicitar-una-visa"
    },
    {
      quote: "Análisis sobre cómo la visa EB-3 fortalece la migración laboral legal y brinda oportunidades para trabajadores latinoamericanos en Estados Unidos.",
      logo: "https://globalexpresscol.com/wp-content/uploads/2025/08/EL-TIEMPO-1.png",
      url: "https://www.eltiempo.com/economia/finanzas-personales/la-visa-para-trabajadores-que-fortalece-la-migracion-legal-por-vias-laborales-a-estados-unidos-3474991"
    },
    {
      quote: "Nuestra sede principal en EE. UU. fue consultada para mostrar cómo conectamos Latinoamérica y EE. UU., transformando vidas de cientos de familias.",
      logo: "https://globalexpresscol.com/wp-content/uploads/2025/08/USA-TODAY-1.png",
      url: "https://www.usatoday.com/story/special/contributor-content/2025/07/25/global-express-recruitings-mission-bridging-borders-to-transform-lives/85379361007/"
    },
    {
      quote: "Recomendaciones de Global Express Recruiting sobre errores frecuentes al solicitar visas de trabajo, claves para aumentar las posibilidades de aprobación.",
      logo: "https://globalexpresscol.com/wp-content/uploads/2025/08/Capa-3.png",
      url: "https://www.lafm.com.co/estilo-de-vida/estos-son-los-errores-que-nunca-debe-cometer-al-pedir-una-visa-de-trabajo-a-eeuu"
    },
    {
      quote: "Análisis de cómo la visa EB-3 brinda a familias colombianas la oportunidad de regularizarse y trabajar legalmente en Estados Unidos.",
      logo: "https://globalexpresscol.com/wp-content/uploads/2025/08/YAHOO-NEWS-1.svg",
      url: "https://es-us.noticias.yahoo.com/alternativa-colombianos-b%C3%BAsqueda-empleo-residencia-070000774.html"
    },
    {
      quote: "Visado EB-3 se destaca como vía segura frente a políticas migratorias restrictivas, ofreciendo alternativas laborales para familias colombianas.",
      logo: "https://globalexpresscol.com/wp-content/uploads/2025/08/Group-2703.png",
      url: "https://www.pulzo.com/mundo/estados-unidos/visa-que-esquiva-politicas-donald-trump-cual-es-como-pide-PP4604830#google_vignette"
    },
    {
      quote: "Cobertura sobre programas EB-3 como opción de migración legal para colombianos, facilitando empleo formal y residencia permanente en Estados Unidos.",
      logo: "https://globalexpresscol.com/wp-content/uploads/2025/08/LOGOS_VALORA_ANALITIK-03-1.svg",
      url: "https://www.valoraanalitik.com/alternativa-colombianos-empleo-ee-uu"
    },
    {
      quote: "Reportaje sobre cómo las visas EB-3 abren camino legal hacia la Green Card para trabajadores y sus familias en Estados Unidos.",
      logo: "https://globalexpresscol.com/wp-content/uploads/2025/08/Red_Noticias2019-1.svg",
      url: "https://redmas.com.co/mundo/Relevan-la-via-legal-que-abre-camino-para-la-green-card-en-Estados-Unidos-usted-y-su-familia-pueden-aplicar-desde-ya-20250621-0004.html"
    },
    {
      quote: "El endurecimiento de políticas migratorias refuerza la importancia de las vías laborales EB-3 para migrar legalmente a Estados Unidos.",
      logo: "https://globalexpresscol.com/wp-content/uploads/2025/08/Capa-1.jpg",
      url: "https://www.kienyke.com/colombia/la-alternativa-de-visado-que-cobra-fuerza-tras-duras-politicas-de-trump"
    },
    {
      quote: "La migración laboral EB-3 sigue siendo una oportunidad viable, pese a restricciones fronterizas, brindando opciones legales a latinoamericanos.",
      logo: "https://globalexpresscol.com/wp-content/uploads/2025/08/Capa-1-6.svg",
      url: "https://technocio.com/politica-migratoria-de-trump-endurece-el-ingreso-a-ee-uu-pero-fortalece-la-migracion-laboral-legal"
    },
    {
      quote: "Opinión experta sobre política migratoria y cómo la visa EB-3 fortalece el acceso legal a empleo en EE.UU. para profesionales colombianos.",
      logo: "https://globalexpresscol.com/wp-content/uploads/2025/08/Capa-1-1.png",
      url: "https://www.acis.org.co/blog/noticias-2/politica-migratoria-de-trump-endurece-el-ingreso-a-ee-uu-pero-fortalece-la-migracion-laboral-legal-1040"
    },
    {
      quote: "Alternativas legales EB-3 para colombianos que buscan empleo y residencia en EE.UU., destacando la importancia de la migración laboral ordenada.",
      logo: "https://globalexpresscol.com/wp-content/uploads/2025/08/PULSO-2-1.jpg",
      url: "https://www.pulzo.com/mundo/estados-unidos/alternativa-colombianos-busqueda-empleo-residencia-eeuu-PP4612152A"
    },
    {
      quote: "Forbes México Forbes destacó cómo Global Express Recruiting impulsa la migración laboral legal, fortaleciendo la fuerza laboral en EE. UU. con talento latinoamericano.",
      logo: "https://globalexpresscol.com/wp-content/uploads/2025/09/logo_forbes_mexico-1.png",
      url: "https://forbes.com.mx/patrocinado-impulsar-la-inmigracion-legal-para-fortalecer-la-fuerza-laboral-centrado-en-personas/"
    },
    {
      quote: "Reportaje sobre cómo la alternativa EB-3 gana fuerza en medio de políticas migratorias más estrictas en Estados Unidos.",
      logo: "https://globalexpresscol.com/wp-content/uploads/2025/08/La_Patilla-1.png",
      url: "https://lapatilla.com/2025/06/29/la-alternativa-de-visado-que-cobra-fuerza-tras-politicas-migratorias-de-trump"
    }
  ]

  const faqs = [
    {
      question: '¿Cuánto dura el proceso?',
      answer: 'Los tiempos varían según la categoría del patrocinio y el caso particular; típicamente el proceso puede tardar entre 24 y 36 meses. En la consulta inicial le daremos un estimado según su perfil.'
    },
    {
      question: '¿Mi familia puede acompañarme?',
      answer: 'Sí. En las categorías basadas en empleo, la familia nuclear puede incluirse en el proceso (Esposa (o) e hijos menores de 18 años). Le explicaremos opciones según su caso en su asesoría.'
    },
    {
      question: '¿Necesito nivel de inglés avanzado?',
      answer: 'Depende del puesto. Muchas posiciones requieren un nivel básico intermedio; otras, técnico-idiomático más alto. Evaluamos su caso para recomendarle estrategias.'
    }
  ]

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % heroBanners.length)
  }

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + heroBanners.length) % heroBanners.length)
  }

  const nextMediaSlide = () => {
    setCurrentMediaSlide((prev) => (prev + 1) % mediaTestimonials.length)
  }

  const prevMediaSlide = () => {
    setCurrentMediaSlide((prev) => (prev - 1 + mediaTestimonials.length) % mediaTestimonials.length)
  }


  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    setFormStep(1)
  }, [])

  const handleStep1Next = () => {
    const nameClean = sanitizeField(formData.name.trim())
    const phoneClean = formData.phone.trim().replace(/\D/g, '').slice(0, 15)
    const emailClean = formData.email.trim().toLowerCase()

    if (!nameClean || nameClean.length < 2) {
      setSubmitStatus('error')
      setSubmitMessage('Por favor ingrese su nombre completo')
      return
    }
    if (!PHONE_RE.test(formData.phone.trim()) || phoneClean.length < 6) {
      setSubmitStatus('error')
      setSubmitMessage('Por favor ingrese un número de teléfono válido (solo dígitos)')
      return
    }
    if (!EMAIL_RE.test(emailClean)) {
      setSubmitStatus('error')
      setSubmitMessage('Por favor ingrese un correo electrónico válido')
      return
    }
    setSubmitStatus('idle')
    setSubmitMessage('')
    setFormStep(2)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Honeypot check — bots fill hidden fields
    if (formData._hp) return

    // Client-side rate limiting
    if (!powReady || powNonce === null) {
      setSubmitStatus('error')
      setSubmitMessage('Verificación de seguridad en proceso, intente en un momento.')
      return
    }

    if (checkRateLimit()) {
      setSubmitStatus('error')
      setSubmitMessage('Por favor espere un momento antes de enviar nuevamente.')
      return
    }

    const nameClean = sanitizeField(formData.name.trim())
    const phoneClean = formData.phone.trim().replace(/\D/g, '').slice(0, 15)
    const emailClean = formData.email.trim().toLowerCase().slice(0, 254)
    const cityClean = sanitizeField(formData.city.trim())

    if (!nameClean || nameClean.length < 2) {
      setSubmitStatus('error')
      setSubmitMessage('Por favor ingrese su nombre completo')
      return
    }

    if (!phoneClean || !PHONE_RE.test(formData.phone.trim())) {
      setSubmitStatus('error')
      setSubmitMessage('Por favor ingrese un número de teléfono válido (solo dígitos)')
      return
    }

    if (!emailClean || !EMAIL_RE.test(emailClean)) {
      setSubmitStatus('error')
      setSubmitMessage('Por favor ingrese un correo electrónico válido')
      return
    }

    if (!formData.acceptsPrivacy) {
      setSubmitStatus('error')
      setSubmitMessage('Debe aceptar la política de privacidad para continuar')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      const payload = {
        name: nameClean,
        countryCode: countryCode.replace(/[^+0-9]/g, '').slice(0, 5),
        phone: phoneClean,
        email: emailClean,
        city: cityClean,
        canCover: ['si', 'no', 'parcialmente', ''].includes(formData.canCover) ? formData.canCover : '',
        understandsCost: formData.understandsCost,
        acceptsPrivacy: formData.acceptsPrivacy,
        _pow: { challenge: powChallenge, nonce: powNonce, difficulty: POW_DIFFICULTY },
      }

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      await new Promise(resolve => setTimeout(resolve, 1500))

      markSubmitted()

      const graciasQuery = new URLSearchParams()
      graciasQuery.set('nombre', nameClean)
      graciasQuery.set('telefono', `${countryCode} ${phoneClean}`.trim())
      const graciasUrl = `/gracias?${graciasQuery.toString()}`

      try {
        const phoneE164 = toPhoneE164(countryCode, phoneClean)
        sessionStorage.setItem(
          GE_LEAD_EC_KEY,
          JSON.stringify({ email: emailClean, phoneE164 })
        )
      } catch {
        /* private mode / storage lleno */
      }

      setIsSubmitting(false)
      closeModal()
      setPowChallenge('')
      setPowNonce(null)
      setPowReady(false)
      setFormData({
        name: '',
        phone: '',
        email: '',
        city: '',
        canCover: '',
        understandsCost: false,
        acceptsPrivacy: false,
        _hp: '',
      })
      setCountryCode('+57')
      router.push(graciasUrl)

    } catch (error) {
      console.error('Error al enviar formulario:', error)
      setSubmitStatus('error')
      setSubmitMessage('Hubo un error al enviar el formulario. Por favor verifique su conexión e intente nuevamente.')
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header - optimizado para mobile con mejor espaciado */}
      <header className="sticky top-0 z-50 bg-white shadow-sm" role="banner">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            <div className="flex-shrink-0">
              <img 
                src="/images/design-mode/GlobalExpressRecruiting_Color.png" 
                alt="Global Express Recruiting - Asesoría migratoria legal para visas EB-3 y residencia permanente en Estados Unidos" 
                className="h-8 sm:h-12 w-auto"
                width={200}
                height={60}
                loading="eager"
                fetchPriority="high"
              />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Navegación principal">
              <button onClick={() => scrollToSection('proceso')} className="text-gray-700 hover:text-primary transition-colors font-medium">
                Proceso
              </button>
              <button onClick={() => scrollToSection('testimonios')} className="text-gray-700 hover:text-primary transition-colors font-medium">
                Testimonios
              </button>
              <button onClick={() => scrollToSection('preguntas')} className="text-gray-700 hover:text-primary transition-colors font-medium">
                Preguntas
              </button>
              <Button onClick={() => setIsModalOpen(true)} className="bg-primary hover:bg-primary/90 text-white rounded-full">
                Contáctenos
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2" role="navigation" aria-label="Menú móvil">
              <button onClick={() => scrollToSection('proceso')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-full">
                Proceso
              </button>
              <button onClick={() => scrollToSection('testimonios')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-full">
                Testimonios
              </button>
              <button onClick={() => scrollToSection('preguntas')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-full">
                Preguntas
              </button>
              <Button onClick={() => setIsModalOpen(true)} className="w-full bg-primary hover:bg-primary/90 text-white rounded-full">
                Contáctenos
              </Button>
            </nav>
          )}
        </div>
      </header>


      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95">
          <button
            onClick={() => setIsVideoModalOpen(false)}
            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors z-10"
            aria-label="Cerrar video"
          >
            <X className="h-8 w-8 text-white" />
          </button>
          <div className="w-full max-w-6xl aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/DeDXVvaExiM?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* ── Contact Form — Vaul Drawer (mobile) / centered modal (desktop) ── */}
      {(() => {
        const spinnerSm = (
          <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )
        const spinnerLg = (
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )

        const formContent = (
          <div className="px-5 pt-3 pb-6 sm:px-6 sm:pb-8">
            {/* Progress bar */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-300 ease-out"
                  style={{ width: formStep === 1 ? '50%' : '100%' }}
                />
              </div>
              <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">Paso {formStep} de 2</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-1 font-oswald pr-8">
              {formStep === 1 ? 'Busquemos su sponsor internacional' : 'Un poco más sobre usted'}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-snug">
              {formStep === 1
                ? '¡Responda las siguientes preguntas y un consultor lo contactará pronto!'
                : 'Estos datos nos ayudan a encontrar la mejor opción para su caso.'}
            </p>

            {/* Error panel */}
            {submitStatus === 'error' && (
              <div className="mb-4 p-4 bg-red-50 border-2 border-red-200 rounded-2xl text-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="text-sm text-red-700 leading-relaxed">{submitMessage || 'Hubo un problema. Por favor intente nuevamente.'}</p>
                  <Button
                    onClick={() => { setSubmitStatus('idle'); setSubmitMessage('') }}
                    className="bg-primary hover:bg-primary/90 text-white font-bold text-sm px-5 py-2 rounded-full"
                  >
                    Intentar nuevamente
                  </Button>
                </div>
              </div>
            )}

            {/* Step 1: Contact info */}
            {formStep === 1 && submitStatus !== 'error' && (
              <div className="space-y-3">
                <Input
                  placeholder="¿Cómo se llama (nombre y apellidos)?"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full rounded-full text-sm h-12"
                  inputMode="text"
                  autoComplete="name"
                  maxLength={100}
                  autoFocus
                />
                <div className="flex gap-2">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="px-3 py-2 border rounded-full bg-white w-[90px] sm:w-28 text-sm h-12"
                  >
                    <option value="+57">🇨🇴 +57</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+52">🇲🇽 +52</option>
                  </select>
                  <Input
                    type="tel"
                    placeholder="¿Cuál es su número?"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="flex-1 rounded-full text-sm h-12"
                    inputMode="tel"
                    autoComplete="tel"
                    maxLength={20}
                  />
                </div>
                <Input
                  type="email"
                  placeholder="¿Cuál es su correo electrónico?"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full rounded-full text-sm h-12"
                  inputMode="email"
                  autoComplete="email"
                  maxLength={254}
                />
                <Button
                  type="button"
                  size="lg"
                  onClick={handleStep1Next}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-sm sm:text-base py-5 sm:py-6 rounded-full mt-1"
                >
                  Continuar →
                </Button>
              </div>
            )}

            {/* Step 2: Additional info + submit */}
            {formStep === 2 && submitStatus !== 'error' && (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  name="_hp"
                  value={formData._hp}
                  onChange={(e) => setFormData({...formData, _hp: e.target.value})}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ display: 'none' }}
                />
                <Input
                  placeholder="¿En qué ciudad vives?"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  className="w-full rounded-full text-sm h-12"
                  inputMode="text"
                  autoComplete="address-level2"
                  maxLength={100}
                />
                <select
                  className="w-full px-4 py-2 border rounded-full bg-white text-sm h-12"
                  value={formData.canCover}
                  onChange={(e) => setFormData({...formData, canCover: e.target.value})}
                >
                  <option value="">¿Puede cubrir los costos del programa?</option>
                  <option value="si">Sí</option>
                  <option value="no">No</option>
                  <option value="parcialmente">Parcialmente</option>
                </select>
                <div className="space-y-3 pt-1">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="cost-modal"
                      checked={formData.understandsCost}
                      onCheckedChange={(checked) => setFormData({...formData, understandsCost: checked as boolean})}
                      className="mt-0.5 flex-shrink-0"
                    />
                    <label htmlFor="cost-modal" className="text-xs sm:text-sm text-gray-700 leading-snug cursor-pointer">
                      Entiendo que la inversión mínima es de 25.000 USD
                    </label>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="privacy-modal"
                      checked={formData.acceptsPrivacy}
                      onCheckedChange={(checked) => setFormData({...formData, acceptsPrivacy: checked as boolean})}
                      className="mt-0.5 flex-shrink-0"
                    />
                    <label htmlFor="privacy-modal" className="text-xs sm:text-sm text-gray-700 leading-snug cursor-pointer">
                      He leído y aceptado la{' '}
                      <a href="/politicas" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        política de privacidad
                      </a>
                    </label>
                  </div>
                </div>
                <div className="flex gap-2 pt-1">
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={() => { setFormStep(1); setSubmitStatus('idle'); setSubmitMessage('') }}
                    className="flex-1 rounded-full font-bold text-sm py-5"
                  >
                    ← Volver
                  </Button>
                  <Button
                    type="submit"
                    size="lg"
                    className="flex-[2] bg-accent text-primary hover:bg-accent/90 font-bold text-sm py-5 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting || !formData.acceptsPrivacy || !powReady}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">{spinnerLg} ENVIANDO...</span>
                    ) : !powReady ? (
                      <span className="flex items-center justify-center gap-2">{spinnerSm} Verificando...</span>
                    ) : 'APLICAR AHORA'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        )

        if (isMobile) {
          return (
            <Drawer.Root open={isModalOpen} onOpenChange={(open) => { if (!open) closeModal() }}>
              <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
                <Drawer.Content
                  aria-describedby={undefined}
                  className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl border-t-4 border-accent outline-none flex flex-col"
                  style={{ maxHeight: 'var(--visual-vh, 92dvh)' }}
                >
                  <Drawer.Title className="sr-only">Formulario de contacto</Drawer.Title>
                  {/* Handle — no crece ni encoge */}
                  <Drawer.Handle className="mx-auto mt-3 mb-1 h-1.5 w-12 rounded-full bg-gray-200 flex-shrink-0" />
                  {/* Área scrollable — ocupa todo el espacio restante, min-h-0 es clave */}
                  <div
                    className="flex-1 overflow-y-auto min-h-0"
                    style={{ paddingBottom: 'env(safe-area-inset-bottom, 12px)' }}
                  >
                    {formContent}
                  </div>
                </Drawer.Content>
              </Drawer.Portal>
            </Drawer.Root>
          )
        }

        return isModalOpen ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-3xl shadow-2xl border-t-4 border-accent max-w-lg w-full max-h-[92vh] overflow-y-auto relative">
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
                aria-label="Cerrar"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500" />
              </button>
              {formContent}
            </div>
          </div>
        ) : null
      })()}

      <main role="main" className="relative">
      <section id="hero" ref={heroRef} className="relative overflow-hidden bg-white" aria-label="Hero - Su camino legal a Estados Unidos">
        <div className="relative h-[600px] sm:h-screen sm:min-h-[600px] sm:max-h-[900px]">
          {heroBanners.map((banner, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                currentBanner === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className="absolute inset-0">
                <img 
                  src={banner.image || "/placeholder.svg"}
                  alt={`${banner.alt} - ${banner.title} - Global Express Recruiting ayuda a familias a migrar legalmente a Estados Unidos`}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  width={1920}
                  height={1080}
                />
                <div className="absolute inset-0 hero-gradient-overlay" />
              </div>

              <div className="relative h-full flex items-center">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-3xl">
                    <div className="space-y-4 sm:space-y-6 text-white">
                      <div className="inline-block">
                        <div className="bg-white/95 border-l-4 border-primary text-gray-900 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-r-xl shadow-xl backdrop-blur-sm">
                          <div className="flex items-center gap-2 sm:gap-2.5">
                            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-primary"></span>
                            </span>
                            <span className="font-bold text-[10px] sm:text-xs uppercase tracking-wide">
                              <span className="inline sm:hidden">Últimas vacantes disponibles</span>
                              <span className="hidden sm:inline">Próximos a cierre de ciclo de reclutamiento</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-oswald">
                        {banner.title}
                      </h1>
                      
                      <p className="text-base sm:text-xl lg:text-2xl leading-relaxed">
                        {banner.subtitle}
                      </p>
                      
                      <Button 
                        size="lg" 
                        onClick={() => setIsModalOpen(true)}
                        className="bg-accent text-primary hover:bg-accent/90 font-bold text-sm sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full"
                      >
                        Solicitar asesoría
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 sm:gap-4">
            <button 
              onClick={prevBanner}
              className="p-2 sm:p-3 rounded-full bg-white/90 hover:bg-white transition-colors shadow-lg"
              aria-label="Banner anterior"
            >
              <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
            </button>
            
            <div className="flex gap-2 sm:gap-3">
              {heroBanners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBanner(index)}
                  className={`h-2 sm:h-3 rounded-full transition-all ${
                    currentBanner === index 
                      ? 'bg-white w-8 sm:w-12' 
                      : 'bg-white/50 hover:bg-white/75 w-2 sm:w-3'
                  }`}
                  aria-label={`Ir al banner ${index + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextBanner}
              className="p-2 sm:p-3 rounded-full bg-white/90 hover:bg-white transition-colors shadow-lg"
              aria-label="Siguiente banner"
            >
              <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
            </button>
          </div>
        </div>
      </section>

      {/* Social proof stats strip */}
      <section className="bg-primary py-7 sm:py-10" aria-label="Estadísticas de confianza">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {SOCIAL_PROOF_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent font-oswald">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/80 mt-1 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-background relative" aria-labelledby="medios-heading">
        <div className="absolute top-0 left-0 right-0 h-1 decorative-gradient-horizontal" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          
          <h2 id="medios-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary text-center mb-8 sm:mb-12 font-oswald px-4">
            Reconocidos por los principales medios
          </h2>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {[0, 1, 2].map((offset) => {
                const index = (currentMediaSlide + offset) % mediaTestimonials.length
                const testimonial = mediaTestimonials[index]
                return (
                  <a
                    key={index}
                    href={testimonial.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className={`bg-white rounded-3xl shadow-lg p-6 sm:p-8 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-shadow cursor-pointer ${
                      offset > 0 ? 'hidden sm:flex' : ''
                    } ${offset > 1 ? 'hidden lg:flex' : ''}`}
                  >
                    <div className="mb-3 sm:mb-4">
                      <Quote 
                        className="w-7 h-7 sm:w-9 sm:h-9 text-primary scale-x-[-1]"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                    
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6 flex-1">
                      {testimonial.quote}
                    </p>
                    
                    <div className="pt-3 sm:pt-4 border-t flex items-center justify-center">
                      <img 
                        src={testimonial.logo || "/placeholder.svg"} 
                        alt={`Logo del medio de comunicación que ha cubierto Global Express Recruiting - ${testimonial.quote.substring(0, 50)}...`}
                        className="max-h-12 sm:max-h-16 max-w-full object-contain"
                        width={200}
                        height={80}
                        loading="lazy"
                      />
                    </div>
                  </a>
                )
              })}
            </div>

            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <button 
                onClick={prevMediaSlide}
                className="p-2 sm:p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft className="h-5 w-5 sm:h-5 sm:w-5 text-primary" />
              </button>
              
              <div className="flex gap-1.5 sm:gap-2">
                {mediaTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMediaSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      currentMediaSlide === index 
                        ? 'bg-primary w-6 sm:w-8' 
                        : 'bg-gray-300 hover:bg-gray-400 w-2'
                    }`}
                    aria-label={`Ir al testimonio ${index + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={nextMediaSlide}
                className="p-2 sm:p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                aria-label="Siguiente testimonio"
              >
                <ChevronRight className="h-5 w-5 sm:h-5 sm:w-5 text-primary" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="proceso" className="py-12 sm:py-16 lg:py-24 bg-white relative" aria-labelledby="proceso-heading">
        <div className="absolute right-0 top-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 id="proceso-heading" className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary text-center mb-8 sm:mb-12 font-oswald px-4">
            ¿Por qué confiar en Global Express Recruiting?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <article className="bg-white rounded-3xl shadow-lg p-5 sm:p-6 hover:shadow-xl transition-shadow border-t-4 border-accent">
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3 font-oswald">
                Transparencia y ética
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Le mostramos requisitos, costos y tiempos desde el primer contacto para que tome decisiones informadas.
              </p>
              <p className="text-primary font-bold text-xs sm:text-sm">
                Asesoría inicial sin costo
              </p>
            </article>

            <article className="bg-white rounded-3xl shadow-lg p-5 sm:p-6 hover:shadow-xl transition-shadow border-t-4 border-primary">
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3 font-oswald">
                Sponsor
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Acceso a empleadores en EE. UU. con contratos y procesos formales.
              </p>
              <p className="text-primary font-bold text-xs sm:text-sm">
                Matching con sponsor
              </p>
            </article>

            <article className="bg-white rounded-3xl shadow-lg p-5 sm:p-6 hover:shadow-xl transition-shadow border-t-4 border-accent">
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3 font-oswald">
                Acompañamiento integral
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Sólidos procesos de reclutamiento y adaptación para usted y su familia.
              </p>
              <p className="text-primary font-bold text-xs sm:text-sm">
                Preparación migratoria
              </p>
            </article>

            <article className="bg-white rounded-3xl shadow-lg p-5 sm:p-6 hover:shadow-xl transition-shadow border-t-4 border-primary">
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3 font-oswald">
                Casos de éxito
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Historias comprobables de familias que hoy viven y trabajan legalmente en EE. UU.
              </p>
              <p className="text-primary font-bold text-xs sm:text-sm">
                Nuevo comienzo en EE. UU.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="testimonios" className="py-12 sm:py-16 lg:py-24 bg-primary text-white relative overflow-hidden" aria-labelledby="testimonios-heading">
        <div className="absolute right-0 top-0 w-96 h-96 border-2 border-accent/20 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute left-0 bottom-0 w-64 h-64 border-2 border-accent/20 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-center mb-6 sm:mb-8">
            <img 
              src="/images/png-20blanco.png" 
              alt="Global Express Recruiting - Casos de éxito de familias que migraron legalmente a Estados Unidos" 
              className="h-12 sm:h-16 w-auto opacity-80"
              width={200}
              height={80}
              loading="lazy"
            />
          </div>

          <h2 id="testimonios-heading" className="text-2xl sm:text-3xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 font-oswald text-white px-4">
            Casos de éxito destacados
          </h2>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="relative rounded-3xl overflow-hidden bg-gray-800 aspect-video group cursor-pointer"
              >
                <img 
                  src="/images/design-mode/maxresdefault(1).jpg" 
                  alt="Video testimonio de Mauricio - Caso de éxito de migración legal a Estados Unidos con Global Express Recruiting" 
                  className="w-full h-full object-cover"
                  width={1280}
                  height={720}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 sm:h-10 sm:w-10 text-primary ml-1" fill="currentColor" />
                  </div>
                </div>
              </button>

              <div className="space-y-3 sm:space-y-4">
                <p className="text-base sm:text-xl lg:text-2xl leading-relaxed text-white">
                  Mauricio ya inició su camino hacia una vida y un trabajo legal en EE.UU.
                  Descubra cómo él y su familia lo lograron.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="preguntas" className="py-12 sm:py-16 lg:py-24 bg-background relative" aria-labelledby="preguntas-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative">
          <h2 id="preguntas-heading" className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary text-center mb-8 sm:mb-12 font-oswald px-4">
            Preguntas frecuentes
          </h2>

          <div className="space-y-3 sm:space-y-4" itemScope itemType="https://schema.org/FAQPage">
            {faqs.map((faq, index) => (
              <article key={index} className="bg-white rounded-3xl shadow-md overflow-hidden" itemScope itemType="https://schema.org/Question">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors"
                  aria-expanded={openFaqIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-base sm:text-lg font-bold text-primary pr-3 sm:pr-4 font-oswald" itemProp="name">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`h-5 w-5 text-primary flex-shrink-0 transition-transform ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {openFaqIndex === index && (
                  <div 
                    id={`faq-answer-${index}`}
                    className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base text-gray-600 leading-relaxed"
                    itemScope
                    itemType="https://schema.org/Answer"
                    itemProp="acceptedAnswer"
                  >
                    <span itemProp="text">{faq.answer}</span>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-primary relative overflow-hidden" aria-labelledby="cta-heading">
        {/* Decorative curved line accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
        
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-accent p-8 lg:p-12 text-center shadow-2xl">
            <h2 id="cta-heading" className="text-3xl lg:text-4xl font-bold text-primary mb-6 font-oswald">
              Acceda a una reunión virtual
            </h2>
            <p className="text-lg text-primary/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              En este espacio obtendrá claridad sobre su proceso migratorio, oportunidades laborales vigentes y la tranquilidad de información segura para su familia.
            </p>
            <Button size="lg" onClick={() => setIsModalOpen(true)} className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-12 py-6 rounded-full">
              Quiero agendar
            </Button>
          </div>
        </div>
      </section>
      </main>
      <footer className="bg-white py-8 sm:py-12 border-t" role="contentinfo">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="/images/design-mode/a013fe21-a543-4dac-a60e-d377f4fe38fb-e1705677295501-768x307.jpeg" 
                alt="Oficina de Global Express Recruiting en Sunrise, Florida, Estados Unidos - 7771 Oakland Park Blvd"
                className="w-full h-40 sm:h-48 object-cover"
                width={768}
                height={307}
                loading="lazy"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 font-oswald">Oficina Estados Unidos</h3>
                <address className="text-sm sm:text-base text-gray-700 not-italic">7771 Oakland Park Blvd Sunrise, FL 33351</address>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="/images/design-mode/admin-ajax.png" 
                alt="Oficina de Global Express Recruiting en Bogotá, Colombia - Edificio Paralelo 108"
                className="w-full h-40 sm:h-48 object-cover"
                width={768}
                height={307}
                loading="lazy"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 font-oswald">Oficina Colombia</h3>
                <address className="text-sm sm:text-base text-gray-700 not-italic">Edificio Paralelo 108 Av. Carrera 45 #108-27 Torre 2</address>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b">
            <img 
              src="/images/design-mode/image-3-1.png"
              alt="Global Express Recruiting - Certificación BBB Accredited Business - Negocio acreditado"
              className="h-16 sm:h-20 w-auto"
              width={120}
              height={80}
              loading="lazy"
            />
            <img 
              src="/images/design-mode/image-2-1.png"
              alt="Global Express Recruiting - Certificación NTAS No Current Advisories - Sin advertencias actuales"
              className="h-16 sm:h-20 w-auto"
              width={120}
              height={80}
              loading="lazy"
            />
          </div>

          <div className="text-center space-y-3 sm:space-y-4">
            <p className="text-sm sm:text-base text-gray-600 font-medium">
              <a 
                href="/politicas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Términos y condiciones - Políticas de privacidad
              </a>
            </p>
            <div className="space-y-2 text-sm sm:text-base text-gray-600">
              <p className="break-all">
                Correo: <a href="mailto:coordinacion@globalexpressrecruiting.com.co" className="text-primary hover:underline">
                  coordinacion@globalexpressrecruiting.com.co
                </a>
              </p>
              <p className="break-all">
                WhatsApp: <a
                  href="https://wa.me/573018109450?text=Hola%20Global%20Express%20Recruiting%2C%20quiero%20más%20información"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  +57 318 4122230
                </a>
              </p>
              <p>
                Teléfono: <a href="tel:+573184122230" className="text-primary hover:underline">
                  +57 318 4122230
                </a>
              </p>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 text-center">
            <img 
              src="/images/design-mode/GlobalExpressRecruiting_Color.png" 
              alt="Global Express Recruiting - Logo - Asesoría migratoria legal para visas EB-3 y residencia permanente en Estados Unidos" 
              className="h-8 sm:h-10 w-auto mx-auto opacity-50"
              width={200}
              height={60}
              loading="lazy"
            />
          </div>
        </div>
      </footer>

      {/* Spacer so footer content isn't hidden behind the sticky CTA bar on mobile */}
      {!heroVisible && <div className="h-20 md:hidden" aria-hidden="true" />}

      {/* Sticky CTA bar — mobile only, hidden while hero is in view */}
      {!heroVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
          <Button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-accent text-primary hover:bg-accent/90 font-bold text-base rounded-full py-5 shadow-md"
          >
            APLICAR AHORA
          </Button>
        </div>
      )}

      <a
        href="https://wa.me/573184122230?text=Hola%20Global%20Express%20Recruiting%2C%20quiero%20más%20información"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className={`fixed right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:bg-[#1ebe57] focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-slate-900 ${!heroVisible ? 'bottom-[calc(5.5rem+env(safe-area-inset-bottom))] md:bottom-5' : 'bottom-5'}`}
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.15-.198.297-.768.967-.942 1.165-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.786-1.48-1.754-1.653-2.051-.173-.297-.019-.458.13-.607.134-.133.297-.347.446-.52.149-.173.198-.297.298-.496.099-.198.05-.372-.025-.52-.075-.149-.672-1.618-.921-2.215-.242-.581-.487-.502-.672-.51l-.573-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
          <path d="M12.004 2.003c-5.52 0-9.998 4.478-9.998 9.999 0 1.764.463 3.506 1.342 5.025l-1.41 5.16 5.289-1.387c1.413.771 3.07 1.185 4.777 1.185 5.52 0 9.998-4.478 9.998-9.999s-4.478-9.999-9.998-9.999zm0 18.3c-1.46 0-2.883-.385-4.112-1.114l-.294-.173-3.14.823.84-2.915-.19-.305a7.9 7.9 0 01-1.183-4.184c0-4.365 3.557-7.921 7.92-7.921 4.365 0 7.92 3.556 7.92 7.921s-3.555 7.921-7.92 7.921z" />
        </svg>
      </a>
    </div>
  )
}
