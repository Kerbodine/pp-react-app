module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width'
      },
      colors: {
        "primary-100": "var(--primary-color-100)",
        "primary-200": "var(--primary-color-200)",
        "primary-300": "var(--primary-color-300)",
        "primary-400": "var(--primary-color-400)",
        "primary-500": "var(--primary-color-500)",
        "primary-600": "var(--primary-color-600)",
        "primary-700": "var(--primary-color-700)",
        "primary-800": "var(--primary-color-800)",
        "primary-900": "var(--primary-color-900)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
