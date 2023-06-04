/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif']
			},
			colors: {
				'glass-grey': 'rgba(10,10,10,0.50)',
				'yellow-vivid': '#E2E701',
				'blur-grey' : 'rgba(16, 16, 16, 0.15)'
			},
			backgroundImage: {
				'about-wallpaper': 'url("/wallpaper-about.jpg")'
			},
		}
	},
	plugins: [],
};
