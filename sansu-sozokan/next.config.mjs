const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGitHubActions ? "/sansu-sozokan" : "",
  assetPrefix: isGitHubActions ? "/sansu-sozokan/" : "",
};

export default nextConfig;
