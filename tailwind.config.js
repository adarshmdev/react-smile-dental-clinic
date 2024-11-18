/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'atyp-display': ['"Atyp Display TRIAL"', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'atyp-kido': ['"AtypKidoTRIAL"', 'sans-serif'],
        'atyp-kido-semibold': ['"AtypKidoTRIAL"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
