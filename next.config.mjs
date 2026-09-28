/** @type {import('next').NextConfig} */
const nextConfig = {
  // Proxy PostHog through our own domain so ad-blockers don't drop events.
  async rewrites() {
    return [
      { source: "/ingest/static/:path*", destination: "https://eu-assets.i.posthog.com/static/:path*" },
      { source: "/ingest/:path*", destination: "https://eu.i.posthog.com/:path*" },
    ];
  },
  // Required by PostHog's API paths, which use trailing slashes.
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
