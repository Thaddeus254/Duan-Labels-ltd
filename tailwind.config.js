/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      perspective: {
        '1000': '1000px',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      transform: {
        'rotateY-0': 'rotateY(0deg)',
        'rotateY-90': 'rotateY(90deg)',
        'rotateY-180': 'rotateY(180deg)',
        'rotateY-270': 'rotateY(270deg)',
        'translateZ-16': 'translateZ(64px)',
      },
    },
  },
  plugins: [],
};
