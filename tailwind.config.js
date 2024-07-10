export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'box-new': '5px 5px 8px rgb(0 0 0), -5px -5px 8px rgb(30 41 59 )',
      },
      fontSize: {
        'clamp-7xl': 'clamp(3rem,1rem + 3.5vw , 6.25rem)',
        'clamp-6xl': 'clamp(2.5rem,0.5rem + 3.5vw , 5.25rem)',
        'clamp-4xl': 'clamp(3rem,1rem + 3.5vw , 6.25rem)',
        'clamp-3xl': 'clamp(2rem,0.35rem + 2.5vw , 2.25rem)',
      }
    },
  },
  plugins: [],
};
