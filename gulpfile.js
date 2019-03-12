//导入模块
const gulp = require('gulp');
const sass = require('gulp-sass');

//发布任务
gulp.task('sass',function(){
	gulp.src('./sass/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./css'));
})

//监听
gulp.task('default',()=>{
	gulp.watch(['./sass/*.scss'],['sass']);
})