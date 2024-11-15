import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  daisyui: {
    themes: [
      {
        dark: {
          "accent": "#f89915",
          "neutral": "#f1f1f1",
          "base-100": "#2e2e2e",
          "base-200": "#2f2f2f",
          "base-300": "#4b4b4b",
          "success": "#66903a",
          "warning": "#f89915", 
          "error": "#ff0000",
        },
        light: {
          "accent": "#f89915",
          "neutral": "#2e2e2e",
          "base-100": "#b5b5b5",
          "base-200": "#b0b0b0",
          "base-300": "#efefef",
          "success": "#66903a",
          "warning": "#f89915", 
          "error": "#ff0000",
        }
      },
    ],
  },

  plugins: [
    require('daisyui'),
  ],
};
export default config;
