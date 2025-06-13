module.exports = {
  darkMode: 'class', // Added darkMode strategy
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'black-jet': '#0A0A0A',
        'blue-electric': '#007BFF',
        'green-neon': '#39FF14',
        'text-light-primary': '#F0F0F0',
        'text-light-secondary': '#A0A0A0',
        'bg-dark-card': '#141414',
        // Retaining light theme generic names for potential future use, but they can be removed if not needed
        'primary-light': '#FFFFFF',      // White
        'secondary-light': '#F1F5F9',    // Slate 100 (cards/secondary bg)
        'text-primary-light': '#0F172A', // Default dark text for light theme
        'text-secondary-light': '#475569',// Default secondary dark text for light theme
      },
    },
  },
  plugins: [],
};