// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        //Color palette 1
        customcp11: '#084c5c',
        customcp12: '#ffffff',
        customcp13: '#80a4ac',
        customcp14: '#f3f0e6',
        customcp15: '#088494',
        customcp16: '#08343c',
        customcp17: '#e04c44',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        poppinsserif: ['Poppins', 'serif'],
        inter: ['Inter', 'serif'],
        caecilia: ['Caecilia', 'serif'],
        'caecilia-bold': ['Caecilia-Bold', 'sans-serif'], 
      },
      fontWeight: {
        'caecilia-bold': '700', 
      },
      backgroundImage: {
        'parallax' : 'url(../src/assets/img/dashboard_image.jpg)',
      }
    },
  },
  plugins: [],
};
