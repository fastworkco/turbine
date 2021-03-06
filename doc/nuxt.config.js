const pkg = require('./package')

module.exports = {
	mode: 'universal',

	analyze: true,
	/*
	** Headers of the page
	*/
	head: {
		title: pkg.name,

		htmlAttrs: {
			lang: 'th-th',
		},

		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: pkg.description },
		],
		link: [
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,600,700' },
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		],
	},

	/*
	** Customize the progress-bar color
	*/
	loading: {
		color: '#fff',
	},

	modules: [
		'nuxt-purgecss',
	],

	/*
	** Global CSS
	*/
	css: [
		'../scss/main.scss',
	],

	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
	],

	/*
	** Nuxt.js modules
	*/

	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
		extend(config, ctx) {
			// Run ESLint on save
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/,
				})
			}
		},
	},

	purgeCSS: {
		mode: 'postcss',
		styleExtensions: ['.css', '.scss'],
	},
}
