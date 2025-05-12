/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ultima: [
          'UltimaPro',
          'UltimaPro-Bold',
          'UltimaPro-Italic',
          'UltimaProBlack',
          // Add other variants as needed
          'sans-serif'
        ],
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      backfaceVisibility: {
        hidden: 'hidden',
      },
      colors: {
        primary: "#3499c5",
        primarydark: "#1a4a5e",
        secondary: "#009379",
      },
    },
  },
  plugins: [],
}

