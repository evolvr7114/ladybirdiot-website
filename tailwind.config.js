/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B4332',
          dark: '#0F2419',
          light: '#2D5A47',
        },
        accent: {
          DEFAULT: '#D4A574',
          light: '#E0C19B',
          dark: '#B88A5C',
        },
        cream: '#F5F1EB',
        charcoal: '#2D3436',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '12px',
      },
    },
  },
  plugins: [],
}
