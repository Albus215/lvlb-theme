const gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    webpack = require('webpack'),
    webpackStream = require('webpack-stream'),

    saas = require('gulp-sass'),
    urlAdjuster = require('gulp-css-url-adjuster'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    livereload = require('gulp-livereload'),
    autoprefixer = require('gulp-autoprefixer'),

    imagemin = require('gulp-imagemin'),
    makeUrlVer = require('gulp-make-css-url-version'),

    path = require('path'),

    cached = require('gulp-cached'),
    remember = require('gulp-remember'),
    gulpif = require('gulp-if'),
    filter = require('gulp-filter'),
    sassInheritance = require('gulp-better-sass-inheritance'),

    browserSync = require('browser-sync')
;

const config = {
    browserSyncProxy: 'opensource-wp',
    // --
    // -- Path
    // --
    path: {
        dest: './static/',
        css: {
            srcDir: './app/',
            src: './app/package.scss',
            srcWatch: [
                './app/package.scss',
                './app/package-admin.scss',
                './app/package-auth.scss',
                './app/package-editor.scss',
                './app/modules/*/*.scss',
            ],
            filename: 'theme.css',

            srcAdmin: './app/package-admin.scss',
            filenameAdmin: 'theme.admin.css',

            srcEditor: './app/package-editor.scss',
            filenameEditor: 'theme.editor.css',

            srcAuth: './app/package-auth.scss',
            filenameAuth: 'theme.auth.css',
        },
        js: {
            src: './app/package.js',
            srcVendor: [
                './app/modules/vendor/babel-polyfill.js',
            ],
            srcWatch: [
                './app/package.js',
                './app/package-admin.js',
                './app/modules/*/*.js',
            ],
            filename: 'theme.js',
            filenameVendor: 'theme.vendor.js',
            filenameAdmin: 'theme.admin.js',
            srcAdmin: './app/package-admin.js',
        },
        img: {
            src: './app/img/**',
            dest: './static/img/',
        }
    },

    // --
    // -- AutoPrefixer
    // --
    autoprefixer: {
        flexbox: true,
        browsers: [
            'IE >= 11',
            'Edge >= 12',
            'Firefox >= 28',
            'Chrome >= 21',
            'Safari >= 6.1',
            'Opera >= 12.1',
            'iOS >= 7',
        ]
    },
    // --
    // -- Webpack
    // --
    webpack: {
        output: {
            filename: 'theme.js',
        },
        context: path.resolve(__dirname, 'app'),
        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    exclude: /(node_modules)/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/preset-env']
                    }
                }
            ]
        },
        externals: {
            jquery: 'jQuery'
        }
    },
    webpackAdmin: {
        output: {
            filename: 'theme.admin.js',
        },
        context: path.resolve(__dirname, 'app'),
        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    exclude: /(node_modules)/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/preset-env']
                    }
                }
            ]
        },
        externals: {
            jquery: 'jQuery'
        }
    }
};

