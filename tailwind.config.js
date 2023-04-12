/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        type: 'type 2.5s ease-out alternate both 2',
      },
      keyframes: {
        type: {
          '0%': { transform: 'translateX(0ch)' },
          '10%,20%': { transform: 'translateX(1ch)' },
          '20%,30%': { transform: 'translateX(2ch)' },
          '30%,40%': { transform: 'translateX(3ch)' },
          '40%,50%': { transform: 'translateX(4ch)' },
          '50%,60%': { transform: 'translateX(5ch)' },
          '60%,70%': { transform: 'translateX(6ch)' },
          '70%,80%': { transform: 'translateX(7ch)' },
          '80%,90%': { transform: 'translateX(8ch)' },
          '90%,100%': { transform: 'translateX(9ch)' },
        },
      },
    },
  },
  plugins: [],
};
