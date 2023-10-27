import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'parallax': 'url("../portfolio/public/tawney_travels_main.png")'
      },
      colors: {
        'murky-teal': '#022831',
        'blue-lagoon': '#04566E',
        'pastel-green': '#689368',
        'blustery-blue': '#D8DFE9',
        'deep-pink' : '#B84A6e'
      },
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
