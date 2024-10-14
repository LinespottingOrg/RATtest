/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customBlue: '#2EB9F2',
        customTextColor: '#1E1E1E',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        1440: '1440px',
      },
      maxHeight: {
        1024: '1024px',
      },
      width: {
        mainLogoSize: '350px',
      },
      height: {
        mainLogoSize: '350px',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light'],
  },
}
