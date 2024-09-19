/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {  boxShadow: {
      'react-blue': '0 4px 6px rgba(59, 130, 246, 0.5)', 
    },},
  fontFamily: { 
    sign:["Great Vibes"],
  },
  },
  plugins: [],
}

