import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de marca — costa gallega: cremas y arena, tinta cálida,
        // verde-azulado "Atlántico" (acento principal) y terracota (acento
        // cálido de /celebraciones). Ver README de diseño en CLAUDE.md §12.
        cream: {
          100: "#F8F5EF",
          200: "#F1ECE1",
        },
        sand: {
          200: "#E3DACB",
          300: "#D6C9B3",
          400: "#B3A28A",
        },
        ink: {
          500: "#8C7F6C",
          600: "#5C5348",
          700: "#3D3833",
          900: "#241F1B",
        },
        atlantico: {
          600: "#2A6864",
          700: "#1E4A47",
          800: "#143634",
        },
        terracota: {
          50: "#FBF3EA",
          200: "#EDD3B8",
          600: "#C1653A",
          900: "#7A3A1F",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-fraunces)", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};

export default config;