const tasks = {
    // --
    // -- CSS
    // --
    css() {
        return gulp.src(config.path.css.src)
            .pipe(saas()).on('error', saas.logError)
            .pipe(gulpif(global.isWatching, cached('scss', {optimizeMemory: true}))) //filter out unchanged scss files, only works when watching
            .pipe(urlAdjuster({replace: ['../../img', 'img']}))
            .pipe(urlAdjuster({replace: ['../../fonts', 'fonts']}))
            .pipe(makeUrlVer({useDate: true}))
            .pipe(autoprefixer(config.autoprefixer))
            .pipe(rename(config.path.css.filename))
            .pipe(gulp.dest(config.path.dest))
            .pipe(rename({suffix: '.min'}))
            .pipe(cleanCSS())
            .pipe(gulp.dest(config.path.dest));
    },
    cssAdmin() {
        return gulp.src(config.path.css.srcAdmin)
            .pipe(saas()).on('error', saas.logError)
            .pipe(urlAdjuster({replace: ['../../img', 'img']}))
            .pipe(urlAdjuster({replace: ['../../fonts', 'fonts']}))
            .pipe(makeUrlVer({useDate: true}))
            .pipe(autoprefixer(config.autoprefixer))
            .pipe(rename(config.path.css.filenameAdmin))
            .pipe(gulp.dest(config.path.dest))
            .pipe(rename({suffix: '.min'}))
            .pipe(cleanCSS())
            .pipe(gulp.dest(config.path.dest));
    },
    cssEditor() {
        return gulp.src(config.path.css.srcEditor)
            .pipe(saas()).on('error', saas.logError)
            .pipe(urlAdjuster({replace: ['../../img', 'img']}))
            .pipe(urlAdjuster({replace: ['../../fonts', 'fonts']}))
            .pipe(makeUrlVer({useDate: true}))
            .pipe(autoprefixer(config.autoprefixer))
            .pipe(rename(config.path.css.filenameEditor))
            .pipe(gulp.dest(config.path.dest))
            .pipe(rename({suffix: '.min'}))
            .pipe(cleanCSS())
            .pipe(gulp.dest(config.path.dest));
    },
    cssAuth() {
        return gulp.src(config.path.css.srcAuth)
            .pipe(saas()).on('error', saas.logError)
            .pipe(urlAdjuster({replace: ['../../img', 'img']}))
            .pipe(urlAdjuster({replace: ['../../fonts', 'fonts']}))
            .pipe(makeUrlVer({useDate: true}))
            .pipe(autoprefixer(config.autoprefixer))
            .pipe(rename(config.path.css.filenameAuth))
            .pipe(gulp.dest(config.path.dest))
            .pipe(rename({suffix: '.min'}))
            .pipe(cleanCSS())
            .pipe(gulp.dest(config.path.dest));
    },
    // --
    // -- JS
    // --
    js() {
        return gulp.src(config.path.js.src)
            .pipe(webpackStream(config.webpack))
            .pipe(gulp.dest(config.path.dest))
            .pipe(rename({suffix: '.min'}))
            .pipe(uglify())
            .pipe(gulp.dest(config.path.dest));
    },
    jsVendor() {
        return gulp.src(config.path.js.srcVendor)
            .pipe(concat(config.path.js.filenameVendor))
            .pipe(gulp.dest(config.path.dest))
            .pipe(rename({suffix: '.min'}))
            .pipe(uglify())
            .pipe(gulp.dest(config.path.dest));
    },
    jsAdmin() {
        return gulp.src(config.path.js.srcAdmin)
            .pipe(webpackStream(config.webpackAdmin))
            .pipe(gulp.dest(config.path.dest))
            .pipe(rename({suffix: '.min'}))
            .pipe(uglify())
            .pipe(gulp.dest(config.path.dest));
    },
    // --
    // -- IMG
    // --
    img() {
        return gulp.src(config.path.img.src)
            .pipe(imagemin([
                    imagemin.gifsicle({interlaced: true}),
                    imagemin.jpegtran({progressive: true}),
                    imagemin.optipng({optimizationLevel: 5}),
                    imagemin.svgo({
                        plugins: [
                            {removeViewBox: true},
                            {cleanupIDs: false},
                            {removeXMLProcInst: false},
                        ]
                    })
                ],
                {
                    verbose: true
                })
            )
            .pipe(gulp.dest(config.path.img.dest));
    }
};

gulp.task('css', tasks.css);
gulp.task('css:admin', tasks.cssAdmin);
gulp.task('css:editor', tasks.cssEditor);
gulp.task('css:auth', tasks.cssAuth);
gulp.task('js', tasks.js);
gulp.task('js:vendor', tasks.jsVendor);
gulp.task('js:admin', tasks.jsAdmin);
gulp.task('img', tasks.img);
gulp.task('watch', function () {
    global.isWatching = true;
    livereload.listen();
    gulp.watch(config.path.css.srcWatch, tasks.css).on('change', function(event) {
        if (event.type === 'deleted') {
            // remember.forget('scss', event.path); //delete from gulp-remember cache
            delete cached.caches['scss'][event.path]; //delete from gulp-cached cache
            livereload.changed(event);
        } else {
            livereload.changed(event);
        }
    });
    gulp.watch(config.path.js.srcWatch, tasks.js).on('change', livereload.reload);
});
gulp.task('watch:static', function () {
    gulp.watch(config.path.css.srcWatch, tasks.css);
    gulp.watch(config.path.js.srcWatch, tasks.js);
});
gulp.task('watch:sync', function () {
    global.isWatching = true;
    browserSync.init({
        proxy: config.browserSyncProxy,
        notify: false
    });
    gulp.watch(config.path.css.srcWatch, tasks.css).on('change', function(event) {
        if (event.type === 'deleted') {
            // remember.forget('scss', event.path); //delete from gulp-remember cache
            delete cached.caches['scss'][event.path]; //delete from gulp-cached cache
            browserSync.reload(event);
        } else {
            browserSync.reload(event);
        }
    });
    gulp.watch(config.path.js.srcWatch, tasks.js).on('change', browserSync.reload);
});