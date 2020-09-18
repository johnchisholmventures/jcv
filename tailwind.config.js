module.exports = {
  important: true,
  theme: {
    maxHeight: {
      '1000px' : '1000px',
      '500px' : '500px'
    },
    extend: {
      height:{
        'hero-lg': '28rem'
      },
      width: {
        'hero-text': '750px'
      },
      colors: {
        'default-purple' : '#6632ff',
        'default-grey': '#4a4a4a',
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
    outline: ['focus']
  },
}
