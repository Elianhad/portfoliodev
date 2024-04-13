/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-bg':"url('https://res.cloudinary.com/dksibcbrj/image/upload/v1713016477/portfolio/219ce3d40f6289c3186a5ba150ad3f4d_ahtk18.jpg')",
			},
		},
	},
	plugins: [animations],
}
