module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layout/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'lak-blue': '#0B0D47',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        active: '0 1px 0 #0B0D47',
        normal: '0 5px 0 #0B0D47',
      },
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 2s ease-out'
      }
    },
  },
  plugins: [],
};
