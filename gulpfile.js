const { src, dest, parallel } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const include = require('gulp-include'); 
const svgmin = require('gulp-svgmin');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');

function css() {
  return src('style/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(minifyCSS())
    .pipe(dest('build/css'))
}

function js() {
  return src('javascript/main.js', { sourcemaps: true })
    .pipe(include())
      .on('error', console.log)
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(dest('build/js', { sourcemaps: true }))
}

function svg() {
  return src('assets/**/*.svg')
    .pipe(svgmin())
    .pipe(dest('build/assets'))
}

exports.js = js;
exports.css = css;
exports.svg = svg;
exports.default = parallel(css, svg, js);