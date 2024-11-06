import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#253746',
        secondary: '#66903a',
        accent: '#f89915',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
