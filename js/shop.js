$(function(){
    loadCart();
    // 取出cookie中的信息
    var cartStr = $.cookie("shop") ? $.cookie("shop") : "";
    if(!cartStr){
        $(".blank").css({
            display : "block"
        });
    }else{
        var cartObj = convertCartStrToObj(cartStr);
        
        console.log(cartObj);
        //遍历所有的商品生成html添加到购物车列表中去
        for(var id in cartObj){
            var good = cartObj[id];
            var str = `
                <div class="group_item " data-good-id="${id}">
                    <div class="goods_item ">
                        <input class="select " type="checkbox" checked = "checked" name="select">
                        <div class="item_message">
                            <div class="img_wrap _left">
                                <img src="${good.src}" alt="" srcset="">
                            </div>
                            <div class="p_info">
                                <div class="p_detail">
                                    <h2>${good.name}</h2>
                                    <div class="price_wrap">
                                        <p class="price">￥${good.price}</p>
                                    </div>
                                </div>
                                <div class="p_edit">
                                    <p class="sum">小计：￥<span>${good.num*good.price}</span></p>
                                    <div class="input_wrap">
                                        <a href="javascript:" class="down num_edit_btn">
                                            <i class="iconfont">&#xe603;</i>
                                        </a> 
                                        <input type="text" class="item_num" value="${good.num}"> 
                                        <a href="javascript:" class="up num_edit_btn">
                                            <i class="iconfont">&#xe602;</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> ` 
            //将上面的结构添加到cartList中去
			$(str).appendTo(".good_list");         
        }
        //给减少按钮添加事件
        $(".input_wrap .down").click(function(){
            var id = $(this).parents('.group_item').attr("data-good-id");
            // console.log(id);
            var cartStr = $.cookie("shop") ? $.cookie("shop") : "";
            var cartObj = convertCartStrToObj(cartStr);
            if(cartObj[id].num > 1){ //商品数量减少不能少于1
                
                cartObj[id].num -= 1;
                // 数量减1
                $(this).siblings("input").val(cartObj[id].num);
                // 更新小计
                $(this).parent().siblings("p").children().html(cartObj[id].num*cartObj[id].price);
                //将信息放回cookie
                $.cookie("shop",JSON.stringify(cartObj),{
                    expires : 7,path : "/"
                });
                loadCart();
            }
            // $(this).parents(".main").children().children().eq(1).children().html(total);
        });
        //给增加按钮添加事件
        $(".input_wrap .up").click(function(){
            var id = $(this).parents('.group_item').attr("data-good-id");
            var cartStr = $.cookie("shop") ? $.cookie("shop") : "";
            var cartObj = convertCartStrToObj(cartStr);
            cartObj[id].num += 1;
            //将页面上显示的数量加1;
            $(this).siblings("input").val(cartObj[id].num);
            // 更新小计
            $(this).parent().siblings("p").children().html(cartObj[id].num*cartObj[id].price);
            // 将信息放回cookie
            $.cookie("shop",JSON.stringify(cartObj),{
                expires : 7,path : "/"
            });
            loadCart();
        });
        //改数量的input绑定一个blur事件
        $(".input_wrap input").blur(function(){
            var id = $(this).parents('.group_item').attr("data-good-id");
            var cartStr = $.cookie("shop") ? $.cookie("shop") : "";
            var cartObj = convertCartStrToObj(cartStr);
            //判断用户输入是否合法
            var pattern = /^\d+$/;
            if(!pattern.test($(this).val())){
                cartObj[id].num = 1;
                $(this).val("1");
            }else{
                // 修改数量
                cartObj[id].num = parseInt($(this).val());
            }
            $(this).siblings("input").val(cartObj[id].num);
            // 更新小计
            $(this).parent().siblings("p").children().html(cartObj[id].num*cartObj[id].price);
            // 将信息放回cookie
            $.cookie("shop",JSON.stringify(cartObj),{
                expires : 7,path : "/"
            });
        });

        // 总价

    }
})

// 字符串转对象
function convertCartStrToObj(cartStr) {
    if(!cartStr) {
        return {};
    }
    return JSON.parse(cartStr);
}

function loadCart(){
    var cartStr = $.cookie("shop") ? $.cookie("shop") : "";
    var cartObj = convertCartStrToObj(cartStr);
    // 获取到购物车中的所有商品
    var total = 0;
    for(var id in cartObj){
        total += cartObj[id].num;
    }
    $(".zong").html(total);
    var zj = 0;
    for(var id in cartObj){
        zj += cartObj[id].num*cartObj[id].price;
    }
    $("#zj").html(zj)
}