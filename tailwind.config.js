/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#15191d', // Principal - Dark
        forest: '#289955', // Secundária - Green Forest
        mint: '#7fe398', // Secundária - Light Green
        slateblue: '#7890a8', // Terciária - Slate Blue
        neon: '#e7fd27', // Terciária - Neon Yellow
      },
      fontFamily: {
        title: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
