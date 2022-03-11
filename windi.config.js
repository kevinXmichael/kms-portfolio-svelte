import plugin from "windicss/plugin"

module.exports = {
  content: ["./src/**/*.{html,js,php,svelte}"],
  plugins: [
    // Does not work anymore?
    // plugin(function ({ addBase, theme }) {
    //   addBase({
    //     h1: { fontSize: theme("fontSize.3xl") },
    //     h2: { fontSize: theme("fontSize.2xl") },
    //     h3: { fontSize: theme("fontSize.xl") }
    //   })
    // })
  ],
  theme: {
    extend: {},
    fontSize: {
      "3xl": "var(--3xl)",
      "2xl": "var(--2xl)",
      xl: "var(--xl)"
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },
    spacing: {
      xs: "0.25rem",
      sm: "0.5rem",
      md: "1.0rem",
      lg: "2.0rem",
      xl: "4.0rem"
    },
    colors: {
      primary: "var(--primary)",
      "primary-variant": "var(--primary-variant)",
      secondary: "var(--secondary)",
      "secondary-variant": "var(--secondary-variant)",
      violet: "var(--violet)",
      pink: "var(--pink)",
      blue: "var(--blue)",
      white: "var(--white)",
      black: "var(--black)"
    }
  }
}
