let mix = require('laravel-mix');

// mix.js('resources/js/src/index.js', 'public/js')
//    .css('resources/js/src/styles.css', 'public/css');


// mix.js('resources/js/src/App.js', 'public/js').
// // mix.react('resources/js/src/index.js', 'public/js').
//     js('resources/js/src/server.js', 'public/js')
//     .sass('resources/sass/app.scss', 'public/css')
//     .css('resources/js/src/styles.css', 'public/css');

mix.js('resources/js/src/index.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .css('resources/js/src/styles.css', 'public/css');

