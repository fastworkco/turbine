const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')

gulp.task('default', function() {
  const outputConfigs = {
    src: './scss/main.scss',
    basename: 'turbine'
  }
  generateCSS(outputConfigs)
})

function generateCSS({ src = '', basename = '' }) {
  gulp
    .src(src)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(
      rename({
        basename,
        suffix: '',
        extname: '.css'
      })
    )
    .pipe(gulp.dest('./dist/'))
}
