/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif']
			},
			colors: {
				'glass-grey': '#101010',
				'yellow-vivid': '#E2E701'
			},
			backgroundImage: {
				'about-wallpaper' : 'url("/wallpaper-about.jpg")'
			}
		}
	},
	plugins: [],
};
