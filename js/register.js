//1.点击提交按钮获取用户名和密码

$(function(){
	//2.获取提交按钮
	$("button").click(function(){
		//获取用户名
		var username_str = $("#userName").val();
		//获取密码
		var pwd_str = $("#userPasword").val();
		//将数据存入cookie
		$.cookie("name",username_str,{expires : 7 , path:"/"});
		$.cookie("pwd",pwd_str,{expires : 7 , path:"/"});
	console.log($.cookie());
	})
})
