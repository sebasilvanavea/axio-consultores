import { MessageCircle, Calculator, TrendingUp, CheckCircle, Building, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { waLink, PHONE_DISPLAY, PHONE_E164 } from '../config';

const Hero = () => {
  // Service spotlight data
  const services = [
    {
      key: 'contabilidad',
      name: 'Contabilidad Integral',
      icon: Calculator,
      tag: 'Mensual',
      desc: 'Orden, cumplimiento y control financiero para decidir con claridad.',
      bullets: ['Estados y reportes claros', 'Impuestos y obligaciones al día', 'Acompañamiento continuo'],
      gradient: 'from-primary-50 to-warm-100 dark:from-sage-900/20 dark:to-gray-800',
      ring: 'ring-primary-200/60 dark:ring-sage-700'
    },
    {
      key: 'tributaria',
      name: 'Asesoría Tributaria',
      icon: TrendingUp,
      tag: 'Estrategia',
      desc: 'Optimiza tu carga tributaria cumpliendo la norma, sin sorpresas.',
      bullets: ['Planificación y proyección', 'Revisiones preventivas', 'Soporte ante fiscalizaciones'],
      gradient: 'from-secondary-50 to-warm-100 dark:from-secondary-900/20 dark:to-gray-800',
      ring: 'ring-secondary-200/60 dark:ring-secondary-700'
    },
    {
      key: 'regularizaciones',
      name: 'Regularizaciones SII / TGR',
      icon: CheckCircle,
      tag: 'Correcciones',
      desc: 'Normalizamos tus pendientes con SII y Tesorería para retomar el control.',
      bullets: ['Convenios y rectificaciones', 'Levantamiento de observaciones', 'Defensa y representación'],
      gradient: 'from-warm-100 to-primary-50 dark:from-primary-900/10 dark:to-gray-800',
      ring: 'ring-primary-200/60 dark:ring-sage-700'
    },
    {
      key: 'financiera',
      name: 'Planificación Financiera',
      icon: Building,
      tag: 'Crecimiento',
      desc: 'Proyección de caja, indicadores y metas para escalar con confianza.',
      bullets: ['Presupuestos y KPIs', 'Análisis de rentabilidad', 'Tableros ejecutivos'],
      gradient: 'from-sage-50 to-warm-100 dark:from-sage-900/20 dark:to-gray-800',
      ring: 'ring-sage-200/60 dark:ring-sage-700'
    }
  ];

  // Restore interactive preview state (auto-rotate)
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const id = setInterval(() => {
      if (!paused) setActive((prev) => (prev + 1) % services.length);
    }, 7000);
    return () => clearInterval(id);
  }, [paused]);

  // Subtle parallax for background accents
  const [parallax, setParallax] = useState(0);
  useEffect(() => {
    const onScroll = () => setParallax(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Spacer to offset fixed navbar height (h-20) */}
      <div className="h-20" aria-hidden="true" />

      {/* Top Banner */}
      <div className="bg-warm-800 dark:bg-gray-700 text-white py-2 text-center">
        <div className="flex items-center justify-center gap-2 text-sm">
          <span>
            📅 Agenda una reunión sin costo{' '}
            <a href={`tel:${PHONE_E164}`} className="underline font-medium">
              {PHONE_DISPLAY}
            </a>
          </span>
        </div>
      </div>

      {/* Main Hero Section */}
      <section id="home" className="relative overflow-hidden bg-transparent pt-8 md:pt-10 pb-16 md:pb-20 scroll-mt-20">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          {/* Uniform blur on the whole video in both modes */}
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-100 motion-reduce:opacity-30 blur-sm md:blur saturate-75 contrast-95 dark:brightness-50 dark:contrast-110 dark:saturate-100"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/media/video1.mp4" type="video/mp4" />
          </video>

          {/* Single full-width overlay per mode (no half/sided scrims) */}
          <div className="absolute inset-0 bg-white/20 dark:bg-black/35" />

          {/* Full-width lateral gradient to enhance text area (light and dark) */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/25 to-white/10 dark:from-black/60 dark:via-black/30 dark:to-black/20" />

          {/* Keep invisible blobs to preserve parallax state usage (no visual impact) */}
          <div className="absolute -top-24 -right-20 w-96 h-96 opacity-0" style={{ transform: `translateY(${parallax * 0.05}px)` }} />
          <div className="absolute -bottom-32 -left-24 w-[28rem] h-[28rem] opacity-0" style={{ transform: `translateY(${parallax * -0.03}px)` }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-6">
                {/* Promo badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 dark:bg-sage-900/30 dark:text-sage-300 text-sm w-max border border-primary-200/60 dark:border-sage-700">
                    Impulsa tu negocio con excelencia e innovación
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black dark:text-white leading-tight tracking-tight">
                  Contabilidad que inspira confianza e impulsa el{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-secondary-500 to-sage-500">
                    crecimiento
                  </span>
                  .
                </h1>
                <p className="text-lg text-black/90 dark:text-gray-200 leading-relaxed">
                  En Axio Consultores combinamos experiencia, tecnología y un servicio humano excepcional
                  para que tomes decisiones con datos claros y estés siempre al día.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={waLink('Hola, quiero agendar una asesoría')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => window.gtag && window.gtag('event', 'whatsapp_click', { location: 'hero_primary' })}
                  className="btn-sage px-8 py-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sage-500 focus-visible:ring-offset-warm-50 dark:focus-visible:ring-offset-gray-900"
                >
                  <MessageCircle className="mr-2 w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  Habla con un asesor
                </a>
                <a
                  href="#services"
                  onClick={() => window.gtag && window.gtag('event', 'cta_click', { location: 'hero_secondary', target: '#services' })}
                  className="btn-primary px-8 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 focus-visible:ring-offset-warm-50 dark:focus-visible:ring-offset-gray-900"
                >
                  Ver servicios
                </a>
              </div>

              {/* Trust metrics */}
            </div>

            {/* Right Content - Modern Card Carousel */}
            <div className="relative animate-slide-up">
              

              {/* Innovative Card Carousel */}
              <div className="relative overflow-hidden rounded-3xl group">
                {/* Background gradient that changes with active service */}
                <div className={`absolute inset-0 bg-gradient-to-br ${services[active].gradient} transition-all duration-700`} />
                
                {/* Single Card Display with improved transitions */}
                <div 
                  className="relative"
                  onMouseEnter={() => setPaused(true)} 
                  onMouseLeave={() => setPaused(false)}
                >
                  {services.map((service, index) => {
                    const ServiceIcon = service.icon;
                    const isActive = index === active;
                    
                    return (
                      <div
                        key={service.key}
                        className={`transition-all duration-1000 ease-in-out ${
                          isActive 
                            ? 'opacity-100 scale-100 relative z-10 translate-x-0' 
                            : 'opacity-0 scale-95 absolute inset-0 pointer-events-none translate-x-4'
                        }`}
                      >
                        <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/30 dark:border-gray-700/30 min-h-[440px] sm:min-h-[460px] lg:min-h-[500px] flex flex-col overflow-hidden">
                          
                          {/* Static promo badge (top-left inside the card) */}
                          <div className="absolute top-3 left-3 z-20">
                            <div className="inline-flex items-center gap-2 h-7 px-3 rounded-full bg-gradient-to-r from-primary-600 to-secondary-500 text-white text-xs font-semibold shadow-md">
                              <span>🎁 Primera asesoría gratis</span>
                            </div>

                          </div>

                          {/* Subtle floating animation background accent */}
                          <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-primary-100/20 to-secondary-100/20 dark:from-primary-900/10 dark:to-secondary-900/10 rounded-full blur-2xl animate-pulse" />

                          {/* Header with improved spacing */}
                          <div className="flex items-start gap-5 mb-8 pt-8 sm:pt-10">
                            <div className="relative w-18 h-18 rounded-3xl bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center shadow-xl flex-shrink-0 border border-white/50 dark:border-gray-600/50">
                              <ServiceIcon className="w-9 h-9 text-primary-600 dark:text-sage-400" />
                              {/* Icon glow effect */}
                              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-400/20 to-secondary-400/20 blur-md" />
                            </div>
                            <div className="flex-1 pt-1">
                              {/* Mobile chip row with fixed height for all services */}
                              <div className="sm:hidden h-7 mb-1">
                                <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 dark:from-sage-900/40 dark:to-gray-800/40 dark:text-sage-300 border border-primary-200/60 dark:border-sage-700/60 shadow-sm">
                                  {service.tag}
                                </span>
                              </div>
                              <div className="flex items-center gap-3 mb-3 min-w-0 h-8 sm:h-10 overflow-hidden">
                                <h3 className={`font-bold text-warm-900 dark:text-white leading-tight whitespace-nowrap truncate ${service.key === 'regularizaciones' ? 'text-xl' : 'text-xl sm:text-2xl'}`}>
                                  {service.key === 'regularizaciones' ? (
                                    <>
                                      <span className="sm:hidden">Regularizaciones SII</span>
                                      <span className="hidden sm:inline">{service.name}</span>
                                    </>
                                  ) : (
                                    service.name
                                  )}
                                </h3>
                                <span className="hidden sm:inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 dark:bg-gradient-to-r dark:from-sage-900/40 dark:to-gray-800/40 dark:text-sage-300 border border-primary-200/60 dark:border-sage-700/60 shadow-sm">
                                  {service.tag}
                                </span>
                              </div>
                              <div className={`${service.key === 'regularizaciones' ? 'h-[56px]' : 'h-[56px] sm:h-[64px]'} overflow-hidden`}>
                                <p className={`text-warm-700 dark:text-gray-300 leading-relaxed font-medium line-clamp-2 ${service.key === 'regularizaciones' ? 'text-sm' : 'text-sm sm:text-base'}`}>
                                  {service.desc}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Enhanced Features Grid */}
                          <div className="mt-1 mb-4 sm:mb-5 flex-1">
                            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 content-start px-1 sm:px-2 ${service.key === 'regularizaciones' ? 'h-[112px]' : 'h-[112px] sm:h-[120px]'}`}>
                              {service.bullets.slice(0, 4).map((bullet, idx) => (
                                <div key={idx} className="flex items-start gap-2 sm:gap-3 min-h-[32px] overflow-hidden">
                                  <div className="w-6 h-6 rounded-full bg-sage-100 dark:bg-sage-800 flex items-center justify-center flex-shrink-0 mt-0.5 shadow">
                                    <CheckCircle className="w-4 h-4 text-sage-600 dark:text-sage-400" />
                                  </div>
                                  <span className="text-sm text-warm-800 dark:text-gray-200 leading-tight line-clamp-2">
                                    {bullet}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Enhanced Actions */}
                          <div className="space-y-4 pt-2 sm:pt-3">
                            <a 
                              href={`#service-${service.key}`}
                              onClick={(e) => {
                                e.preventDefault();
                                const targetId = `service-${service.key}`;
                                const el = document.getElementById(targetId) || document.getElementById('services');
                                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                if (window.gtag) window.gtag('event', 'cta_click', { location: 'hero_card', target: `#${targetId}`, service: service.name });
                              }} 
                              className="group block w-full btn-primary px-6 py-4 text-center rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] transform"
                            >
                              <span className="flex items-center justify-center gap-2">
                                Conocer este servicio
                                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                              </span>
                            </a>
                            <a
                              href={waLink(`Hola, tengo dudas sobre el servicio de ${service.name}`)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group block w-full btn-secondary px-6 py-4 text-center rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] transform"
                            >
                              <span className="flex items-center justify-center gap-2">
                                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                Consultar por WhatsApp
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Enhanced Navigation arrows */}
                <button
                  type="button"
                  onClick={() => setActive((prev) => (prev - 1 + services.length) % services.length)}
                  className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-sm shadow-none border border-white/20 dark:border-white/10 flex items-center justify-center text-gray-800 dark:text-gray-200 hover:bg-white/20 hover:dark:bg-white/20 transition-all duration-300 opacity-10 group-hover:opacity-80 focus:opacity-90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/30 z-20"
                  aria-label="Servicio anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setActive((prev) => (prev + 1) % services.length)}
                  className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-sm shadow-none border border-white/20 dark:border-white/10 flex items-center justify-center text-gray-800 dark:text-gray-200 hover:bg-white/20 hover:dark:bg-white/20 transition-all duration-300 opacity-10 group-hover:opacity-80 focus:opacity-90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/30 z-20"
                  aria-label="Siguiente servicio"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Enhanced Progress bar */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-40 h-2 bg-white/40 dark:bg-gray-700/40 rounded-full overflow-hidden shadow-lg backdrop-blur-sm">
                  <div 
                    className="h-full bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full transition-all duration-700 ease-out shadow-lg"
                    style={{ width: `${((active + 1) / services.length) * 100}%` }}
                  >
                    <div className="h-full bg-gradient-to-r from-white/30 to-transparent rounded-full" />
                  </div>
                  {/* Progress indicators */}
                  <div className="absolute inset-0 flex items-center justify-between px-1">
                    {services.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-1 h-1 rounded-full transition-all duration-300 ${
                          idx <= active ? 'bg-white shadow-lg' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced service quick selector chips */}
              <div className="mt-8">
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {services.map((s, i) => (
                    <button
                      key={s.key}
                      type="button"
                      onClick={() => setActive(i)}
                      className={`group px-5 py-3 rounded-2xl border-2 transition-all duration-500 text-sm font-bold shadow-lg hover:shadow-xl transform hover:scale-105 ${
                        active === i
                          ? 'bg-gradient-to-r from-primary-600 to-secondary-500 text-white border-transparent shadow-xl scale-105'
                          : 'bg-white/70 text-warm-800 border-warm-300/50 hover:bg-white hover:border-primary-300 dark:bg-gray-700/70 dark:text-gray-200 dark:border-gray-600/50 dark:hover:bg-gray-600 dark:hover:border-sage-500'
                      }`}
                    >
                      <span className="relative">
                        {s.name}
                        {active === i && (
                          <div className="absolute inset-0 bg-white/20 rounded-xl blur-sm" />
                        )}
                      </span>
                      {active === i && (
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-600/20 to-secondary-500/20 animate-pulse" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom promo callout */}
          <div className="mt-12">
            <div className="rounded-2xl p-[2px] bg-gradient-to-r from-primary-600 via-secondary-500 to-sage-500 shadow-xl">
              <div className="rounded-2xl bg-white/80 dark:bg-gray-900/70 backdrop-blur px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-warm-900 dark:text-gray-100 text-center sm:text-left font-medium">
                  🎉 Aprovecha: primera asesoría gratis, sin compromiso. Respuesta en ≤ 5 min.
                </p>
                <a
                  href={waLink('Hola, quiero mi asesoria gratis')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sage px-6 py-3"
                >
                  Canjear ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;