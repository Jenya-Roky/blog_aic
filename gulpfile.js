var gulp = require('gulp'), // Сообственно Gulp JS
    csso = require('gulp-csso'), // Минификация CSS
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    //imagemin = require('gulp-imagemin'), // Минификация изображений
    uglify = require('gulp-uglify'), // Минификация JS
    rename = require('gulp-rename'), // Минификация JS
    imageop = require('gulp-image-optimization'),
    concat = require('gulp-concat'); // Склейка файлов

gulp.task('sass',function(){
    gulp.src('./assets/css/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./assets/css'));
});
gulp.task('concatcss',function(){
    setTimeout(function(){
        gulp.src([
                './assets/css/main.css'
            ])
            .pipe(autoprefixer({
                browsers: ['last 10 versions'],
                cascade: false
            }))
            .pipe(concat('production.min.css'))
            .pipe(csso())
            .pipe(gulp.dest('./build/css'));
    },1000);
});
gulp.task('copy',function(){
    gulp.src('./assets/fonts/*')
        .pipe(gulp.dest('./build/fonts'))
    gulp.src('./assets/video/*')
        .pipe(gulp.dest('./build/video'))
});

gulp.task('concatjs',function(){
    gulp.src([
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/fastclick/lib/fastclick.js',
            'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
            './assets/js/three.min.js',
            './assets/js/detector.js',
            './assets/js/parallaxshader.js',
            './assets/js/vivus.js',
            './assets/js/mask.js',
            './assets/js/slick.min.js',
            './assets/js/jquery-ui.min.js',
            './assets/js/main.min.js'
        ])
        //gulp.src(['./assets/js/jquery-2.1.4.min.js','./assets/js/modernizr-custom.js','./assets/js/main.js'])
        .pipe(concat('production.min.js'))
        .pipe(gulp.dest('./build/js'))
    gulp.src([
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/fastclick/lib/fastclick.js',
            './assets/js/page.min.js'
        ])
        //gulp.src(['./assets/js/jquery-2.1.4.min.js','./assets/js/modernizr-custom.js','./assets/js/main.js'])
        .pipe(concat('production.page.min.js'))
        .pipe(gulp.dest( './build/js'))
});
gulp.task('buildjs',function(){
    //gulp.src(['./assets/js/jquery-2.1.4.min.js','./assets/js/ScrollMagic.min.js','./assets/js/TweenMax.min.js','./assets/js/animation.gsap.min.js','./assets/js/modernizr-custom.js','./assets/js/main.js'])
    gulp.src(['./assets/js/main.js'])
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('./assets/js'));
    gulp.src(['./assets/js/page.js'])
        .pipe(uglify())
        .pipe(rename('page.min.js'))
        .pipe(gulp.dest('./assets/js'))
});

gulp.task('images',function(){
    gulp.src(['./assets/img/*','./assets/img/*/*'])
        .pipe(imageop({
            optimizationLevel: 80,
            progressive: true,
            interlaced: true
        })).pipe(gulp.dest('build/img'))
});

gulp.task('watch',function(){
    gulp.watch('./assets/css/*.sass',['sass','css']);
    gulp.watch('./assets/js/*.js',['js']);
    setTimeout(function(){
        gulp.src([
            './assets/css/style.css'
        ])
            .pipe(autoprefixer({
                browsers: ['last 10 versions'],
                cascade: false
            }))
            .pipe(concat('production.min.css'))
            .pipe(csso())
            .pipe(gulp.dest('./build/css'));
    },500);
});

gulp.task('js',['buildjs', 'concatjs']);

gulp.task('build',['sass', 'concatcss','copy','js','images']);

gulp.task('css',['concatcss']);