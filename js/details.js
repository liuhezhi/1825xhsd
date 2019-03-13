function $id(id){
	return document.getElementById(id);
}
function Mirror(){
		this.box = $id("box"),  //大容器
		this.small = $id("small"), //小图区
		this.mask = $id("mask"), // 小图显示区   遮罩层
		this.big = $id("big"), //大图显示区
		this.bigImg = $id("bigImg"), // 大图
		this.smallImg = $id("smallImg"); //小图
		this.init = function(){
			this.small.onmouseover = function(){
				this.mask.style.display = "block";
				this.big.style.display = "block";
			}.bind(this)
			//第二步 ：  鼠标移出小图区   隐藏大图显示区和遮罩层mask
			this.small.onmouseout = function(){
				this.mask.style.display = "none";
				this.big.style.display = "none";
			}.bind(this)
		}
		this.move = function(){
			this.small.onmousemove = function(e){
			 	var e = e || event;
			 	//获取mask相对于父元素的left和top值
			 	var x = e.pageX - this.box.offsetLeft - this.mask.offsetWidth / 2 ;
			 	var y = e.pageY - this.box.offsetTop - this.mask.offsetHeight / 2 ;
			 	
			 	//获取mask的最大left值和top值
			 	var maxL = this.box.offsetWidth - this.mask.offsetWidth;
			 	var maxT = this.box.offsetHeight - this.mask.offsetHeight;
			 	
			 	//边界处理
			 	x = x < 0 ? 0 : ( x > maxL ? maxL : x );
			 	y = y < 0 ? 0 : ( y > maxT ? maxT : y );
			 	
			 	//设置mask的left和top
			 	this.mask.style.left = x + "px";
			 	this.mask.style.top = y + "px";
			 	
			 	//获取大图的移动时的left和top值
			 	//比例关系 ： 
			 	//bigImgLeft / x =  大图宽度-大图显示区宽度  / 小图宽度 - 小图显示区宽度
			 	var bigImgLeft = x*( this.bigImg.offsetWidth - this.big.offsetWidth )/(this.smallImg.offsetWidth - this.mask.offsetWidth);
			 	var bigImgTop = y*( this.bigImg.offsetHeight - this.big.offsetHeight )/(this.smallImg.offsetHeight - this.mask.offsetHeight);
			 	
			 	//设置大图的left和top
			 	this.bigImg.style.left = -bigImgLeft + "px";
			 	this.bigImg.style.top = -bigImgTop + "px";
			 	
			 	//要想实现等比放大  需要设置下面的比例关系
			 	//大图宽度  / 小图宽度 = 大图显示区宽度 / 小图显示区宽度
			 	//  800 / 350    400 / 175
			}.bind(this)
		}
	}
	var m = new Mirror();
	m.init();
	m.move();