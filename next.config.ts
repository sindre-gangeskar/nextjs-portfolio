import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: 'standalone',
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
			}
		],
	},
	serverExternalPackages: [ 'octokit', 'universal-github-app-jwt' ], 
};

export default nextConfig;
