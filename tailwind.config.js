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
				'blur-grey' : 'rgba(16, 16, 16, 0.15)',
				'dark-grey' : '#1D1D1FB3',
				'white-smooth' : '#F5F5F7',
				'gray' : '#343434',
				'smooth-gray' : '#D1D1D1'
			},
			backgroundImage: {
				'about-wallpaper': 'url("/wallpaper-about.jpg")'
			},
		}
	},
	plugins: [],
};
