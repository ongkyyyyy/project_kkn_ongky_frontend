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
        'caecilia-bold': ['Caecilia-Bold', 'serif'], 
        playwrite: ['"Playwrite Danmark Uloopet"', 'serif'],
        brush: ['Dancing Script', 'serif'],
        'roboto-slab': ['Roboto Slab', 'serif'],
      },
      fontWeight: {
        'caecilia-bold': '700', 
      },
      backgroundImage: {
        'parallaxLokasi' : 'url(../src/assets/img/lokasi.jpg)',
        'parallaxSejarah' : 'url(../src/assets/img/sejarah.jpg)',
        'parallaxUmkm': 'url(../src/assets/img/umkm.jpg)',
        'parallax': 'url(../src/assets/img/dashboard_image.jpg)',
        'blue-carving': 'url(../src/assets/img/blueCarving.jpg)',
        'orange-carving': 'url(../src/assets/img/orangeCarving.jpeg)',
        'orange-carving2': 'url(../src/assets/img/orangeCarving2.jpeg)',
      }
    },
  },
  plugins: [],
};
