const browserSync = require("browser-sync").create(),
	gulp = require("gulp"),
	sass = require("gulp-sass"),
	cleanCSS = require("gulp-clean-css"),
	autoprefixer = require("gulp-autoprefixer");

gulp.task(
	"server",
	gulp.series(function () {
		browserSync.init({
			proxy: {
				target: "http://localhost:3000",
				ws: true,
			},
		});
	})
);

gulp.task(
	"sass",
	gulp.series(function () {
		return gulp
			.src("../src/scss/*.scss")
			.pipe(sass().on("error", sass.logError))
			.pipe(autoprefixer(["last 15 versions"]))
			.pipe(cleanCSS())
			.pipe(gulp.dest("../public/css"))
			.pipe(browserSync.stream());
	})
);

gulp.task(
	"watch",
	gulp.series(function () {
		gulp.watch("../src/scss/**/*.scss", gulp.series("sass"));
		gulp.watch("../src/**/*.js").on("change", browserSync.reload);
	})
);

gulp.task("default", gulp.parallel("server", "watch"));
