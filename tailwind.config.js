const { default: daisyui } = require("daisyui");
const { default: themes } = require("daisyui/theme/object");

// tailwind.config.js
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
     
    ],
  theme: {
    extend: {},
  },
 
  plugins: [require("daisyui")],
  daisyui:{
    themes:["light","dark"],
  }
}
