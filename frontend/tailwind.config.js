/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Monaregular: ["MonaSans-Regular", "sans-serif"],
      Monamedium: ["MonaSans-Med", "sans-serif"],
      helmed: ["Hel-Med", "sans-serif"],
      helbold: ["Hel-Bold", "sans-serif"],
      helthin: ["Hel-Thin", "sans-serif"],
      helblack: ["Hel-Black", "sans-serif"],
      Monabold: ["MonaSans-Bold", "sans-serif"],
      Monaextra: ["MonaSans-Extra", "sans-serif"],
      goodline: ["goodline", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
