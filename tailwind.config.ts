import type { Config } from "tailwindcss"
const { nextui } = require("@nextui-org/react")
import tailwindColors from "tailwindcss/colors"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "dark-blue": "#131619",
      "deep-back": "#0D0F10",
      "light-gray": "#F5F5F5",
      "text-secondary": "#6F767E",
      "text-primary": "#2D2E31",
      "light-green": "#B6F09C",
      ...tailwindColors,
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config
