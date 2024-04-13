/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				tangerine: ['Tangerine', 'cursive'],
				sedan: ['Sedan', 'serif'],
				coget: ['Courgette', 'cursive']
			}
		}
	},
	plugins: [require('daisyui')]
};
