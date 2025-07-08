/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This is crucial for static export
  distDir: 'out',   // This will be the directory where the static files are built

  // IMPORTANT: Configure basePath and assetPrefix if your GitHub Pages URL
  // will be in the format: https://<username>.github.io/<repository-name>/
  // Replace 'your-repository-name' with your actual repository name.
  // If your GitHub Pages URL is https://<username>.github.io/ (for a user/org page),
  // then you can omit or comment out basePath and assetPrefix.
  // basePath: '/your-repository-name',
  // assetPrefix: '/your-repository-name/',
};

module.exports = nextConfig;