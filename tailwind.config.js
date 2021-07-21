module.exports = {
  mode: "jit",
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    safelist: [
      "bg-red-400",
      "bg-yellow-400",
      "bg-green-400",
      "bg-blue-400",
      "bg-purple-400",
      "bg-pink-400",
    ]
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary-color)",
        "primary-50": "var(--primary-color-50)",
        "primary-100": "var(--primary-color-100)",
        "primary-200": "var(--primary-color-200)",
        "primary-300": "var(--primary-color-300)",
        "primary-400": "var(--primary-color-400)",
        "primary-500": "var(--primary-color-500)",
        "primary-600": "var(--primary-color-600)",
        "primary-700": "var(--primary-color-700)",
        "primary-800": "var(--primary-color-800)",
        "primary-900": "var(--primary-color-900)",
        "accent-400": "var(--accent-color-400)",
        "accent-500": "var(--accent-color-500)",
        "accent-600": "var(--accent-color-600)",
        "accent-weekend": "var(--weekend-color)"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
