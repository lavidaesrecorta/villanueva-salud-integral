/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    extend: {
      colors: {
        'primary': '#51315e',
        'primary-light': '#efe5f0',
        'secondary': '#C673A2',
        'tertiary-light': '#e7d8e9',
      }
    },
  },
  plugins: [],
}
