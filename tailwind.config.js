/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			fontFamily: {
				'inter':['Inter','sans-serif']
			},
      colors: {
        'glass-grey': '#161616',
      },
      backgroundImage: {
        'hero': "url('/wallpaper-gradient.jpg')"
      }
		}
	},
	plugins: [],
};
