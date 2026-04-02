const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concatCss = require('gulp-concat-css');
const cleanCSS = require('gulp-clean-css');

const paths = {
    styles: {
        src: 'src/styles/**/*.scss',
        dest: 'dist/styles/',
    },
    scripts: {
        src: 'src/scripts/main.js',
        dest: 'dist/scripts/'
    },
    libs: {
        files: [
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/jquery-ui/dist/jquery-ui.min.js',
            'node_modules/jquery-mask-plugin/dist/jquery.mask.min.js',
            'node_modules/slick-carousel/slick/slick.js',
            'node_modules/slick-carousel/slick/slick.css',
            'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
            'node_modules/magnific-popup/dist/magnific-popup.css',
            'node_modules/wowjs/dist/wow.min.js',
            'node_modules/wowjs/css/libs/animate.css'
        ],
        dest: 'dist/libs/'
    }
};

function copyLibs() {
    return gulp.src(paths.libs.files)
      .pipe(gulp.dest(paths.libs.dest));
}

function stylesTask() {
    return gulp.src(paths.styles.src)
      .pipe(sass().on('error', sass.logError))
      .pipe(concatCss("style.min.css"))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest(paths.styles.dest));
}

function scriptsTask() {
    return gulp.src(paths.scripts.src)
      .pipe(gulp.dest(paths.scripts.dest));
}

function watchFiles() {
    gulp.watch(paths.styles.src, stylesTask);
    gulp.watch(paths.scripts.src, scriptsTask);
}

exports.default = gulp.series(copyLibs, gulp.parallel(stylesTask, scriptsTask));
exports.watch = watchFiles;
