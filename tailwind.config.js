module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "foundation-bluedark": "var(--foundation-bluedark)",
        "foundation-bluedark-active": "var(--foundation-bluedark-active)",
        "foundation-bluedark-hover": "var(--foundation-bluedark-hover)",
        "foundation-bluedarker": "var(--foundation-bluedarker)",
        "foundation-bluelight": "var(--foundation-bluelight)",
        "foundation-bluelight-active": "var(--foundation-bluelight-active)",
        "foundation-bluelight-hover": "var(--foundation-bluelight-hover)",
        "foundation-bluenormal": "var(--foundation-bluenormal)",
        "foundation-bluenormal-active": "var(--foundation-bluenormal-active)",
        "foundation-bluenormal-hover": "var(--foundation-bluenormal-hover)",
        "foundation-greendark": "var(--foundation-greendark)",
        "foundation-greendark-active": "var(--foundation-greendark-active)",
        "foundation-greendark-hover": "var(--foundation-greendark-hover)",
        "foundation-greendarker": "var(--foundation-greendarker)",
        "foundation-greenlight": "var(--foundation-greenlight)",
        "foundation-greenlight-active": "var(--foundation-greenlight-active)",
        "foundation-greenlight-hover": "var(--foundation-greenlight-hover)",
        "foundation-greennormal": "var(--foundation-greennormal)",
        "foundation-greennormal-active": "var(--foundation-greennormal-active)",
        "foundation-greennormal-hover": "var(--foundation-greennormal-hover)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
