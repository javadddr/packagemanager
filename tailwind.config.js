/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'source-sans-pro': ['Source Sans Pro', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'merriweather': ['Merriweather', 'serif'],
        'playfair-display': ['Playfair Display', 'serif'],
        'pt-sans': ['PT Sans', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(), // NextUI plugin
    require("@tailwindcss/forms"), // Forms plugin
    require("tailwindcss-filters"), // Filters plugin for blur, etc.
  ],
 
}

