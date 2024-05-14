/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",


  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brown: {
          100: '#f2e8e5',
          300: '#e0cec7',
          600: '#a18072',
          900: '#43302b',
        }
      },
      boxShadow: {
        "normal": ' 0px 1px 10px rgba(0, 0, 0, 05)',

      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        "Dana": "Dana",
        "DanaMedium": "Dana Medium",
        "DanaDemiBold": "Dana DemiBold",
        "MorabbaLight ": "Morabba Light",
        "MorabbaMedium": "Morabba Medium",
      },
      letterSpacing: {
        "tightest": "-0.065em"
      }

    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '&>*');
      addVariant('child-hover', '&>*:hover')
    }
  ],
}
