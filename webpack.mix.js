const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

mix.sass('resources/sass/fontawesome.scss', 'public/backend/css');
mix.sass('resources/sass/bootstrap.scss', 'public/backend/css');


mix.copy('node_modules/jquery/dist/jquery.min.js', 'public/backend/js/jquery.min.js');
mix.copy('node_modules/bootstrap/dist/js/bootstrap.min.js', 'public/backend/js/bootstrap.min.js');
mix.js('resources/js/bootstrap.js', 'public/backend/js');
