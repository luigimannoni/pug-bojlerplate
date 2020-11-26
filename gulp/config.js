module.exports = {
	paths: {
		html: {
			inline: {
				src: [ 'src/templates/layouts/**/*.pug' ],
				dest: [ 'dist' ],
			},
			clean: {
				src: [ 'dist/**/*.html' ],
				dest: [ 'dist' ],
				options: {
					collapseWhitespace: true,
					keepClosingSlash: true,
					minifyCSS: false,
					removeComments: true,
					processConditionalComments: false,
					ignoreCustomComments: [ /\[if.*|\[endif/ ]
				},
			},
		},
		pug: {
			inline: {
				options: {
					pretty: '\t',
				},
			},
			clean: {
				options: {
					pretty: '\t',
				},
			},
		},		
		sass: {
			lint: {
				src: [ 'src/sass/**/*.scss' ],
				configFile: '.stylelintrc',
			},
			build: {
				src: [ 'src/sass/**/*.scss' ],
				dest: [ 'dist/css' ],
			},
			clean: {
				src: [ 'dist/css' ],
			},
		},
		watch: {
			src: [
				'src/sass/**/*.scss',
				'src/templates/**/*.pug',
			],
		},
		assets: {
			clean: {
				src: [ 'dist/assets/**/*' ],
			},
			copy: {
				src: [ 'src/assets/**/*' ],
				dest: [ 'dist/assets' ],
			},
		},
		release: {
			versionedFiles: [
				'README.md',
			],
		},
	},
};
