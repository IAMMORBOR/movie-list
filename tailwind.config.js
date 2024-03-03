// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Roboto:['Roboto', "serif"]
      },
      fontSize:{
        "xxl":"55px",
        "xl":"45px",
        "lg":"28px",
        "sm":"20px",
        "md":"24px",
        "xsm":"18px",
        "normal":"16px"
      }
    },
  },
  plugins: [],
}

