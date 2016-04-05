import gulp from 'gulp';
import gutil, { PluginError } from 'gulp-util';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';

import assign from 'object-assign';
import browserify from 'browserify';
import watchify from 'watchify';
import babelify from 'babelify';

import del from 'del';

var paths = {
  index: 'src/index.html',
  scripts: 'src/app/**/*.js',
  images: 'src/images/**/*',
  styles: 'src/styles/**/*',
  templates: 'src/app/**/*.html'
};

gulp.task('copy', () => {
  return gulp.src([
    paths.index,
    'node_modules/angular2/bundles/angular2-polyfills.js',
    'node_modules/angular2/bundles/angular2-polyfills.min.js'
  ])
    .pipe(gulp.dest('public'));
});

gulp.task('templates', () => {
  return gulp.src([paths.templates]).pipe(gulp.dest('public/app'));
});

gulp.task('images', () => {
  return gulp.src([paths.images]).pipe(gulp.dest('public/images'));
});

gulp.task('styles', () => {
  return gulp.src([paths.styles]).pipe(gulp.dest('public/styles'));
});

gulp.task('build', ['copy', 'images', 'styles', 'templates'], () => {
  const b = browserify('src/app/index.js', { debug: true })
    .transform(babelify);
  return bundle(b);
});

gulp.task('watch', () => {
  const b = browserify('src/app/index.js', assign({ debug: true }, watchify.args))
    .transform(babelify);
  const w = watchify(b)
    .on('update', () => bundle(w))
    .on('log', gutil.log);
  return bundle(w)
});

gulp.task('clean', () => {
  return del('public');
});

gulp.task('default', ['clean', 'build', 'watch']);

function bundle(b) {
  return b.bundle()
    .on('error', (e) => {
      console.error(e.stack);
    })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('public/app'));
}
