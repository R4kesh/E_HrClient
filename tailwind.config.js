/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");



module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}","path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
  "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {

      colors: {
        "nav-menu-color": "#002D62",
        upperTabBackground: "#1565c0",
        formHeading_1: '#002D62',
        sidebarMenu: "#002D62",



        
        subheading: '#4a5568', 
        background: '#f7fafc', 
        primary: '#4299e1', 
        secondary: '#ed64a6', 
      },
    },
  },
  plugins: [],
});

