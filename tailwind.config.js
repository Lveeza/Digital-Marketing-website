/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        spectral: ['Spectral' , 'sans-serif']
      },
      screens: {
        laptop: '990px',
        pc: '1450px',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}
