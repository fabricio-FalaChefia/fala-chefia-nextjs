import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: { brand: "#0A66C2", ink: "#2E2E2E" },
      borderRadius: { '2xl': '1rem' }
    },
  },
  plugins: [],
}
export default config
