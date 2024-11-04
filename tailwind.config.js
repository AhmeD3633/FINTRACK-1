/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2k": "2048px",
        "4k": "3840px",
      },
    },
  },
  daisyui: {
    themes: [""],
  },
  plugins: [require("daisyui")],
};
