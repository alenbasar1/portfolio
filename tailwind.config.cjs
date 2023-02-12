/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        2000: "2000ms",
      },
      colors: {
        Seasalt: "#f8f9fa",
        AntiFlashWhite: "#e9ecef",
        Platinum: "#dee2e6",
        FrenchGray: "#ced4da",
        FrenchGray2: "#adb5bd",
        SlateGray: "#6c757d",
        outerSpace: "#495057",
        Onyx: "#343a40",
        EerieBlack: "#212529",
      },
    },
  },
  plugins: [],
};
