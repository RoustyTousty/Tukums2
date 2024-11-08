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
          "primary": "#253746",
          "secondary": "#f89915",
          "accent": "#66903a",
          "neutral": "#ffff",
          "base-100": "#253746",
          "info": "#ffffff",
          "success": "#66903a",
          "warning": "#f89915", 
          "error": "#ff0000",
        },
        light: {
          "primary": "#ffffff",
          "secondary": "#ffffff",
          "accent": "#ffffff",
          "neutral": "#ffffff",
          "base-100": "#ffffff",
          "info": "#ffffff",
          "success": "#ffffff",
          "warning": "#ffffff", 
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
