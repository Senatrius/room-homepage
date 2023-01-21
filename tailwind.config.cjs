/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        xs: '375px'
      },
      fontFamily: {
        spartan: ['League Spartan', 'sans-serif']
      }
    },
    colors: {
      white: 'white',
      black: 'black',
      text: 'hsl(0, 0%, 63%)',
      hover: 'hsl(0, 0%, 27%)',
      overlay: 'hslahsl(0, 0%, 0%, .5)',
      transparent: 'transparent'
    },
    fontSize: {
      paragraph: [
        '1rem',
        {
          fontWeight: 500,
          letterSpacing: '-0.0215em',
          lineHeight: '135%'
        }
      ],
      'title-m': [
        '2.5rem',
        {
          fontWeight: 700,
          letterSpacing: '-0.0525em',
          lineHeight: '92.5%'
        }
      ],
      'title-d': [
        'clamp(2.5rem, 3vw, 3rem)',
        {
          fontWeight: 700,
          letterSpacing: '-0.0425em',
          lineHeight: '93.5%'
        }
      ],
      'subtitle-m': [
        '0.875rem',
        {
          fontWeight: 700,
          letterSpacing: '0.415em'
        }
      ],
      'subtitle-d': [
        '1rem',
        {
          fontWeight: 700,
          letterSpacing: '0.415em'
        }
      ],
      button: [
        '1rem',
        {
          fontWeight: 500,
          letterSpacing: '0.75em'
        }
      ],
      nav: [
        '1rem',
        {
          fontWeight: 600,
          letterSpacing: '-0.0415em'
        }
      ]
    }
  },
  plugins: []
};
