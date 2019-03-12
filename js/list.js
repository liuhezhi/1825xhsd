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
		<div class="tab-one">
			<div class="tab-img">
				<img src=${arr[i].image}/>
			</div>
			<h2>${arr[i].title}</h2>
			<p>￥<span>${arr[i].price}</span></p>
		</div>
	` 
}
list1.innerHTML = html;
list2.innerHTML = html;
list3.innerHTML = html;
list4.innerHTML = html;
