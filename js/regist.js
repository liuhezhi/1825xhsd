//1.点击提交按钮获取用户名和密码

	$(function(){
	//2.获取提交按钮
	$("#xiangqu").click(function(){
		//获取用户名
		var username_str = $("#userName").val();
		//获取密码
		var pwd_str = $("#userPwd").val();
		//将数据存入cookie
		$.cookie("name",username_str,{expires : 7 , path:"/"});
		$.cookie("pwd",pwd_str,{expires : 7 , path:"/"});
		
	})
	//验证
	var a = null;
	$("#userName").blur(function(){
	    var reg = /^1[34578]\d{9}$/;
	    var username_str = $("#userName").val();
	    if(!reg.test(username_str)){
	        $(this).siblings(".span1").css({"display" : "inline-block"});
	        
	    }else{
	        $(this).siblings(".span1").css({"display" : "none"});
	    } 
	})
	$("#passPwd").blur(function(){
	    var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/;
	    var password_str = $("#passPwd").val();
	    if(!reg.test(password_str)){
	        $(this).siblings(".span2").css({"display" : "inline-block"});
	       
	    }else{
	        $(this).siblings(".span2").css({"display" : "none"});
	    }
	})
	
	
})
