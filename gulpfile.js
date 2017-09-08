let gulp = require('gulp');
let fs = require('fs');
let closureCompiler = require('google-closure-compiler').gulp();
let webserver = require('gulp-webserver');
let packageConfig = require('./package.json');

/**
 * [interpolateConfigKeys description]
 * @param  {string} str
 * @param  {Object} cfg
 * @return {string}
 */
function interpolateConfigKeys(str, cfg) {
    return Object.keys(cfg).filter((key) => {
        return ['string', 'number'].includes(typeof cfg[key]);
    }).reduce((sum, key) => {
        return sum.replace(new RegExp('%' + key + '%', 'g'), cfg[key]);
    }, str);
}

/**
 * [userScriptHeader description]
 * @param  {Object} cfg
 * @return {string}
 */
function userScriptHeader(cfg) {
    return interpolateConfigKeys(
        fs.readFileSync('header.txt', 'utf8'),
        cfg
    );
}

/**
 * [outputWrapper description]
 * @param  {Object} cfg
 * @return {string}
 */
function outputWrapper(cfg) {
    return userScriptHeader(cfg) + '(function(){\n%output%\n}());';
}

gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(
            webserver({
                livereload: true,
                directoryListing: true,
                open: 'http://localhost:8000/sample/index.html'
            })
        );
});

gulp.task('js-compile', function() {
    return gulp.src(['src/js/index.js', 'src/js/init.js'], { base: './' })
        .pipe(closureCompiler({
            compilation_level: 'ADVANCED_OPTIMIZATIONS',
            warning_level: 'VERBOSE',
            language_in: 'ECMASCRIPT6_STRICT',
            language_out: 'ECMASCRIPT5_STRICT',
            output_wrapper: outputWrapper(packageConfig),
            js_output_file: packageConfig.js_output_file,
            use_types_for_optimization: true,
            externs: ['externs/node.js'],
            define: [
                'CODE_DEBUG=false',
                'BROWSER_ENV=true',
                'NODE_ENV=false'
            ]
        }))
        .pipe(gulp.dest('./dist/js'));
});
