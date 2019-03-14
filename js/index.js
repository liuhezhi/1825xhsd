/*轮播*/
	var index = 0;//控制图片和文字对应
	var timer = null;
	var olist = document.querySelector("#uu").children;
	var ulist = document.querySelector("#box").children;
	timer = setInterval( autoPlay , 2000 );
	function autoPlay(){
		index++;
		for( var i = 0 ; i < olist.length ; i++ ){
			olist[i].className = "";
			startMove( ulist[i] , 0 , "opacity" );
		}
		if( index  == olist.length ){
			index = 0;
		}
		olist[index].className = "current";
		startMove( ulist[index] , 100 , "opacity" );
	}
	
	for( let i = 0 ; i < olist.length ; i++ ){
		olist[i].onmouseover = function(){
			clearInterval( timer );
			index = i - 1;
			autoPlay();
		}
		olist[i].onmouseout = function(){
			timer = setInterval( autoPlay , 2000 );
		}
	} 
	//导航栏
	
//$(window).scroll(200,function(){
//	$(".top").css({display:'block',position: 'sticky',top: 0})
//})

$(window).scroll(function(){
        if( $(window).scrollTop() > 200 ){
			$(".top").css({display:'block'});   
        }else{
           $(".top").css({display:'none'});
        }
})