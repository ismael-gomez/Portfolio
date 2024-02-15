/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors : {
				'fondo' :'#202021',
				'sun' : '#FBB765',
				'span' : '#88ccca',
				'menu' :"#535354",
				'menuBorde' :'#2d3748',
				'menuModal' :'#2d3748',
				'menuHover' : '#394353'
			},
			fontFamily :{
				sans: [
					'"Inter var", sans-serif',
					{
					  fontFeatureSettings: '"cv11", "ss01"',
					  fontVariationSettings: '"opsz" 32'
					},
				  ]
			},
		},
	},
	plugins: [],

}
