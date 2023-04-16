/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        '1/2': '50%',
      },
      animation: {
        type: 'type 2s ease-out alternate both 2',
      },
      keyframes: {
        type: {
          '0%': { transform: 'translateX(0)' },
          '10%,22%': { transform: 'translateX(1ch)' },
          '22%,34%': { transform: 'translateX(2ch)' },
          '34%,46%': { transform: 'translateX(3ch)' },
          '46%,58%': { transform: 'translateX(4ch)' },
          '58%,70%': { transform: 'translateX(5ch)' },
          '70%,82%': { transform: 'translateX(6ch)' },
          '82%,91%': { transform: 'translateX(7ch)' },
          '91%,100%': { transform: 'translateX(8ch)' },
        },
      },
    },
  },
  plugins: [],
};
