var gulp=require("gulp");
var connect=require("gulp-connect");
var less=require("gulp-less");


gulp.task("webserver",function(){
	connect.server({
        port: 8080,
        livereload: true
	});
});

gulp.task("less",function(){
	gulp.src("styles/style.less")
	.pipe(less())
	.pipe(gulp.dest("styles"))
	.pipe(connect.reload());
})
gulp.task("watch",function(){
	gulp.watch("styles/*.less",["less"]);
})


gulp.task("default",['less','webserver','watch']);