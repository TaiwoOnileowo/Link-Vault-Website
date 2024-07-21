/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        turquoise: "#5CE1E6",
        blue: "#2a4ff6",
        "dark-bg": "#1C1A27",
        "dark-surface": "#1E1E1E",
        "accent-bg": " #A8A8A8",
        "light-text": "#E0E0E0",
        "muted-text": "#A0A0A0",
        "light-bg": "#F8F8F8",
        "dark-text": "#121212",
        "accent-text": "#FFFFFF",
        highlight: "#5CE1E6",
        primary: {
          dark: '#1C1A27',
          DEFAULT: '#0074FF',
          light: '#009CFF',
        },
        accent: {
          1: '#00A3B2',
          2: '#00AB79',
        },
        highlight: {
          1: '#00D1FA',
          2: '#1D47EE',
        },
        complementary: {
          dark: '#000A99',
          light: '#0099E6',
        },
      },
      backgroundImage: (theme) => ({
        'primary-gradient': 'linear-gradient(135deg, #2a4ff6, #5CE1E6)',
        'secondary-gradient': 'linear-gradient(90deg, #1c1a27 0%, #4a506b 100%)',
        'gradient-1': 'linear-gradient(135deg, #1C1A27, #0074FF, #00D1FA)',
        'gradient-2': 'linear-gradient(135deg, #0099E6, #00AB79, #1D47EE)',
        'gradient-3': 'linear-gradient(135deg, #000A99, #009CFF, #00A3B2)',
        "text-gradient-2": "linear-gradient(135deg, #1f3bca, #51d8df)",
        "text-gradient-1": "linear-gradient(135deg, #2a4ff6, #5ce1e6)"
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
