'use strict';
 
var gulp = require('gulp');
var rename = require('gulp-rename');
var minify = require('gulp-minify-css');
var sass = require('gulp-sass');
var rucksack = require('gulp-rucksack');
var livereload = require('gulp-livereload');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var base64 = require('gulp-base64');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');


/*
/*  COMPILE SASS  */

    gulp.task('compile-sass', function () {
        gulp.src('assets/sass/styles.scss')
            .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(rucksack({
                autoprefixer: true,
                fallbacks: true
            }))
            .pipe(minify())
            .pipe(rename('styles.min.css'))
			.pipe(base64({
				maxImageSize: 8*1024,
				debug: true
			}))
            .pipe(sourcemaps.write('.'))
			.pipe(gulp.dest('dist/css'))
		   	.pipe(livereload());
    });


/*
/*  CONCAT & MINIFY JS FILES  */
    
    var jsFiles = [
        'assets/js/jquery.min.js',    
        'assets/js/resizeSensor.min.js',    
        'assets/js/elementQueries.min.js',    
        'assets/js/flickity.min.js',    
        'assets/js/packery.min.js',    
        'assets/js/tether.min.js',    
        'assets/js/select.min.js'    
    ];

    gulp.task('compile-js', function () {
        gulp.src(jsFiles)
            .pipe(concat('vendor.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('dist/js'));
        
        gulp.src('assets/js/scripts.js')
            .pipe(uglify())
            .pipe(rename('scripts.min.js'))
            .pipe(gulp.dest('dist/js'));
    });
        

/*
/*  OPTIMIZE IMAGES  */

	gulp.task('optimize-images', function () {
		return gulp.src('images/*')
			.pipe(imagemin({
				optimizationLevel: 3, 
				progessive: true, 
				interlaced: true,
				use: [pngquant()]
			}))
			.pipe(gulp.dest('images'));
	});

/*
/*  WATCH SASS FILES  */

    gulp.task('watch', function () {
        gulp.watch('assets/sass/**/*', ['compile-sass']); 
        gulp.watch('assets/images/**/*', ['optimize-images']);		
		
        livereload.listen();
    });