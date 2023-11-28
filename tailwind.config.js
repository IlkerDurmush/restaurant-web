/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'alexbush': ['Alex Brush', 'cursive'],
        'mont' : ['Montserrat','sans-serif']
      },
    },
  },
  plugins: [],
}

