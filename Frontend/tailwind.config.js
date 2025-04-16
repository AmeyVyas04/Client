/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 darkMode:"class",
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui:{
    themes:["light"]
  }
}


// module.exports = {
//   darkMode: "class", // Ensure it's "class" (or remove this line)
//   plugins: [require("daisyui")],
//   daisyui: {
//     themes: ["light"], // Only enable light mode
//   },
// };
