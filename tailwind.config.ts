import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'levitate-bubbles' : 'levitate 4s infinite'
      },
      colors: {
        'hack-green': "#3BAF0B",
        'hack-gray': "#426466",
        'hack-light-green': "#B4FF95"
      }
    },
  },
  plugins: [],
}
export default config
