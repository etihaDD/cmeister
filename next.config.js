/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  env: {
    SENDIN_BLUE_API_KEY:
      "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"
  }
};

module.exports = nextConfig;
