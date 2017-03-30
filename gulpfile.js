var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
var gulp = require('gulp');
var plumber = require('gulp-plumber');

var src = './src';
var dest = '.';

gulp.task('webpack', () => {
    return gulp.src(src + './index.js')
      .pipe(plumber())
      .pipe(webpackStream(webpackConfig, webpack))
      .pipe(gulp.dest(dest))
});

gulp.task('default', ['webpack']);

