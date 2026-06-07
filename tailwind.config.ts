import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        red: "#E8453C",
        "red-dark": "#C0392B",
        "red-tint": "#FFF0EF",
        "dark-text": "#1A1A2E",
        "body-text": "#4A4A6A",
        muted: "#9B9BB4",
        border: "#E8E8F0",
        "light-gray": "#F4F4F8",
        success: "#27AE60",
        warning: "#F39C12",
        error: "#E74C3C",
        info: "#3498DB",
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
        serif: ["Noto Serif SC", "serif"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        fadeIn: {
          from: {
            opacity: "0",
            transform: "translateY(12px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        pop: {
          "0%": {
            transform: "scale(0.8)",
            opacity: "0",
          },
          "70%": {
            transform: "scale(1.05)",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        confetti: {
          "0%": {
            transform: "translateY(-10px) rotate(0deg)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(120px) rotate(720deg)",
            opacity: "0",
          },
        },
        pulse: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.06)",
          },
        },
        streak: {
          "0%": {
            transform: "scale(1)",
          },
          "40%": {
            transform: "scale(1.2) rotate(-5deg)",
          },
          "70%": {
            transform: "scale(0.95) rotate(3deg)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: "fadeIn 0.35s ease both",
        pop: "pop 0.4s cubic-bezier(.34,1.56,.64,1) both",
        confetti: "confetti var(--duration, 3s) ease-in var(--delay, 0s) infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        streak: "streak 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
