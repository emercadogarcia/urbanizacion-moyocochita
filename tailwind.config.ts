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
        verde: {
          DEFAULT: '#2D6A35',
          claro: '#4A9A57',
          oscuro: '#1C4422',
        },
        tierra: {
          DEFAULT: '#8B5E3C',
          claro: '#C4956A',
        },
        crema: {
          DEFAULT: '#F8F2E6',
          oscuro: '#EDE4D0',
        },
        dorado: {
          DEFAULT: '#C9971C',
          claro: '#F0C040',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
