module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: { 500: "500px" },
      backgroundImage: (theme) => ({
        // hero: "url('/src/assets/hero.webp') center center no-repeat",
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ["hover"],
    },
  },
  plugins: [],
};
