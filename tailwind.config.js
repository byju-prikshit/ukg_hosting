module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "knowledge-graph-byjus/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false // <== disable this!
  },
}