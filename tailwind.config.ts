import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // animation to enter from top
        enter: {
          "0%": {
            transform: "translateY(-50%)",
            display: "none",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            display: "block",
            opacity: "1",
          },
        },
        // animation to exit to top
        exit: {
          "0%": {
            transform: "translateY(0)",
            display: "block",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(-100%)",
            display: "none",
            opacity: "0",
          },
        },
      },
      animation: {
        // animation reamin the last state

        enter: "enter 0.5s ease-out forwards",
        exit: "exit 0.5s ease-out forwards",
      },
    },
  },
} satisfies Config;
