/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
      logo: ["Proxima Nova", "sans-serif"],
      urbanist: ["Urbanist", "sans-serif"],
    },
  },
  plugins: [],
};
