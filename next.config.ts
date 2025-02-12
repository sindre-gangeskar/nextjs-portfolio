import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	api: { bodyParser: true },
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
			},
		],
	},
};

export default nextConfig;
