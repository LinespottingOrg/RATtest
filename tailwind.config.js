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
        testLeftLogoSize: '200px',
        testRightLogoSize: '150px',
        '20%': '20%',
        '80%': '80%',
      },
      height: {
        mainLogoSize: '350px',
        testLeftLogoSize: '200px',
        testRightLogoSize: '150px',
        appheight: 1024,
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#2EB9F2',
        },
      },
    ],
  },
}
