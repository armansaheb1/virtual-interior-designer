/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  purge: false,
  content: [
    './public/index.html',
    './src/**/*.{vue,js,ts}',
    './src/views/**/*.{vue,js,ts}',
    './src/components/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
  ],
}

