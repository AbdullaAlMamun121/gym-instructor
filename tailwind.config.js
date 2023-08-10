/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "gray-10":"#F8F4EB",
        "gray-50":"#EFE6E6",
        "gray-100":"#DFCCCC",
        "gray-500":"#5E0000",
        "primary-10":"#FFE1E0",
        "primary-30":"#FFA6A3",
        "primary-50":"#FF6B66",
        "secondary-40":"#FFCD58",
        "secondary-50":"#FFC132",
   // second color theme
  //  "gray-10": "#0052BA",
  //  "gray-50": "#50C878",
  //  "gray-100": "#FFBF00",
  //  "gray-500": "#8A2BE2",
  //  "primary-10": "#8B4513",
  //  "primary-30": "#00CED1",
  //  "primary-50": "#FFC87C",
  //  "secondary-40": "#00A86B",
  //  "secondary-50": "#7FFFD4"

   // Third color theme
   // "gray-10":"#F8F4a0",
   // "gray-50":"#EFE600",
   // "gray-100":"#DFCC03",
   // "gray-500":"#5E0004",
   // "primary-10":"#FFE105",
   // "primary-30":"#FFA601",
   // "primary-50":"#FF6B02",
   // "secondary-40":"#FFCD03",
   // "secondary-50":"#FFC110",
     
      },
      backgroundImage: (theme) =>({
        "gradient-yellowred":"linear-gradient(90deg,#FF616A 0% #FFC837 100%)",
      }),
      fontFamily:{
        dmsans : ["DM Sans", "sans-serif"],
        montserrat:["Montserrat", "sans-serif"]
      },
      content:{

      }
    },
    screens:{
      xs:"480px",
      sm:"768px",
      md:"1060px"
    }
  },
  plugins: [],
}