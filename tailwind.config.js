/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F0F0FAB2",
          200: "#A2A3E4",
          400: "#787AD6",
        },

        secondary: {
          100: "#E6E6F7",
        },
        tertiary: {
          100: "#DDDEF5",
        },
        grey: {
          400: "#81838C",
          600: "#3D3E44",
        },
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
