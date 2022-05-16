module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      'xs': '240px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
    },
  },
  plugins: [],
}