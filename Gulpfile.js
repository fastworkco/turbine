const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')
const sync = require('gulp-sync')(gulp).sync

const sassOption = {
	outputStyle: 'compressed',
	includePaths: 'node_modules'
}

gulp.task('default', gulp.series(atomic, turbine, component))

function atomic () {
	return gulp
		.src('./scss/atomic.scss')
		.pipe(sass(sassOption).on('error', sass.logError))
		.pipe(autoprefixer({overrideBrowserslist: ['last 2 versions']}))
		.pipe(
			rename({
				basename: 'atomic',
				suffix: '',
				extname: '.css'
			})
		)
		.pipe(gulp.dest('./dist/'))
}

function turbine () {
	return gulp
		.src('./scss/turbine.scss')
		.pipe(sass(sassOption).on('error', sass.logError))
		.pipe(autoprefixer({overrideBrowserslist: ['last 2 versions']}))
		.pipe(
			rename({
				basename: 'turbine',
				suffix: '',
				extname: '.css'
			})
		)
		.pipe(gulp.dest('./dist/'))
}

function component () {
	return gulp
		.src('./scss/component.scss')
		.pipe(sass(sassOption).on('error', sass.logError))
		.pipe(autoprefixer({overrideBrowserslist: ['last 2 versions']}))
		.pipe(
			rename({
				basename: 'component',
				suffix: '',
				extname: '.css'
			})
		)
		.pipe(gulp.dest('./dist/'))
}
