
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        dark: '#050508',
        card: '#0f0f16',
        primary: '#00f2ea',
        secondary: '#ff0050',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at center, rgba(120, 0, 255, 0.15) 0%, rgba(5, 5, 8, 0) 70%)',
        'btn-gradient': 'linear-gradient(90deg, #00f2ea 0%, #ff0050 100%)',
        'text-gradient': 'linear-gradient(90deg, #00f2ea 0%, #ff0050 100%)',
        'grid-pattern': "linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)"
      }
    }
  },
  plugins: [],
}
