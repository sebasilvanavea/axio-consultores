import { Calendar, MessageCircle, Calculator, TrendingUp, CheckCircle, Building } from 'lucide-react';
import { useState, useEffect } from 'react';
import { waLink, PHONE_DISPLAY, PHONE_E164 } from '../config';

const Hero = () => {
  // Service spotlight data for the interactive preview on the right
  const services = [
    {
      key: 'contabilidad',
      name: 'Contabilidad Integral',
      icon: Calculator,
      tag: 'Mensual',
      desc: 'Orden, cumplimiento y control financiero para decidir con claridad.',
      bullets: [
        'Estados y reportes claros',
        'Impuestos y obligaciones al día',
        'Acompañamiento continuo'
      ],
      gradient: 'from-primary-50 to-warm-100 dark:from-sage-900/20 dark:to-gray-800',
      ring: 'ring-primary-200/60 dark:ring-sage-700'
    },
    {
      key: 'tributaria',
      name: 'Asesoría Tributaria',
      icon: TrendingUp,
      tag: 'Estrategia',
      desc: 'Optimiza tu carga tributaria cumpliendo la norma, sin sorpresas.',
      bullets: [
        'Planificación y proyección',
        'Revisiones preventivas',
        'Soporte ante fiscalizaciones'
      ],
      gradient: 'from-secondary-50 to-warm-100 dark:from-secondary-900/20 dark:to-gray-800',
      ring: 'ring-secondary-200/60 dark:ring-secondary-700'
    },
    {
      key: 'regularizaciones',
      name: 'Regularizaciones SII / TGR',
      icon: CheckCircle,
      tag: 'Correcciones',
      desc: 'Normalizamos tus pendientes con SII y Tesorería para retomar el control.',
      bullets: [
        'Convenios y rectificaciones',
        'Levantamiento de observaciones',
        'Defensa y representación'
      ],
      gradient: 'from-warm-100 to-primary-50 dark:from-primary-900/10 dark:to-gray-800',
      ring: 'ring-primary-200/60 dark:ring-sage-700'
    },
    {
      key: 'financiera',
      name: 'Planificación Financiera',
      icon: Building,
      tag: 'Crecimiento',
      desc: 'Proyección de caja, indicadores y metas para escalar con confianza.',
      bullets: [
        'Presupuestos y KPIs',
        'Análisis de rentabilidad',
        'Tableros ejecutivos'
      ],
      gradient: 'from-sage-50 to-warm-100 dark:from-sage-900/20 dark:to-gray-800',
      ring: 'ring-sage-200/60 dark:ring-sage-700'
    }
  ];

  const [active, setActive] = useState(0);
  const ActiveIcon = services[active].icon;
  
  // Auto-rotation with pause on hover
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
      {/* Top Banner */}
      <div className="bg-warm-800 dark:bg-gray-700 text-white py-2 text-center">
        <div className="flex items-center justify-center gap-2 text-sm">
          <Calendar className="w-4 h-4" />
          <span>
            📅 Agenda una reunión sin costo{' '}
            <a href={`tel:${PHONE_E164}`} className="underline font-medium">
              {PHONE_DISPLAY}
            </a>
          </span>
        </div>
      </div>

      {/* Main Hero Section */}
      <section id="home" className="relative overflow-hidden bg-warm-50 dark:bg-gray-900 pt-10 pb-20">
        {/* Decorative immersive background with parallax */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute -top-24 -right-20 w-96 h-96 bg-primary-200/40 dark:bg-sage-900/20 rounded-full blur-3xl"
            style={{ transform: `translateY(${parallax * 0.05}px)` }}
          />
          <div
            className="absolute -bottom-32 -left-24 w-[28rem] h-[28rem] bg-warm-200/40 dark:bg-primary-800/20 rounded-full blur-3xl"
            style={{ transform: `translateY(${parallax * -0.03}px)` }}
          />
          <div className="absolute inset-0 opacity-[0.07] dark:opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '22px 22px', color: 'rgba(17,24,39,0.8)' }} />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-6">
                <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 dark:bg-sage-900/30 dark:text-sage-300 text-sm w-max border border-primary-200/60 dark:border-sage-700">
                  Impulsa tu negocio con excelencia e innovación
                </p>
                <h1 className="text-5xl sm:text-6xl font-extrabold text-warm-900 dark:text-white leading-tight tracking-tight">
                  Contabilidad que inspira confianza e impulsa el{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-secondary-500 to-sage-500">
                    crecimiento
                  </span>
                  .
                </h1>
                <p className="text-lg text-warm-700 dark:text-gray-300 leading-relaxed">
                  En MBS Consultores combinamos experiencia, tecnología y un servicio humano excepcional
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

              {/* Service selector chips (pause auto-rotation on hover) */}
              <div className="pt-4" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
                <div className="flex flex-wrap gap-2">
                  {services.map((s, i) => (
                    <button
                      key={s.key}
                      type="button"
                      aria-pressed={active === i}
                      aria-label={s.name}
                      onClick={() => setActive(i)}
                      className={`px-4 py-2 rounded-full border transition-all duration-300 ease-soft hover:-translate-y-0.5 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
                        active === i
                          ? 'bg-primary-600 text-white border-primary-600 dark:bg-sage-500 dark:border-sage-500'
                          : 'bg-warm-100 text-warm-800 border-warm-300 hover:bg-warm-200 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600'
                      }`}
                    >
                      <span className="text-sm font-medium">{s.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Trust metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2">
                <div className="text-center sm:text-left">
                  <p className="text-3xl font-bold text-warm-900 dark:text-white">6+ años</p>
                  <p className="text-sm text-warm-600 dark:text-gray-300">de experiencia</p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-3xl font-bold text-warm-900 dark:text-white">1200+</p>
                  <p className="text-sm text-warm-600 dark:text-gray-300">emprendedores</p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-3xl font-bold text-warm-900 dark:text-white">99%</p>
                  <p className="text-sm text-warm-600 dark:text-gray-300">satisfacción</p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-3xl font-bold text-warm-900 dark:text-white">≤ 5 min</p>
                  <p className="text-sm text-warm-600 dark:text-gray-300">tiempo de respuesta</p>
                </div>
              </div>
              {/* Google Reviews badge */}
              <div className="pt-2 flex items-center justify-center sm:justify-start" aria-label="Valoración en Google 5.0 de 5">
                <div className="flex items-center gap-2 bg-primary-100 dark:bg-sage-900/20 px-3 py-1.5 rounded">
                  <span className="text-primary-600 dark:text-sage-400 font-bold text-xs">G</span>
                  <span className="text-xs text-warm-700 dark:text-gray-300">Google Reviews</span>
                  <span className="text-xs text-warm-700 dark:text-gray-300">5.0 ★★★★★</span>
                </div>
              </div>
            </div>

            {/* Right Content - Interactive Service Preview (pause on hover) */}
            <div className="relative animate-slide-up" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
              {/* Glow ring */}
              <div className={`transition-all duration-500 rounded-3xl p-[2px] bg-gradient-to-br ${services[active].gradient}`}>
                <div
                  key={services[active].key}
                  className={`relative rounded-[22px] p-8 bg-white/70 dark:bg-gray-800/60 backdrop-blur border ${services[active].ring} ring-2 shadow-xl transition-all duration-500`}
                >
                  {/* Background accents */}
                  <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 bg-primary-200/40 dark:bg-sage-900/30 rounded-full blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-10 -left-10 w-48 h-48 bg-warm-200/40 dark:bg-primary-800/20 rounded-full blur-3xl" />

                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-warm-100 dark:bg-gray-700 flex items-center justify-center shadow-inner">
                      <ActiveIcon className="w-7 h-7 text-primary-600 dark:text-sage-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-semibold text-warm-900 dark:text-white">{services[active].name}</h3>
                        <span className="px-2 py-0.5 text-xs rounded-full bg-primary-100 text-primary-700 dark:bg-sage-900/30 dark:text-sage-300 border border-primary-200/60 dark:border-sage-700">{services[active].tag}</span>
                      </div>
                      <p className="mt-2 text-warm-700 dark:text-gray-300">{services[active].desc}</p>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="mt-6 space-y-3">
                    {services[active].bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 mt-0.5 text-sage-500" />
                        <span className="text-warm-800 dark:text-gray-200">{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <a
                      href="#services"
                      className="btn-primary px-5 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500"
                    >
                      Conocer este servicio
                    </a>
                    <a
                      href={waLink(`Hola, tengo dudas sobre el servicio de ${services[active].name}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary px-5 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-warm-400"
                    >
                      Consultar por WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Subtle helper text */}
              <p className="mt-4 text-sm text-warm-600 dark:text-gray-400">Explora nuestros servicios con un clic</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;