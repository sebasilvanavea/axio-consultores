import React from 'react';
import { Mail, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { waLink } from '../config';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Servicios', href: '#services' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Contacto', href: '#contact' }
  ];

  const services = [
    'Contabilidad Integral',
    'Asesoría Tributaria',
    'Planificación Financiera',
    'Consultoría Empresarial'
  ];

  const legalLinks = [
    'Política de Privacidad',
    'Términos y Condiciones',
    'Aviso Legal',
    'Cookies'
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Axio Consultores
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Más de 15 años brindando soluciones contables y financieras que inspiran confianza y generan resultados.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/axio-consultores"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 group transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://instagram.com/axio.consultores"
                className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-sage-600 hover:to-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 group transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-400"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="mailto:contacto@axio-consultores.cl"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 group transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-400"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Enlaces rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Servicios
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 transform inline-block cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Contacto
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">Email</p>
                <a
                  href="mailto:contacto@axio-consultores.cl"
                  className="text-white hover:text-primary-400 transition-colors duration-300"
                >
                  contacto@axio-consultores.cl
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Teléfono</p>
                <a
                  href="tel:+56965004506"
                  className="text-white hover:text-primary-400 transition-colors duration-300"
                >
                  +56 9 6500 4506
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">WhatsApp</p>
                <a
                  href={waLink('Hola, me gustaría obtener más información sobre sus servicios')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary-400 transition-colors duration-300"
                >
                  Escríbenos por WhatsApp
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Dirección</p>
                <p className="text-white">
                  Av. Providencia 1234<br />
                  Providencia, Santiago
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <p className="text-gray-400 text-sm">
                © 2024 Axio Consultores. Todos los derechos reservados.
              </p>
              
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 transform hover:-translate-y-1"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;