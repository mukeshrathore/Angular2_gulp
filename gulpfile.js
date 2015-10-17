var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var tsc = require('gulp-typescript');
var tslint = require('gulp-tslint');
var tsProject = tsc.createProject('tsconfig.json');
var config = require('./gulp.config')();

var browserSync = require('browser-sync');
var superstatic = require('superstatic');

gulp.task('ts-lint', function() {
	return gulp.src(config.allTs)
		.pipe(tslint())
		.pipe(tslint.report('prose', {
			emitError: false
		}))
})

gulp.task('compile-ts', function() {
	var sourceTsFiles = [
		config.allTs,
		config.typings,
		config.components
			
	];
	
	var tsResult = gulp
		.src(sourceTsFiles)
		.pipe(sourcemaps.init())
		.pipe(tsc(tsProject));
		
	return tsResult.js
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.tsOutputPath));
});

gulp.task('serve', ['ts-lint', 'compile-ts'], function() {
	
	gulp.watch([config.allTs], ['ts-lint', 'compile-ts']);
	
	browserSync({
		port: 8000,
    files: ['index.html', '*.js', '*.html'],
    injectChanges: true,
    logFileChanges: false,
    logLevel: 'silent',    
    notify: true,
    reloadDelay: 0,
    server: {
      
      middleware: superstatic({ debug: false})
    }
	});
	
});

gulp.task('default', ['serve']);