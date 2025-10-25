/** @type {import('tailwindcss').Config} */
const { colors, fontFamily, spacing, borderRadius, boxShadow, transitionTiming, transitionDuration } = require('./src/config/theme');

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ...colors,
        // Alias pour la compatibilité avec les composants existants
        primary: colors.primary[500],
        secondary: colors.secondary[400],
      },
      fontFamily: fontFamily,
      spacing: spacing,
      borderRadius: borderRadius,
      boxShadow: boxShadow,
      transitionTimingFunction: transitionTiming,
      transitionDuration: transitionDuration,
      // Animations personnalisées
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-up': 'slide-up 0.4s ease-out',
      },
      // Styles de conteneur personnalisés
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')({
      className: 'prose',
    }),
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/aspect-ratio'),
  ],
  // Désactiver les styles de base pour les éléments HTML
  corePlugins: {
    preflight: true,
  },
  // Désactiver les classes utilitaires non utilisées en production
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    options: {
      safelist: [],
    },
  },
};
