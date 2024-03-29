/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#4262FF",
          secondary: "#050038",
          neutral: "#ffff",
          "base-100": "#ffff",
          info: "#ECF0F3",
          success: "#ffff",
          warning: "#DF7E07",
          error: "#FA5C5C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}