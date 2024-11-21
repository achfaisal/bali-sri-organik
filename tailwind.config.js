/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screen: {
        xs: "400px",
      },
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(circle, rgba(122,122,122,1) 0%, rgba(197,219,245,1) 100%)",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["disabled"],
      textColor: ["disabled"],
      cursor: ["disabled"],
    },
  },
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [daisyui],
};
