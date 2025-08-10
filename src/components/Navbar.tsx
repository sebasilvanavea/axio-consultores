import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon, MessageCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { waLink } from '../config';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Servicios', href: '#services' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-warm-50/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-sm border-b border-warm-200 dark:border-gray-700' 
        : 'bg-warm-50 dark:bg-gray-900 shadow-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center gap-3 group" aria-label="Ir al inicio">
              <img
                src="/media/logo.png"
                alt="Axio Consultores"
                className="h-16 md:h-16 w-auto object-contain select-none pointer-events-none transition-all duration-300 dark:invert"
              />
              <div className="leading-tight">
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-warm-700 dark:text-gray-300 hover:text-warm-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 relative group transform hover:scale-105"
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary-600 dark:bg-sage-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            ))}
            
            {/* Contact Button */}
            <a
              href={waLink('Hola, quiero hablar con un asesor')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sage px-4 py-2 text-sm flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sage-500"
            >
              <MessageCircle className="w-4 h-4" />
              Habla con un asesor
            </a>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-warm-100 dark:bg-gray-800 hover:bg-warm-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? 
                <Moon className="w-4 h-4 text-warm-600 dark:text-gray-300 transition-transform duration-300" /> : 
                <Sun className="w-4 h-4 text-warm-600 dark:text-gray-300 transition-transform duration-300" />
              }
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <a
              href={waLink('Hola, quiero hablar con un asesor')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sage px-3 py-2 text-sm"
            >
              Contactar
            </a>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-warm-100 dark:bg-gray-800 hover:bg-warm-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? 
                <Moon className="w-4 h-4 text-warm-600 dark:text-gray-300 transition-transform duration-300" /> : 
                <Sun className="w-4 h-4 text-warm-600 dark:text-gray-300 transition-transform duration-300" />
              }
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-warm-700 dark:text-gray-300 hover:text-warm-900 dark:hover:text-white focus:outline-none transition-all duration-300 transform hover:scale-110"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-warm-50 dark:bg-gray-900 border-t border-warm-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-warm-700 dark:text-gray-300 hover:text-warm-900 dark:hover:text-white transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;