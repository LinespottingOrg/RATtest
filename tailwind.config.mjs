// tailwind.config.mjs
import daisyui from 'daisyui'

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
        testLeftLogoSize: '250px',
        testRightLogoSize: '220px',
        '20%': '20%',
        '80%': '80%',
      },
      height: {
        mainLogoSize: '350px',
        testLeftLogoSize: '250px',
        testRightLogoSize: '220px',
        appheight: 1024,
      },
    },
  },
  plugins: [daisyui], // DaisyUI plugin
  daisyui: {
    themes: ['light'], // You can specify themes here
  },
}
