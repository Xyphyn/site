export default {
	content: [
		'./src/**/*.{html,js,svelte,ts,svx}',
		'./node_modules/mono-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			colors: {
				primary: {
					100: '#f1f5f9',
					900: '#0f172a'
				}
			}
		}
	},
	plugins: []
}