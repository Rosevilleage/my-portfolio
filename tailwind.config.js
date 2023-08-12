/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    minWidth: {
      mac: "1440px",
    },
    maxWidth: {
      mac: "1440px",
    },
    minHeight: {
      mac: "783px",
      screen: "100vh",
      full: "100%",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        spining: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        backspining: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        },
        opacs: {
          from: {
            opacity: "0.5",
            filter: "drop-shadow(0px 0px 20px rgba(255, 255, 255, 0))",
          },
          to: {
            opacity: "1",
            filter: "drop-shadow(0px 0px 20px rgba(255, 255, 255, 0.8))",
          },
        },
        typingCursor: {
          from: {
            borderRight: "2px solid white",
          },
          to: { borderRight: "2px solid rgba(0,0,0,0)" },
        },
      },
      animation: {
        spining_1: "spining 1s linear infinite",
        spining_2: "spining 2s linear infinite",
        spining_3: "spining 3s linear infinite",
        spining_4: "spining 4s linear infinite",
        spining_5: "spining 5s linear infinite",
        spining_6: "spining 6s linear infinite",
        spining_7: "spining 7s linear infinite",
        spining_8: "spining 8s linear infinite",
        backspining_1: "backspining 1s linear infinite",
        backspining_2: "backspining 2s linear infinite",
        backspining_3: "backspining 3s linear infinite",
        backspining_4: "backspining 4s linear infinite",
        backspining_5: "backspining 5s linear infinite",
        backspining_6: "backspining 6s linear infinite",
        backspining_7: "backspining 7s linear infinite",
        backspining_8: "backspining 8s linear infinite",
        icon_opac: "opacs 2s linear 1 forwards",
        typingCursor: "typingCursor 1s ease-in-out 3000ms infinite",
      },
    },
  },
  plugins: [],
};
