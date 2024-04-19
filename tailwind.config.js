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
        'box-new': '5px 5px 15px rgb(15 23 42 ), -5px -5px 15px rgb(30 41 59 )',
      },
      transitionProperty: {
        'bg-card': 'background-color 0.2s ease, border-radius 0.2s ease',
        'opacity': 'opacity 0.5s ease', // Ajout de la transition pour l'opacité
      },
    },
  },
  plugins: [],
};
