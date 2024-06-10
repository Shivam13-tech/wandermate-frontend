/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      sm: "375px", // Small screens, like mobile
      md: "768px", // Medium screens, like tablets
      lg: "1024px", // Large screens, like laptops
    },
    extend: {
      colors: {
        background: "#FFFFFF",
        buttonColor: "#063970",
        inputBoxColor: "#E5E5E5",
      },
    },
  },
};
