/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#06D001',
        'custom-grey-background': '#F2F2F7',
        'custom-grey-backgroundUI': '#F5F5F5',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['lemonade'],
  },
};
