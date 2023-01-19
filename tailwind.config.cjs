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
        '0.875rem',
        {
          fontWeight: 400,
          letterSpacing: '0.012em',
          lineHeight: '1.225rem'
        }
      ],
      'title-m': [
        '2.5rem',
        {
          fontWeight: 600,
          letterSpacing: '-0.0425em',
          lineHeight: '2.3125rem'
        }
      ],
      'title-d': [
        '3rem',
        {
          fontWeight: 600,
          letterSpacing: '-0.0425em'
        }
      ],
      'subtitle-m': [
        '0.875rem',
        {
          fontWeight: 700,
          letterSpacing: '-0.415em'
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
          fontWeight: 400,
          letterSpacing: '0.75em'
        }
      ],
      nav: [
        '1rem',
        {
          fontWeight: 600,
          letterSpacing: '-0.415em'
        }
      ]
    }
  },
  plugins: []
};
