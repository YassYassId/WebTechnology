/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,ts}"];
export const theme = {
  extend: {
    colors: {
      primary: {
        DEFAULT: "#4338CA", // Indigo-700 (close match to the purple in screenshots)
        hover: "#3730A3", // Slightly darker for hover states
      },
    },
  },
};
export const plugins = [];
