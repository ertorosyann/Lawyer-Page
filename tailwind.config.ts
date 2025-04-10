import { Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],  
      },
    },
  },
  plugins: [],
};

export default config;
