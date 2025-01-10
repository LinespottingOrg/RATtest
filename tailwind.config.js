/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
import lightTheme from 'daisyui/src/theming/themes';

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
        appheight: '1024px',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          ...lightTheme['[data-theme=light]'],
          primary: '#2EB9F2',
        },
      },
    ],
  },
};
