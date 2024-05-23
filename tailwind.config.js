/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        turquoise: "#5CE1E6",
        blue: "#2a4ff6",
        "dark-bg": "#121212",
        "dark-surface": "#1E1E1E",
        "accent-bg": "#2A2A2A",
        "light-text": "#E0E0E0",
        "muted-text": "#A0A0A0",
        "dark-surface": "#1E1E1E",
        "light-bg": "#F8F8F8",
        "dark-text": "#121212",
        "accent-text": "#FFFFFF",
        highlight: "#5CE1E6",
      },
      backgroundImage: (theme) => ({
        "primary-gradient": "linear-gradient(135deg, #2a4ff6, #5CE1E6)",
        "secondary-gradient": "linear-gradient(135deg, #121212, #2A2A2A)",
      }),
    },
    screens: {
      ip: "200px",
      xs: "250px",
      ss: "380px",
      ts: "600px",
      xsm: "700px",
      sm: "800px",
      msm: "1020px",
      bsm: "1100px",
      md: "1280px",
    },
  },
  plugins: [],
};
