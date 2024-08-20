/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
  reactStrictMode: true,
  output: "export",
  // output: 'export',
  // Optional: Change the output directory `out` -> `dist`
  distDir: "build",
};

module.exports = nextConfig;
