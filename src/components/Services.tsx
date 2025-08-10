import { Calculator, TrendingUp, CheckCircle, Building, UserCheck } from 'lucide-react';
import { waLink } from '../config';

const Services = () => {
  const mainServices = [
    {
      icon: Calculator,
      title: 'Contabilidad mensual normal (Pymes y Emprendimientos)',
      description: 'Llevamos tu contabilidad mensual de forma segura y ordenada y por un precio adaptado a tus necesidades.',
      price: '2 UF',
      priceDetail: 'Sólo $76.400 aprox. al mes',
      frequency: 'Desde',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80',
      features: [
        'Asesoría mensual, consultas ilimitadas',
        'Declaraciones de impuestos',
        'Informes de contabilidad y más',
        'Declaración de IVA al Día',
        'Pago de IVA (F.29)',
        'Libro compra/ventas',
        'Atención inmediata',
        'Asesorías ilimitadas'
      ],
      idealFor: [
        'Quieres tener respuesta a tiempo para tus requerimientos.',
        'Quieres sentir la tranquilidad de tener tu negocio 100% bajo control.',
        'Quieres pagar un precio que realmente se ajuste a tus necesidades.'
      ],
      popular: true,
      ctaText: 'Habla con un asesor',
      ctaSecondary: 'Ver más detalles'
    },
    {
      icon: UserCheck,
      title: 'Servicio de Remuneraciones y Asesorías en RRHH',
      description: 'Controlamos y gestionamos todo lo relacionado con tus trabajadores: liquidaciones de sueldo, contratos y finiquitos de trabajo, cálculo y pago de Previred, asesorías en RRHH y más.',
      price: '0,5 UF',
      priceDetail: 'Sólo $19.600 aprox. al mes',
      frequency: 'Por trabajador',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
      features: [
        'Liquidaciones de sueldo',
        'Contratos de trabajo',
        'Finiquitos',
        'Procesamientos de pagos Previred y más',
        'Remuneraciones al día',
        'F30 - 1 por trabajador contratado'
      ],
      idealFor: [
        'Quieres dejar en manos expertas el control de tu nómina de trabajadores.',
        'Quieres tener más tiempo para dedicarlo a tareas que exigen tu atención.',
        'Quieres sentirte tranquil@ sabiendo que las cotizaciones de tus trabajadores están al día.'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Contabilidad completa (Pymes y Empresas)',
      description: 'Ten el control total de tu negocio y proyecta tu empresa en base a análisis financieros y tributarios.',
      price: '10 UF',
      priceDetail: 'Sólo $382.000 aprox. al mes',
      frequency: 'Desde',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      features: [
        'Confección y presentación de Estados Financieros',
        'Costeo de productos y producción',
        'Proyecciones tributarias y financieras',
        'Conciliaciones bancarias',
        'Procesos contables y mas',
        'Negocio bajo control',
        'Estado de resultados',
        'Balance',
        'Proyecciones'
      ],
      idealFor: [
        'Quieres tener el control total sobre tu negocio.',
        'Quieres saber cuento ganas y cual es el rendimiento de tu negocio.',
        'Quieres anticiparte a cualquier situación tributaria.'
      ]
    },
    {
      icon: Building,
      title: 'Creación y formalización de empresas',
      description: 'En un plazo mínimo, constituimos legalmente tu empresa, la formalizamos y te la dejamos lista para facturar.',
      price: '$79.990',
      priceDetail: 'Descubre nuestros packs promocionales',
      frequency: 'Desde',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      features: [
        'Asesoría inicial para saber que tipo de sociedad le conviene más a tu negocio',
        'Obtención de documentación legal y tributaria',
        'Formaliza tu negocio',
        'Constitución de sociedad',
        'Oficina Virtual'
      ],
      idealFor: [
        'Quieres dar el primer paso hacia el logro de tus sueños.',
        'Quieres postular a financiamientos y fondos para tu negocio.',
        'Quieres que tu negocio crezca de forma segura y en regla.'
      ]
    }
  ];

  return (
    <section id="services" className="py-14 md:py-16 bg-warm-50 dark:bg-gray-900 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block bg-primary-600 dark:bg-sage-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Cuidamos tu negocio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-warm-900 dark:text-white mb-4 md:mb-6">
            Nuestros servicios
          </h2>
        </div>

        {/* Services Grid */}
        <div className="space-y-12 md:space-y-16">
          {mainServices.map((service, index) => (
            <div
              key={index}
              id={`service-${index === 0 ? 'contabilidad' : index === 1 ? 'remuneraciones' : index === 2 ? 'contabilidad-completa' : 'creacion-empresas'}`}
              className={`relative p-6 sm:p-8 rounded-3xl transition-all duration-500 hover:shadow-2xl transform hover:scale-[1.02] ${
                index % 4 === 0
                  ? 'bg-gradient-to-r from-warm-100 to-primary-50 dark:from-primary-900/10 dark:to-warm-900/10'
                  : index % 4 === 1
                  ? 'bg-gradient-to-r from-sage-50 to-sage-100 dark:from-sage-900/10 dark:to-sage-800/10'
                  : index % 4 === 2
                  ? 'bg-gradient-to-r from-secondary-50 to-secondary-100 dark:from-secondary-900/10 dark:to-secondary-800/10'
                  : 'bg-gradient-to-r from-primary-50 to-warm-100 dark:from-warm-900/10 dark:to-primary-900/10'
              }`}
            >
              <div
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Service Image/Icon Side */}
                <div className="flex-1 relative w-full">
                  <div className="relative transform transition-transform duration-300 hover:scale-105">
                    <img
                      src={service.image}
                      alt={service.title}
                      width={960}
                      height={640}
                      loading="lazy"
                      className="w-full h-56 sm:h-72 md:h-80 object-cover rounded-2xl shadow-lg"
                    />
                    {service.popular && (
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-primary-600 dark:bg-sage-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold animate-pulse">
                        Más Popular
                      </div>
                    )}
                    
                    {/* Floating Info Cards */}
                    <div className="absolute -bottom-6 left-4 sm:left-6 card p-3 sm:p-4 transform transition-all duration-300 hover:scale-110">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-primary-100 dark:bg-sage-900/30 rounded flex items-center justify-center">
                          <service.icon className="w-4 h-4 text-primary-600 dark:text-sage-400" />
                        </div>
                        <span className="font-semibold text-warm-800 dark:text-gray-200 text-xs sm:text-sm">
                          {index === 0 ? 'Declaración de IVA al Día' : 
                           index === 1 ? 'Remuneraciones al día' :
                           index === 2 ? 'Negocio bajo control' : 'Formaliza tu negocio'}
                        </span>
                      </div>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-sage-500" />
                            <span className="text-[11px] sm:text-xs text-warm-600 dark:text-gray-400">{feature.split(',')[0]}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Content Side */}
                <div className="flex-1 space-y-5 sm:space-y-6 w-full">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-warm-900 dark:text-white mb-4 underline transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <div className="inline-block bg-primary-600 dark:bg-sage-500 h-1 w-14 md:w-16 mb-4 transition-all duration-300 hover:w-24"></div>
                    
                    <p className="text-warm-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-sm text-warm-600 dark:text-gray-400">{service.frequency}</span>
                      <span className="text-2xl md:text-3xl font-bold text-warm-900 dark:text-white">{service.price}</span>
                    </div>
                    <p className="text-warm-600 dark:text-gray-400 mb-6">{service.priceDetail}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-warm-900 dark:text-white mb-3">
                        Servicio incluye:
                      </h4>
                      <p className="text-warm-700 dark:text-gray-300 mb-4 text-sm md:text-base">
                        {service.features.slice(0, 2).join(', ')}.
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-warm-900 dark:text-white mb-3">
                        Este servicio es ideal para ti si:
                      </h4>
                      <ul className="space-y-2">
                        {service.idealFor.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className="flex items-start gap-2 transform transition-transform duration-300 hover:translate-x-2"
                          >
                            <div className="w-2 h-2 bg-primary-600 dark:bg-sage-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-warm-700 dark:text-gray-300 text-sm md:text-base">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-warm-700 dark:text-gray-300 mb-6 text-sm md:text-base">
                      Asesórate en tiempo real con uno de nuestros profesionales.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={waLink(`Hola, tengo dudas sobre ${service.title}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => window.gtag && window.gtag('event', 'whatsapp_click', { location: 'services', service: service.title })}
                        className="btn-sage py-3 px-6 flex items-center justify-center gap-2"
                        aria-label={`Hablar por WhatsApp sobre ${service.title}`}
                      >
                        <span>💬</span>
                        Habla con un asesor
                      </a>
                      <a
                        href="#contact"
                        onClick={() => window.gtag && window.gtag('event', 'cta_click', { location: 'services', target: '#contact', service: service.title })}
                        className="btn-primary py-3 px-6"
                      >
                        Ver más detalles
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-16 md:mt-20 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-warm-900 dark:text-white mb-8">
            Más de 1.200 emprendedores confían en la contabilidad de Axio Consultores
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-warm-900 dark:text-white">+1500</div>
              <div className="text-[11px] md:text-sm text-warm-600 dark:text-gray-400 uppercase tracking-wide">EMPRESAS CREADAS</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-warm-900 dark:text-white">+2000</div>
              <div className="text-[11px] md:text-sm text-warm-600 dark:text-gray-400 uppercase tracking-wide">CLIENTES SATISFECHOS</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-warm-900 dark:text-white">+850</div>
              <div className="text-[11px] md:text-sm text-warm-600 dark:text-gray-400 uppercase tracking-wide">OFICINAS VIRTUALES</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-warm-900 dark:text-white">+1600</div>
              <div className="text-[11px] md:text-sm text-warm-600 dark:text-gray-400 uppercase tracking-wide">TAZAS DE CAFÉ</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;