var browserify  = require('browserify'),
  gutil       = require('gulp-util'),
  watchify    = require('watchify'),
  babelify    = require('babelify'),
  gulp        = require('gulp'),
  uglify      = require('gulp-uglify'),
  concat      = require('gulp-concat'),
  order       = require('gulp-order'),
  streamify   = require('gulp-streamify'),
  preprocess  = require('gulp-preprocess'),
  env         = require('gulp-env'),
  del         = require('del'),
  source      = require('vinyl-source-stream'),
  sourceFile  = './app/js/main.js',
  destFolder  = './dist/',
  destFile    = 'app.js';

gulp.task('browserify', function() {
    var debug = (process.env.NODE_ENV == 'dev');

    var bundler = browserify(sourceFile, {
        debug: debug,
        cache: {},
        packageCache: {}
    }).transform(babelify, { presets: ['es2015'] })
        .bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source(destFile))
        .pipe(streamify(preprocess()));

    if (!debug) {
        bundler = bundler.pipe(streamify(uglify().on('error', gutil.log)));
    }

    bundler = bundler.pipe(gulp.dest(destFolder + 'js/'));

    return bundler;
});


gulp.task('watchify', function() {
  var bundler = watchify(browserify(sourceFile, {
    debug: true,
    cache: {},
    packageCache: {},
  }));

  function rebundle() {
    return bundler.bundle()
      .pipe(source(destFile))
      .pipe(streamify(preprocess()))
      .pipe(gulp.dest(destFolder + '/js'));
  }
  bundler.on('update', rebundle);
  bundler.on('log', gutil.log.bind(gutil));

  return rebundle();
});

gulp.task('copy', function () {
  gulp.src(['app/*', '!app/*.html']).pipe(gulp.dest(destFolder));
  gulp.src('app/*.html')            .pipe(preprocess()).pipe(gulp.dest(destFolder));

  gulp.src('app/data/**/*')     .pipe(gulp.dest(destFolder + 'data/'));
  gulp.src('app/fonts/**/*')     .pipe(gulp.dest(destFolder + 'fonts/'));
  gulp.src('app/css/**/**')     .pipe(gulp.dest(destFolder + 'css/'));
  gulp.src('app/audio/**/*')    .pipe(gulp.dest(destFolder + 'audio/'));
  gulp.src('app/img/**/*')      .pipe(gulp.dest(destFolder + 'img/'));
  gulp.src('app/js/vendor/**/*').pipe(gulp.dest(destFolder + 'js/vendor/'));
});

gulp.task('clean', function() {
    del(destFolder + '/**/*');
});

gulp.task('recopy', function(){
  gulp.watch("app/**/**!(*.js|*.map|*.src)", ['copy']);
});

var remoteAssetBase = 'https://s3.amazonaws.com/musedlab-qwertybeats/';
var localAssetBase  = 'https://musedbox.com/mused-assets/qwertybeats/';
var remoteAPI = 'https://api.musedlab.org';
var localAPI = 'https://api.musedbox.com';

gulp.task('set-env-local', function() {
    env({
        vars: {
            NODE_ENV    : 'dev',
            NODE_ORIGIN : 'http://localhost:63342',
            NODE_HOST   : 'https://staging.musedlab.org', // or "http://local.musedlab.org:3000"
            NODE_APPID  : "",
            NODE_HOTJAR : '',
            // NODE_GA     : 'UA-86760325-2',
            NODE_ASSETBASE: remoteAssetBase,
            NODE_APIBASE: remoteAPI
        }
    })
});

gulp.task('set-env-dev', function() {
    env({
        vars: {
            NODE_ENV    : 'dev',
            NODE_ORIGIN : 'https://dev.musedlab.org',
            NODE_HOST   : 'https://staging.musedlab.org',
            NODE_APPID  : "",
            NODE_HOTJAR : '',
            // NODE_GA     : 'UA-86760325-2',
            NODE_ASSETBASE: remoteAssetBase,
            NODE_APIBASE: remoteAPI
        }
    })
});

gulp.task('set-env-dev-local', function() {
    env({
        vars: {
            NODE_ENV: 'dev',
            NODE_ORIGIN : 'https://musedbox.com',
            NODE_HOST   : 'https://musedbox.com/cms', // (TODO)
            NODE_APPID  : "",
            NODE_HOTJAR: 129433,
            // NODE_GA     : 'UA-86760325-2',
            NODE_ASSETBASE: localAssetBase,
            NODE_LOCAL: true,
            NODE_APIBASE: localAPI
        }
    })
});

gulp.task('set-env-test', function() {
    env({
        vars: {
            NODE_ENV    : 'test',
            NODE_ORIGIN : 'https://test.musedlab.org',
            NODE_HOST   : 'https://musedlab.org',
            NODE_APPID  : "",
            NODE_HOTJAR: 129432,
            // NODE_GA     : 'UA-86760325-2',
            NODE_ASSETBASE: remoteAssetBase,
            NODE_APIBASE: remoteAPI
        }
    })
});

gulp.task('set-env-prod', function() {
    env({
        vars: {
            NODE_ENV    : 'prod',
            NODE_ORIGIN : 'https://apps.musedlab.org',
            NODE_HOST   : 'https://musedlab.org', // TODO: switchover this and APPID when ready
            NODE_APPID  : "",
            NODE_HOTJAR: 129431,
            // NODE_GA     : 'UA-86760325-1',
            NODE_ASSETBASE: remoteAssetBase,
            NODE_APIBASE: remoteAPI
        }
    })
});

gulp.task('dev',             ['set-env-local',     'copy', 'watchify', 'recopy']);
gulp.task('dev-deploy',      ['set-env-dev',       'copy', 'browserify']);
gulp.task('dev-deploy-local',['set-env-dev-local', 'copy', 'browserify']);
gulp.task('prod',            ['set-env-prod',      'copy', 'browserify']);
gulp.task('test',            ['set-env-test',      'copy', 'browserify']);
