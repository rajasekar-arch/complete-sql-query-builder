// tailwind.config.js
module.exports = {
  content: [
    "./src/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
// This configuration file sets up Tailwind CSS for a Next.js project, specifying where to look for class names and extending the default theme if needed.
// Make sure to adjust the paths in the `content` array based on your project's structure.