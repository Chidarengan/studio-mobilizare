/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // 👇 Esta é a linha mágica que faz o Tailwind ler a classe 'dark' do seu HTML
  darkMode: 'class', 
  theme: {
    extend: {},
  },
  plugins: [],
}