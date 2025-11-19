'use client'

import { useState } from 'react'
import { ChevronDown, Menu, X, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'

export default function GlobalExpressRecruitingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const [currentBanner, setCurrentBanner] = useState(0)
  const [currentMediaSlide, setCurrentMediaSlide] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    canCover: '',
    understandsCost: false,
    acceptsPrivacy: false
  })

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const heroBanners = [
    {
      title: "TU CAMINO LEGAL Y SEGURO PARA VIVIR EN ESTADOS UNIDOS",
      subtitle: "Seguridad, estabilidad y respaldo legal para su nuevo comienzo.",
      image: "/happy-family-together-smiling.jpg",
      alt: "Familia tradicional con mascota"
    },
    {
      title: "CONSTRUYAN JUNTOS SU FUTURO EN ESTADOS UNIDOS",
      subtitle: "Oportunidades profesionales para parejas que buscan crecer en América.",
      image: "/professional-couple-smiling-together-planning-futu.jpg",
      alt: "Pareja sin hijos"
    },
    {
      title: "UN MEJOR FUTURO PARA TI Y TU FAMILIA",
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
      answer: 'Los tiempos varían según la categoría del patrocinio y el caso particular; típicamente el proceso puede tardar entre 24 y 36 meses. En la consulta inicial te daremos un estimado según tu perfil.'
    },
    {
      question: '¿Mi familia puede acompañarme?',
      answer: 'Sí. En las categorías basadas en empleo, la familia nuclear puede incluirse en el proceso (Esposa (o) e hijos menores de 18 años). Te explicaremos opciones según tu caso en tu asesoría.'
    },
    {
      question: '¿Necesito nivel de inglés avanzado?',
      answer: 'Depende del puesto. Muchas posiciones requieren un nivel básico intermedio; otras, técnico-idiomático más alto. Evaluamos tu caso para recomendarte estrategias.'
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

  return (
    <div className="min-h-screen bg-background">
      {/* Header - optimizado para mobile con mejor espaciado */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            <div className="flex-shrink-0">
              <img 
                src="/images/design-mode/GlobalExpressRecruiting_Color.png" 
                alt="Global Express Recruiting" 
                className="h-8 sm:h-12 w-auto"
              />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
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
            <nav className="md:hidden pb-4 space-y-2">
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

      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-3 sm:p-4 shadow-2xl transition-all hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </button>

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

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl p-5 sm:p-6 lg:p-8 border-t-4 border-accent max-w-lg w-full max-h-[92vh] overflow-y-auto relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500" />
            </button>

            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-1.5 sm:mb-2 font-oswald pr-8">
              Busquemos tu sponsor internacional
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-5 leading-snug">
              ¡Responde las siguientes preguntas y un consultor te contactará pronto!
            </p>

            <form className="space-y-2.5 sm:space-y-3">
              <Input 
                placeholder="¿Cómo te llamas (nombre y apellidos)?"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full rounded-full text-sm h-11 sm:h-12"
              />

              <div className="flex gap-2">
                <select className="px-3 py-2 border rounded-full bg-white w-[90px] sm:w-28 text-sm h-11 sm:h-12 flex items-center">
                  <option value="+57">🇨🇴 +57</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+52">🇲🇽 +52</option>
                </select>
                <Input 
                  placeholder="¿Cuál es tu número?"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="flex-1 rounded-full text-sm h-11 sm:h-12"
                />
              </div>

              <Input 
                type="email"
                placeholder="¿Cuál es tu correo electrónico?"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full rounded-full text-sm h-11 sm:h-12"
              />

              <Input 
                placeholder="¿En qué ciudad vives?"
                value={formData.city}
                onChange={(e) => setFormData({...formData, city: e.target.value})}
                className="w-full rounded-full text-sm h-11 sm:h-12"
              />

              <select 
                className="w-full px-3 sm:px-4 py-2 border rounded-full bg-white text-sm h-11 sm:h-12"
                value={formData.canCover}
                onChange={(e) => setFormData({...formData, canCover: e.target.value})}
              >
                <option value="">¿Puedes cubrir los costos del programa?</option>
                <option value="si">Sí</option>
                <option value="no">No</option>
                <option value="parcialmente">Parcialmente</option>
              </select>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="cost-modal"
                    checked={formData.understandsCost}
                    onCheckedChange={(checked) => setFormData({...formData, understandsCost: checked as boolean})}
                    className="rounded-full mt-0.5 flex-shrink-0"
                  />
                  <label htmlFor="cost-modal" className="text-xs sm:text-sm text-gray-700 leading-snug cursor-pointer">
                    Entiendo que la inversión mínima es de 23.990 Dólares
                  </label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="privacy-modal"
                    checked={formData.acceptsPrivacy}
                    onCheckedChange={(checked) => setFormData({...formData, acceptsPrivacy: checked as boolean})}
                    className="rounded-full mt-0.5 flex-shrink-0"
                  />
                  <label htmlFor="privacy-modal" className="text-xs sm:text-sm text-gray-700 leading-snug cursor-pointer">
                    He leído y aceptado la política de privacidad
                  </label>
                </div>
              </div>

              <Button size="lg" className="w-full bg-accent text-primary hover:bg-accent/90 font-bold text-sm sm:text-base py-5 sm:py-6 rounded-full mt-4 sm:mt-5">
                APLICAR AHORA
              </Button>
            </form>
          </div>
        </div>
      )}

      <section id="hero" className="relative overflow-hidden bg-white">
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
                  alt={banner.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
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

      <section className="py-12 sm:py-16 lg:py-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-accent/30 hidden lg:block" />
          <div className="absolute left-6 top-0 h-full w-1 border-l-2 border-accent/20 hidden lg:block" />
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary text-center mb-8 sm:mb-12 font-oswald px-4">
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
                    rel="noopener noreferrer"
                    className={`bg-white rounded-3xl shadow-lg p-6 sm:p-8 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-shadow cursor-pointer ${
                      offset > 0 ? 'hidden sm:flex' : ''
                    } ${offset > 1 ? 'hidden lg:flex' : ''}`}
                  >
                    <div className="mb-3 sm:mb-4">
                      <img 
                        src="/images/design-mode/image-3-2-15x12.png" 
                        alt="Comillas"
                        className="w-7 h-5 sm:w-9 sm:h-7"
                      />
                    </div>
                    
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6 flex-1">
                      {testimonial.quote}
                    </p>
                    
                    <div className="pt-3 sm:pt-4 border-t flex items-center justify-center">
                      <img 
                        src={testimonial.logo || "/placeholder.svg"} 
                        alt="Logo medio"
                        className="max-h-12 sm:max-h-16 max-w-full object-contain"
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

      <section id="proceso" className="py-12 sm:py-16 lg:py-24 bg-white relative">
        <div className="absolute right-0 top-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary text-center mb-8 sm:mb-12 font-oswald px-4">
            ¿Por qué confiar en Global Express Recruiting?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white rounded-3xl shadow-lg p-5 sm:p-6 hover:shadow-xl transition-shadow border-t-4 border-accent">
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3 font-oswald">
                Transparencia y ética
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Te mostramos requisitos, costos y tiempos desde el primer contacto para que tomes decisiones informadas.
              </p>
              <p className="text-primary font-bold text-xs sm:text-sm">
                Asesoría inicial sin costo
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-5 sm:p-6 hover:shadow-xl transition-shadow border-t-4 border-primary">
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3 font-oswald">
                Sponsor
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Acceso a empleadores en EE. UU. con contratos y procesos formales.
              </p>
              <p className="text-primary font-bold text-xs sm:text-sm">
                Matching con sponsor
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-5 sm:p-6 hover:shadow-xl transition-shadow border-t-4 border-accent">
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3 font-oswald">
                Acompañamiento integral
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Sólidos procesos de reclutamiento y adaptación para ti y tu familia.
              </p>
              <p className="text-primary font-bold text-xs sm:text-sm">
                Preparación migratoria
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-5 sm:p-6 hover:shadow-xl transition-shadow border-t-4 border-primary">
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3 font-oswald">
                Casos de éxito
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Historias comprobables de familias que hoy viven y trabajan legalmente en EE. UU.
              </p>
              <p className="text-primary font-bold text-xs sm:text-sm">
                Nuevo comienzo en EE. UU.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonios" className="py-12 sm:py-16 lg:py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 border-2 border-accent/20 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute left-0 bottom-0 w-64 h-64 border-2 border-accent/20 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-center mb-6 sm:mb-8">
            <img 
              src="/images/design-mode/PNG%20BLANCO.png" 
              alt="Global Express Recruiting" 
              className="h-12 sm:h-16 w-auto opacity-80"
            />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 font-oswald text-white px-4">
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
                  alt="Video testimonio" 
                  className="w-full h-full object-cover"
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
                  Descubre cómo él y su familia lo lograron.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="preguntas" className="py-12 sm:py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary text-center mb-8 sm:mb-12 font-oswald px-4">
            Preguntas frecuentes
          </h2>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-md overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-primary pr-3 sm:pr-4 font-oswald">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`h-5 w-5 text-primary flex-shrink-0 transition-transform ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-primary relative overflow-hidden">
        {/* Decorative curved line accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
        
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-accent p-8 lg:p-12 text-center shadow-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 font-oswald">
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
      <footer className="bg-white py-8 sm:py-12 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="/images/design-mode/a013fe21-a543-4dac-a60e-d377f4fe38fb-e1705677295501-768x307.jpeg" 
                alt="Oficina Florida"
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 font-oswald">Oficina Estados Unidos</h3>
                <p className="text-sm sm:text-base text-gray-700">7771 Oakland Pqark Blv Sunrise, FL 33351</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="/images/design-mode/admin-ajax.png" 
                alt="Oficina Bogotá"
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 font-oswald">Oficina Colombia</h3>
                <p className="text-sm sm:text-base text-gray-700">Edificio Paralelo 108 Av. Carrera 45 #108-27 Torre 2</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b">
            <img 
              src="/images/design-mode/image-3-1.png"
              alt="BBB Accredited Business"
              className="h-16 sm:h-20 w-auto"
            />
            <img 
              src="/images/design-mode/image-2-1.png"
              alt="NTAS No Current Advisories"
              className="h-16 sm:h-20 w-auto"
            />
          </div>

          <div className="text-center space-y-3 sm:space-y-4">
            <p className="text-sm sm:text-base text-gray-600 font-medium">
              Políticas de privacidad
            </p>
            <div className="space-y-2 text-sm sm:text-base text-gray-600">
              <p className="break-all">
                Correo: <a href="mailto:coordinacion@globalexpressrecruiting.com.co" className="text-primary hover:underline">
                  coordinacion@globalexpressrecruiting.com.co
                </a>
              </p>
              <p>
                Teléfono: <a href="tel:+573018109450" className="text-primary hover:underline">
                  +57-301 8109450
                </a>
              </p>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 text-center">
            <img 
              src="/images/design-mode/GlobalExpressRecruiting_Color.png" 
              alt="Global Express Recruiting" 
              className="h-8 sm:h-10 w-auto mx-auto opacity-50"
            />
          </div>
        </div>
      </footer>
    </div>
  )
}
