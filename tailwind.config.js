/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef7ff",
          100: "#d9eeff",
          200: "#b8dcff",
          300: "#85c2ff",
          400: "#4fa3ff",
          500: "#2b82f6",
          600: "#1f67d1",
          700: "#1b55aa",
          800: "#1a498c",
          900: "#173d74",
        },
        mint: {
          50: "#ecfdfb",
          100: "#cffaf3",
          200: "#9ff3e7",
          300: "#5fe7d8",
          400: "#2fd5c4",
          500: "#18b6a6",
          600: "#0f9287",
          700: "#11746d",
          800: "#125d59",
          900: "#124d4a",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.08)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};