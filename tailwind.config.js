export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontSize: {
      prg: '0.9375rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px',
      xl: '2056px',
    },
    colors: {
      black: '#000',
      white: 'hsl(0, 0%, 100%)',
      'dark-blue': 'hsl(213, 19%, 18%)',
      orange: 'hsl(25, 97%, 53%)',
      'vdark-blue': 'hsl(216, 12%, 8%)',
      'gray-medium': 'hsl(216, 12%, 54%)',
      'gray-light': 'hsl(217, 12%, 63%)',
    },
  },
  plugins: [],
};
