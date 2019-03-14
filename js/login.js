$(function(){
	
//	console.log($.cookie());	
		$("#btn").click(function(){
			if($("#user").val()==$.cookie().name && $("#pwd").val()==$.cookie().pwd){
				location.href = "index.html";
			}else{
				alert("用户名者密码错误")
			}
		})	
})
