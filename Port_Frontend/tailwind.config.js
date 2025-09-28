/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // F1 Racing Theme Colors
        'racing-red': {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d'
        },
        'neon-blue': {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a'
        }
      },
      fontFamily: {
        'mono': ['Courier New', 'monospace'],
        'racing': ['Orbitron', 'monospace']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-fast': 'pulse 1s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'race-car': 'raceCar 3s ease-in-out infinite',
        'speed-lines': 'speedLines 0.5s linear infinite',
        'engine-rev': 'engineRev 0.3s ease-in-out infinite',
        'checkered-flag': 'checkeredFlag 2s ease-in-out infinite',
        'tire-smoke': 'tireSmoke 1s ease-out infinite',
        'pit-stop': 'pitStop 1.5s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        glow: {
          '0%': { textShadow: '0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff0000' },
          '100%': { textShadow: '0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000' }
        },
        raceCar: {
          '0%': { transform: 'translateX(-100vw) rotate(-5deg)' },
          '100%': { transform: 'translateX(100vw) rotate(5deg)' }
        },
        speedLines: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' }
        },
        engineRev: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' }
        },
        checkeredFlag: {
          '0%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-5px) rotate(2deg)' },
          '50%': { transform: 'translateY(0px) rotate(0deg)' },
          '75%': { transform: 'translateY(-3px) rotate(-1deg)' },
          '100%': { transform: 'translateY(0px) rotate(0deg)' }
        },
        tireSmoke: {
          '0%': { opacity: '0.8', transform: 'scale(0.8) translateY(0)' },
          '100%': { opacity: '0', transform: 'scale(1.2) translateY(-20px)' }
        },
        pitStop: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '50%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(50px)', opacity: '0' }
        }
      },
      boxShadow: {
        'neon': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        'neon-lg': '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
        'racing': '0 0 20px rgba(239, 68, 68, 0.5)',
        'hud': 'inset 0 0 20px rgba(0, 0, 0, 0.5), 0 0 20px rgba(239, 68, 68, 0.3)'
      },
      backdropBlur: {
        'xs': '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem'
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem'
      },
      minHeight: {
        '16': '4rem',
        '20': '5rem',
        '24': '6rem'
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        },
        '.text-shadow-lg': {
          textShadow: '4px 4px 8px rgba(0,0,0,0.5)'
        },
        '.racing-stripes': {
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)'
        },
        '.circuit-pattern': {
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,0,0,0.3) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        },
        '.hud-border': {
          border: '2px solid #dc2626',
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)'
        },
        '.glass-effect': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        },
        '.racing-gradient': {
          background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)'
        },
        '.neon-border': {
          boxShadow: '0 0 5px currentColor, inset 0 0 5px currentColor'
        }
      }
      addUtilities(newUtilities)
    }
  ],
  safelist: [
    {
      // Dynamic Tailwind classes (normal + opacity variants like /20)
      pattern: /(bg|text|border|from|to|via)-(red|blue|green|yellow|purple|pink|cyan|orange|indigo|gray)-(100|200|300|400|500|600|700|800|900)(\/[0-9]+)?/,
      variants: ['hover', 'group-hover']
    },
    // Animation classes
    'animate-pulse',
    'animate-bounce',
    'animate-spin',
    'animate-ping',
    'animate-fade-in',
    'animate-slide-in',
    // Custom utilities
    'text-shadow',
    'text-shadow-lg',
    'racing-stripes',
    'circuit-pattern',
    'hud-border',
    'glass-effect',
    'racing-gradient',
    'neon-border'
  ]
}
