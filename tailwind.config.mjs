import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue,svelte}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Atkinson', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
				mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
			},
			colors: {
				ink: {
					950: '#020617',
					900: '#020617',
					800: '#0b1120',
					700: '#111827',
					600: '#1f2937',
				},
				neon: {
					cyan: '#22d3ee',
					purple: '#a855f7',
					pink: '#ec4899',
				},
				camera: {
					body: '#020617',
					glass: 'rgba(148, 163, 184, 0.12)',
				},
			},
			boxShadow: {
				glass: '0 18px 45px rgba(15,23,42,0.65)',
				'soft-glow': '0 0 40px rgba(56, 189, 248, 0.45)',
			},
			backdropBlur: {
				xs: '2px',
			},
			borderRadius: {
				'2xl': '1.25rem',
			},
			transitionProperty: {
				theme: 'background-color, border-color, color, fill, stroke, box-shadow',
			},
		},
	},
	plugins: [typography()],
};

