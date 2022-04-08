module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      blur:{
        'pouco': '2px',

      },
     
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
 
}
