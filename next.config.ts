import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
<<<<<<< HEAD
=======
  // GitHub Pages serves plain files, so the site is exported as static HTML into /out.
  output: "export",
  // Every page becomes /page/index.html, which GitHub Pages serves reliably.
  trailingSlash: true,
  // The built-in image optimiser needs a server, so images are served as they are.
  images: { unoptimized: true },
>>>>>>> 9797acb (Update website)
};

export default nextConfig;
