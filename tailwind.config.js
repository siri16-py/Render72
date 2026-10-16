/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        peacock: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#088395',
          700: '#0a4d68',
          800: '#0e3a4e',
          900: '#082f49',
        },
        emeraldgreen: {
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#10b981',
          700: '#047857',
          800: '#065f46',
          900: '#1B4332',
        },
        terracotta: {
          500: '#C08261',
          600: '#9A3B3B',
          700: '#7C2D2D',
          800: '#5C1D1D',
        },
        marigold: {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        },
        sandstone: {
          50: '#FAF8F5',
          100: '#F5EFEB',
          200: '#EADBC8',
          300: '#DAC0A3',
          800: '#3D352E',
          900: '#241F1C',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        cinzel: ['"Cinzel Decorative"', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
