/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        padding: {
          xs: "16px",
          sm: '40px',
          md: '60px',
          lg: '80px',
          xl: '100px',
        },
      },
      screens: {
        xs: '400px',
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
        xxl: '1600px',
      },
      borderColor: {
        primary: '#1f2164',
        ash: '#cecece',
        secondary: '#243F56'
      },
      colors: {
        transparent: 'transparent',
        white: '#fff',
        ash: '#adadad',
        black: '#000',
        primary: '#02283F',
        secondary: '#243F56'
      },
      backgroundColor: {
        primary: '#2C065D',
        secondary: '#243F56',
        white: '#fff',
        offwhite: '#DCEAF5',
        ash: '#e7e7e7',
        dark: '#02283F'
      },
      borderRadius: {
        'none': '0',
        DEFAULT: '8px',
        'md': '10px',
        'lg': '100px',
        'full': '9999px',
        'large': '20px',
      },
      fontSize: {
        xxs: ['12px', '12px'],
        xs: ['14px', '18px'],
        sm: ['16px', '22px'],
        base: ['20px', '24px'],
        md: ['24px', '28px'],
        lg: ['30px', '34px'],
        xl: ['32px', '38px'],
        xxl: ['48px', '50px'],
      },
      fontWeight: {
        hairline: 100,
        'extra-light': 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        'extra-bold': 800,
        black: 900,
      },
      fontFamily: {
        sans: ['Montserrat', 'Noto Sans', 'Merriweather'],
        serif: ['Montserrat', 'Noto Serif', 'Merriweather', 'serif'],
        headers: ['Montserrat']
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        },
      }
    },
  },
  plugins: [],
}
