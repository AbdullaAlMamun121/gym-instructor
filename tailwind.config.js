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
        "gray-50": "#F2F2F4",
        "gray-100":"#DFCCCC",
        "gray-500":"#5E0000",
        "primary-10": "#FAFAFB",
        "primary-20": "#F5F5F7",
        "primary-30":"#FFA6A3",
        "primary-50":"#FF6B66",
        "secondary-40":"#FFCD58",
        "secondary-50":"#FFC132",
 
     
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