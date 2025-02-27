/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2k": "2048px",
        "4k": "3840px",
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
      colors: {
        primary: "#C98D15",
        dark: "#181818",
      },
    },
  },
  daisyui: {
    themes: [""],
  },
  plugins: [require("daisyui")],
};
