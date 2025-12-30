/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
            900: '#0B1120',
        },
        black: {
            rich: '#020617',
        },
        gold: {
            DEFAULT: '#C5A059',
            muted: '#C5A059',
            hover: '#D4AF37',
        },
        bronze: {
            DEFAULT: '#CD7F32',
        },
        white: {
            DEFAULT: '#FFFFFF',
            off: '#F8FAFC',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
