/** @type {import("next").NextConfig} */
const nextConfig = {
  // Framer serves images from its CDN; allow them until you localise the assets.
  images: { remotePatterns: [{ protocol: "https", hostname: "framerusercontent.com" }] },
}

export default nextConfig
