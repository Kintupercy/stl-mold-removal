import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Intercom-inspired palette, adapted for home-services trust
        canvas: "#f5f1ec",
        surface: "#ffffff",
        "surface-2": "#ebe7e1",
        ink: "#111111",
        "ink-muted": "#626260",
        "ink-subtle": "#7b7b78",
        hairline: "#d3cec6",
        // Brand accent — forest green (trust + remediation)
        brand: "#1a6b3c",
        "brand-dark": "#134f2d",
        "brand-light": "#e8f5ee",
        "brand-muted": "#2d8a50",
        // Semantic
        error: "#c41c1c",
        success: "#0bdf50",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["72px", { lineHeight: "1.05", letterSpacing: "-2px" }],
        "display-lg": ["56px", { lineHeight: "1.10", letterSpacing: "-1.4px" }],
        "display-md": ["40px", { lineHeight: "1.15", letterSpacing: "-0.8px" }],
        headline: ["28px", { lineHeight: "1.20", letterSpacing: "-0.5px" }],
        "card-title": ["22px", { lineHeight: "1.25", letterSpacing: "-0.3px" }],
        subhead: ["20px", { lineHeight: "1.40", letterSpacing: "-0.2px" }],
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        xxl: "24px",
      },
      spacing: {
        section: "96px",
      },
    },
  },
  plugins: [],
};
export default config;
