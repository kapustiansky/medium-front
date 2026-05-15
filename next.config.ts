import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	reactStrictMode: true,
	compress: true,
	images: {
		formats: ['image/avif', 'image/webp'],
		dangerouslyAllowSVG: true,
	},
};

export default nextConfig;
