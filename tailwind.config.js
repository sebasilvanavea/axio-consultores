/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f6f3',
          100: '#f0ebe4',
          200: '#e6ddd1',
          300: '#d4c5b0',
          400: '#c2a888',
          500: '#b08d65',
          600: '#9a7a5a',
          700: '#7d634a',
          800: '#68533e',
          900: '#564535',
        },
        secondary: {
          50: '#f7f6f4',
          100: '#ede9e3',
          200: '#ddd5c8',
          300: '#c8baa5',
          400: '#b39d82',
          500: '#9d8366',
          600: '#8a7159',
          700: '#725d4b',
          800: '#5e4d40',
          900: '#4e4035',
        },
        sage: {
          50: '#f6f7f6',
          100: '#e8ebe8',
          200: '#d1d7d1',
          300: '#adb8ad',
          400: '#8a9a8a',
          500: '#6d7d6d',
          600: '#5a6a5a',
          700: '#4a574a',
          800: '#3d483d',
          900: '#343c34',
        },
        warm: {
          50: '#faf9f7',
          100: '#f3f1ed',
          200: '#e8e4dd',
          300: '#d6cfc4',
          400: '#c4b8a8',
          500: '#b0a08d',
          600: '#9d8a75',
          700: '#827161',
          800: '#6b5e51',
          900: '#584e44',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.22, 1, 0.36, 1)', // smoother ease-out
      },
      boxShadow: {
        elevated: '0 10px 25px -5px rgba(16, 24, 40, 0.1), 0 8px 10px -6px rgba(16, 24, 40, 0.1)',
      }
    },
  },
  plugins: [],
};