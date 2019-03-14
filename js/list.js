var  arr=[
	{
		image:"img/list/list1-1.jpg",
		title:"谁的青春不迷茫",
		price:33.25
	},
	{
		image:"img/list/list1-2.jpg",
		title:"一座城池",
		price:30.40
	},
	{
		image:"img/list/list1-3.jpg",
		title:"绿（陪安东尼度过漫长岁月IV）",
		price:34.96
	},
	{
		image:"img/list/list1-4.jpg",
		title:"你的13-14岁孩子",
		price:28.41
	},
	{
		image:"img/list/list1-5.jpg",
		title:"读懂孩子（心理学家实用教子宝典12-18岁）（精）",
		price:74.10
	},
	{
		image:"img/list/list1-6.jpg",
		title:"后来时间都与你有关",
		price:37.81
	}
]
var html = "";
for( var i = 0 ; i < arr.length ; i++ ){
	html += `
		<div class="tab-one" data-list-id="${i}">
			<a href="details.html">
				<div class="tab-img">
					<img src=${arr[i].image}/>
				</div>
				<h2>${arr[i].title}</h2>
				<p>￥<span>${arr[i].price}</span></p>
			</a>
			<span class="go" style="color:#C62E2D;font-size:12px;cursor: pointer;">加入购物车</span>
		</div>
	` 
}
list1.innerHTML = html;
list2.innerHTML = html;
list3.innerHTML = html;
list4.innerHTML = html;


$(function(){
//	加载已有的购物车信息
	loadCart();
	//单击跳转页面
	$('tab-img').click(function(){
		
	})
	//给加入购物车按钮添加点击事件
	$(".go").click(function(e){
		//获取商品的id(用来区分不同的商品)
		var goodId = $(this).parent().attr("data-list-id");
		//获取商品的名称
		var goodName = $(this).siblings().children("h2").html();
		//获取商品的图片
		var goodImg = $(this).siblings().children(".tab-img").find("img").attr("src");
		//获取商品价格
		var goodPrice = $(this).siblings().children("p").children("span").html();
		//console.log(goodName,goodImg,goodPrice);
        //获取cookie中的信息
        //如果cookie中没有信息会返回一个undefined ,我所须是一个字符串类型的数据，所以将它转成一个“”空字符串。保持数据类型一致。
		var cartStr = $.cookie('shop')?$.cookie('shop'):"";
		//
		//将字符串转成对象
		var cartObj = convertCartStrToObj(cartStr);
		//
		//判断该商品是否已经在购物车中
		if(goodId in cartObj){
			cartObj[goodId].num += 1;
		}else{
			//如果不存在,那么将新商品的信息存入
			cartObj[goodId]={
				"name" : goodName,
				"price" : goodPrice,
				"num" : 1,
				"src" : goodImg
			};
		}
		//将新的购物车信息存回cookie
		//将对象转为字符串
		cartStr = JSON.stringify(cartObj);
		// 
		//存入cookie
		//
		$.cookie("shop",cartStr,{expires : 7,path:"/"});
		var total = 0 ;
		for(var id in cartObj){
			total += cartObj[id].num;
		}
		$("#sum").html(total);
	})
})
function convertCartStrToObj(cartStr){
    if(!cartStr){
        return {};
    }
    return JSON.parse(cartStr);
}

// 加载购物车中的信息，（使商品页与购物车页中的购物车数量同步）
function loadCart(){
    var cartStr = $.cookie("shop") ? $.cookie("shop") : "";
    var cartObj = convertCartStrToObj(cartStr);
    // 获取到购物车中的所有商品
    var total = 0;
    for(var id in cartObj){
        total += cartObj[id].num;
    }
    $("#sum").html(total);
}
