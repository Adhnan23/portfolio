export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', "sans-serif"],
        body: ['"DM Sans"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        ink: "#0a0a0f",
        paper: "#f5f4ef",
        accent: "#e8ff47",
        muted: "#8b8b99",
        surface: "#13131a",
        border: "#1e1e28",
      },
    },
  },
  plugins: [],
};
