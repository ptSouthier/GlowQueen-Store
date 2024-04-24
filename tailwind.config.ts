import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
        "primary": "#264065",
        "secondary": "#A9D6CB",
        "tertiary": "#909090",
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1280px',
      'xl': '1536px',
      '2xl': '1914px',
    }
  },
  plugins: [],
};
export default config;
