/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        app_sidebar_w: "300px",
        app_header_h: "64px",
      }
    },
  },
  plugins: [],
}

