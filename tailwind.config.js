/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/lib/esm/**/*.js'],
	theme: {
		extend: {},
	},
	plugins: [
		// eslint-disable-next-line import/no-extraneous-dependencies, global-require
		require('flowbite/plugin'),
	],
};
