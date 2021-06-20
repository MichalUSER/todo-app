module.exports = {
	mode: 'jit',
	purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue,svelte}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				"custom-black": "#1E2127"
			}
		}
	}
};