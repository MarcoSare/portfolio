/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textColor: 'var(--text-color)',
        subTextColor: 'var(--sub-text-color)',
      },
    },
  },
  plugins: [],
}