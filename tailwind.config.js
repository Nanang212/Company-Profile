/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "50px",
    },
    extend: {
      colors: {
        red: '#dc2626',
        secondary: '#64748b',
        dark:'#0f172a',
        redsecondary: '#ffd7cf',
      }
    },
  },
  plugins: [],
};
