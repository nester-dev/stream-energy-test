/** @type {import('tailwindcss').Config} */
import { type Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFF",
        black: "#000",
        transparent: "transparent",
        success: "#34c759",
        grey: "#2c2d2e",
        main_bg: "#f7f8fa",
        stroke: "#dce4e6",
        main_text: "#3d3f45",
      },
    },
    boxShadow: {
      signCard:
        "rgba(0, 0, 0, 0.08) 0px 0px 2px 0px, rgba(0, 0, 0, 0.08) 0px 4px 16px 0px",
    },
  },
  plugins: [],
} satisfies Config;
