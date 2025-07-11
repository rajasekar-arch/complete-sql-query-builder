    // tailwind.config.js
    module.exports = {
      content: [
        "./src/*.{js,ts,jsx,tsx}", // Include root src directory
        "./src/components/*.{js,ts,jsx,tsx}",
        "./src/app/**/*.{js,ts,jsx,tsx}", // Include app directory if using App Router
        './components/**/*.{js,ts,jsx,tsx}'
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    };