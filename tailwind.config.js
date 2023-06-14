/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        custom: "1000px",
      },
      fontFamily: {
        sans: ['ABC Social', 'sans-serif'],
        mono: ['Berkeley Mono', 'monospace'],
      },
      borderWidth: {
        micro: '1px',
        tiny: '1.5px',
      },
      fontSize: {
        basesm: '0.9375rem',
      },
      colors: {
        lines: {
          offwhite: '#F1F1F1',
          softest: '#CCCCCC',
          soft: '#BFBFBF',
          dark: '#6D6D6D',
          darkest: '#000530',
          blue: '#0A2660',
          red: '#460000',
          green: '#006400', 
          black: '#000000',
        },
        letter: {
          white: '#FFFFFF',
          softest: '#7D7D7D',
          soft: '#6F6F6F',
          footer: '#959595',
          dark: '#222',
          default: '#000000',
          blueish: '#D2E0FC',
        },
        background: {
          grey: '#F2F2F2',
          darkgrey: '#EEEEEE',
          blue: '#1E62EF',
          yellow: '#FBC300',
          red: '#C70000',
          green: '#008F28',
          black: '#000000',
          lightblack: '#5A5A5A',
        },
      },
    },
  },
  plugins: [],
}
