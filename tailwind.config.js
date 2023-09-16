/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins'],
        Rokkitt:['Rokkitt'],
        JosefinSans:['Josefin Sans'],
        RobotoSerif:['Roboto Serif']
      }
    },
  },
  plugins: [],
}

