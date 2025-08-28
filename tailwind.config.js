/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem', // or your preferred padding
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
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
        primary: "#015ccc",
        primarydark: "#004499",
        secondary: "#323cffff",
      },
    },
  },
  plugins: [],
}