// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust the path to your components and pages
    "./src/**/**/*.{js,ts,jsx,tsx}", // Adjust the path to your components and pages
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
// This configuration file sets up Tailwind CSS for a Next.js project, specifying where to look for class names and extending the default theme if needed.
// Make sure to adjust the paths in the `content` array based on your project's structure.