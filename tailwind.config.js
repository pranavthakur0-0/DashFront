/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '400px',
      },
      colors: {
        primary: 'var(--primary)',
        mainBg : 'var(--loginBg)',
        input : 'var(--input)',
        activeInput : 'var(--active)',
        primaryBttn : 'var(--primary-button)',
        primaryText : 'var(--primary-text)',
        lightText :'var(--light-text)',
        profit : 'var(--profit)',
        profitBg : 'var(--profitBg)',
        newPorfileBt : 'var(--addProfilebt)',
        line : 'var(--line)',
        lineActive : 'var(--lineActive)'
      },
      fontFamily:{
        'primary': ['Montserrat'],
        'secondary' : ['Figtree'],
      }
    },
  },
  plugins: [],
}