module.exports = {
  darkMode: 'class', // Added darkMode strategy
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0F172A',       // Dark Slate (background)
        'secondary-dark': '#1E293B',   // Darker Slate (cards/secondary bg)
        'text-primary-dark': '#E2E8F0',   // Lighter than CBD5E1, using Tailwind's slate-200
        'text-secondary-dark': '#94A3B8', // Medium Slate Gray (Tailwind's slate-400)
        'accent-green': '#34D399',       // Emerald 400
        'accent-blue': '#38BDF8',        // Sky 400
        // Adding light theme equivalents for consistency if we want to customize them later
        'primary-light': '#FFFFFF',      // White
        'secondary-light': '#F1F5F9',    // Slate 100 (cards/secondary bg)
        'text-primary-light': '#0F172A', // Dark Slate (matching primary-dark for text)
        'text-secondary-light': '#475569',// Slate 600
      },
    },
  },
  plugins: [],
};