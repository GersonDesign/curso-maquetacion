var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;


gulp.task('serverTismart', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("*.html").on("change", reload);
    gulp.watch("css/*.css").on("change", reload);
});

/**
Para iniciar el servidor colocar gulp serverTismart

Para instalar los paquetes
npm install

En el caso que no se tenga gulp
npm install -g gulp

Si estas en mac o linux colocar sudo
**/
