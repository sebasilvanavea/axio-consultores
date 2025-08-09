import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { waLink, PHONE_E164, PHONE_DISPLAY } from '../config';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.subject.trim()) newErrors.subject = 'El asunto es requerido';
    if (!formData.message.trim()) newErrors.message = 'El mensaje es requerido';
    
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    if (window.gtag) {
      window.gtag('event', 'form_submit', { form: 'contact' });
    }

    try {
      // Build payload from actual form DOM, including g-recaptcha-response
      const formEl = e.currentTarget;
      const data = new FormData(formEl);
      const params = new URLSearchParams();
      data.forEach((value, key) => params.append(key, String(value)));

      const resp = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });

      if (!resp.ok) throw new Error('Netlify Forms rechazó el envío');

      setErrors(prev => ({ ...prev, form: '' }));
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    } catch (err) {
      setErrors(prev => ({ ...prev, form: 'No se pudo enviar. Completa el reCAPTCHA o inténtalo nuevamente.' }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contacto@axio-consultores.cl',
      link: 'mailto:contacto@axio-consultores.cl'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: PHONE_DISPLAY,
      link: `tel:${PHONE_E164}`
    },
    {
      icon: MapPin,
      title: 'Dirección',
      content: 'Av. Providencia 1234, Providencia, Santiago',
      link: 'https://maps.google.com'
    }
  ];

  const subjects = [
    'Consulta General',
    'Contabilidad Integral',
    'Asesoría Tributaria',
    'Planificación Financiera',
    'Solicitar Reunión',
    'Otro'
  ];

  return (
    <section id="contact" className="relative py-16 md:py-20 bg-warm-100 dark:bg-gray-900 scroll-mt-20">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-20 w-72 h-72 bg-primary-200/40 dark:bg-sage-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-20 w-80 h-80 bg-warm-200/40 dark:bg-primary-800/20 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-warm-900 dark:text-white">
            Hablemos de tu proyecto
          </h2>
          <p className="text-base md:text-xl text-warm-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Estamos aquí para ayudarte. Contáctanos y descubre cómo podemos impulsar el crecimiento de tu empresa
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-8 lg:sticky lg:top-24 self-start animate-slide-up">
            <div>
              <h3 className="text-2xl font-semibold text-warm-900 dark:text-white mb-6">
                Información de contacto
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start gap-4 group hover:bg-warm-50 dark:hover:bg-gray-800 p-4 rounded-xl transition-all duration-300 ease-soft hover:shadow-md hover:scale-[1.02] border border-transparent hover:border-primary-200 dark:hover:border-sage-800"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 dark:bg-sage-900/30 rounded-lg flex items-center justify-center transition-transform duration-300 ease-soft group-hover:scale-110">
                        <info.icon className="w-6 h-6 text-primary-600 dark:text-sage-400" />
                      </div>
                    </div>
                    <div className="flex-1 flex items-start justify-between">
                      <div>
                        <h4 className="text-lg font-medium text-warm-900 dark:text-white mb-1">
                          {info.title}
                        </h4>
                        <p className="text-warm-600 dark:text-gray-300">
                          {info.content}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 mt-1 opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ease-soft text-primary-600 dark:text-sage-400" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gradient-to-br from-primary-50 to-warm-100 dark:from-sage-900/20 dark:to-primary-800/20 p-6 rounded-2xl border border-primary-200 dark:border-sage-800 transition-all duration-300 hover:shadow-lg">
              <h4 className="text-lg font-semibold text-warm-900 dark:text-white mb-4">
                Horarios de atención
              </h4>
              <div className="space-y-2 text-warm-600 dark:text-gray-300">
                <div className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span className="font-medium">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <span className="font-medium">9:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos:</span>
                  <span className="font-medium text-warm-400">Cerrado</span>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="rounded-xl p-5 bg-primary-50 border border-primary-200 dark:bg-sage-900/20 dark:border-sage-800 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-warm-600 dark:text-gray-300">¿Prefieres WhatsApp?</p>
                <p className="text-warm-900 dark:text-white font-semibold">Te respondemos en minutos.</p>
              </div>
              <a
                href={waLink('Hola, me gustaría obtener más información sobre sus servicios')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => window.gtag && window.gtag('event', 'whatsapp_click', { location: 'contact' })}
                className="btn-sage px-4 py-2 inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> Abrir WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card p-6 md:p-8 transition-all duration-300 hover:shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4" role="status" aria-live="polite">
                <CheckCircle className="w-16 h-16 text-sage-500 mx-auto animate-bounce" />
                <h3 className="text-2xl font-semibold text-warm-900 dark:text-white">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-warm-600 dark:text-gray-300">
                  Nos pondremos en contacto contigo pronto.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-semibold text-warm-900 dark:text-white mb-6">
                  Envíanos un mensaje
                </h3>
                
                <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="form-name" value="contact" />
                  {/* Honeypot */}
                  <p className="hidden">
                    <label>
                      No llenar: <input name="bot-field" onChange={handleChange} />
                    </label>
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-warm-700 dark:text-gray-300 mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-sage-400 focus:border-transparent outline-none transition-all duration-300 bg-warm-100 dark:bg-gray-700 text-warm-900 dark:text-white hover:shadow-md ${
                          errors.name ? 'border-red-500' : 'border-warm-300 dark:border-gray-600'
                        }`}
                        placeholder="Tu nombre"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1 animate-pulse">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-warm-700 dark:text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-sage-400 focus:border-transparent outline-none transition-all duration-300 bg-warm-100 dark:bg-gray-700 text-warm-900 dark:text-white hover:shadow-md ${
                          errors.email ? 'border-red-500' : 'border-warm-300 dark:border-gray-600'
                        }`}
                        placeholder="tu@email.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1 animate-pulse">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-warm-700 dark:text-gray-300 mb-2">
                      Asunto *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-sage-400 focus:border-transparent outline-none transition-all duration-300 bg-warm-100 dark:bg-gray-700 text-warm-900 dark:text-white hover:shadow-md ${
                        errors.subject ? 'border-red-500' : 'border-warm-300 dark:border-gray-600'
                      }`}
                    >
                      <option value="">Selecciona un asunto</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                    {errors.subject && <p className="text-red-500 text-sm mt-1 animate-pulse">{errors.subject}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-warm-700 dark:text-gray-300 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-sage-400 focus:border-transparent outline-none transition-all duration-300 resize-none bg-warm-100 dark:bg-gray-700 text-warm-900 dark:text-white hover:shadow-md ${
                        errors.message ? 'border-red-500' : 'border-warm-300 dark:border-gray-600'
                      }`}
                      placeholder="Cuéntanos sobre tu proyecto o consulta..."
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1 animate-pulse">{errors.message}</p>}
                  </div>

                  {/* Netlify reCAPTCHA placeholder */}
                  <div data-netlify-recaptcha="true"></div>

                  {errors.form && (
                    <p className="text-red-500 text-sm">{errors.form}</p>
                  )}

                  <button
                    type="submit"
                    className="w-full btn-primary py-4 px-6 flex items-center justify-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500"
                  >
                    <Send className="w-5 h-5" />
                    <span>Enviar mensaje</span>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;