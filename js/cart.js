//获取账号cookie
var name1=getCookie("user")
//获取大盒子对象
var box=document.querySelector(".panel")
//获取地址栏地址
var url=location.href
//获取localStorage中的cartList3
var cartList=localStorage.getItem("cartList3")
//把当前cartList字符串转为数组对象
cartList=JSON.parse(cartList)||[]
//判断当前cookie是否存在
if(name1){
    show()
}else{
    alert("你还没登录，请登录再进入")
    location="./denglu.html?pathUrl="+url
}
function show(){
    //判断当前localStorage中是否有内容
    if(cartList.length>0){
        //获取全选框是否被选中
        var aa=cartList.every(item=>{
            //判断当前商品是否被选中 
            return item.is_select==1
        })
        //获取当前被选中商品的种类和价格
        var sum=total()
        var str2=`
        <div id="header" class="clearfix">
            <a href="./index.html" class="logo" title="凡客诚品" target="_blank">
                <img src="http://i2.vanclimg.com/cms/20140829/vancl-logo.png" alt="凡客诚品"></a>
            <div class="help-center">
                <a href="#">帮助中心</a>
            </div>
            <div class="account">
                <p>
                    您好，欢迎光临凡客诚品。
                    <a href="./denglu.html" class="login">登录</a>
                    |
                    <a href="./zhuce.html" class="reg">注册</a>
                </p>
            </div>
        </div>

        <div id="location">
            <em>1.我的购物车</em>
            <span>2.填写核对信息单</span>
            <span>3.成功提交订单</span>
        </div>

        <div id="content">
            <div id="cart-gift">
                <div class="cart-top">
                    <h2>我的购物车</h2>
                </div>
                <div class="tip">
                    <span>温馨提示：</span>
                    1.选购清单中的商品无法保留库存，请您及时结算。2.商品的价格和库存将以订单提交时为准。3.促销活动满减优惠将均摊至商品小计中。

                </div>
                <div id="cart">

                </div>
                <div id="cart-product" class="clearfix ">
                    <div id="batchdelcart">
                        <table cellspacing="0">
                            <thead >
        <thead>
        <tr>
            <th class="title-white bd-left">&nbsp;</th>
            <th class="bar-title ">
                <input type="checkbox" class="track all-products-ckb ckb" name="quanxuan"
                    id="all-ckb-top"  ${aa?"checked":''}>
                <label for="all-ckb-top">全选</label>
            </th>
            <th class="img">
                &nbsp;
            </th>
            <th class="name">
                商品名称
            </th>
            <th class="size">
                尺寸
            </th>
            <th class="presentpoints" style="display:none">
                积分
            </th>
            <th class="price">
                单价
            </th>
            <th class="qty">
                数量
            </th>
            <th class="discount">
                优惠
            </th>
            <th class="subtotal">
                小计
            </th>
            <th class="operate ">
                操作
            </th>
            <th class="title-white bd-right">
                &nbsp;
            </th>
        </tr>
    </thead>
    <tbody id="supplier-general-product_tb" name="supplier-general-product_tb" >
        `   
    //遍历数组中所有的商品
    cartList.forEach(item=>{
        str2+=`
        <tr>
        <td class="white bd-left bd-bottom">&nbsp;</td>
        <td class="bar bd-bottom" rowspan="1" colspan="6"></td>
        <td class="bd-bottom"></td>
        <td class="subtotal bd-bottom"></td>
        <td class="operate bd-bottom"></td>
        <td class="white bd-right bd-bottom"></td>
    </tr>

    <tr class="selected">
        <td class="white bd-left">
            &nbsp;
        </td>
        <td class="bar" rowspan="1">
            <input type="checkbox" ${item.is_select==1?"checked":''} class="track ckb" name="xuan" data-id="${item.id}" data-del-tip>
        </td>
        <td class="image" rowspan="1">
            <a href="#" target="_blank">
                <img src="${item.imgUrl}"
                    alt="${item.name}">
            </a>
        </td>
        <td class="name">
            <a href="#" target="_blank" title="${item.name}">
            ${item.name}
            </a>
            <div style="float: right; width: 36%"></div>
        </td>
        <td class="size">
            <a target="_blank" title="L">
                L
            </a>
        </td>
        <td class="presentpoints" style="display: none">
            258分
        </td>
        <td class="price">
            ￥${item.pricetete}
        </td>
        <td class="qty">
            <button type="button" data-id="${item.id}" ${item.cart_number<=1?"disabled":''}>-</button>
            <button type="button" class="btn1" >${item.cart_number}</button>
            <button type="button" data-id="${item.id}" ${item.number<=item.cart_number?"disabled":''}>+</button>
        </td>
        <td>-</td>
        <td class="subtotal">
            ￥${item.pricetete*item.cart_number}
        </td>
        <td class="operate">
            <a href="#" class="del track" name="sp_cart_mycart_del" data-id="${item.id}">删除</a>
        </td>
        <td class="white bd-right">&nbsp;</td>
    </tr>
        `
    })
    //给当前字符串拼接结束的标签
    str2+=`</tbody>`
    str2+=`
    <tbody>
    <tr>
        <td class="white bd-left table-bottom table-bottom-td">
            &nbsp;
        </td>
        <td colspan="9" class="table-bottom table-bottom-td">
            &nbsp;
        </td>
        <td class="white bd-right table-bottom table-bottom-td">
            &nbsp;
        </td>
    </tr>
</tbody>
</table>

<div class="bar-empty clearfix"></div>

<div id="bar-summary" class="bar-summary clearfix" style="top: 0px;">
<div class="bar">
    <input type="checkbox" name="quanxuan" id="all-ckb-top" class="track all-products-ckb ckb" ${aa?"checked":''} >
    <label for="all-ckb-bt">全选</label>
    
    <span>
        数量总计<em>${sum[0]}</em>件
    </span>
    <span><em>您目前可以享受全场购物免运费</em></span>
</div>

<div class="summary">
    产品金额总计(不含运费)
    <span class="amount">
        ￥<em>${sum[1]}</em>
    </span>
    <a href="#" style="display:inline-block;color:#A10000;margin-left:10px;text-decoration: underline;">
        点击领取优惠券
    </a>
</div>

<div class="btn-panel">
    <a href="./liebiao.html" class="go-buy track" name="sp_cart_mycar_goBuy">继续购物</a>
    <a href="" class="checkout track" id="sp_cart_mycar_goPay" name="sp_cart_mycar_goPay">去结算</a>
</div>
</div>
</div>
        </div>

        <div id="gift" data-present-url="/mycart/presents"></div>

        <div id="footer">
            <p class="copyrights">
                Copyright 2007 - 2021 vancl.com All Rights Reserved 京ICP证100557号 京公网安备11010102000579号
                出版物经营许可证新出发京批字第直110138号
            </p>
            <p class="certs">
                <a href="http://www.ectrustprc.org.cn/seal/splash/1000020.htm" class="ectrustprc" title="中国电子商务诚信单位"
                    target="_blank">
                    <img src="../img/cert-redlogo.gif" alt="电子商务诚信单位"></a>
                <span class="costumeorg" title="中国服装协会会员单位">
                    <img src="../img/cert-costumeorg.gif" alt="中国服装协会会员单位">
                </span>
                <a href="http://www.315online.com.cn/member/315090053.html" class="online315" title="网上交易保障中心"
                    target="_blank">
                    <img src="../img/cert-wsjybzzx.gif" alt="网上交易保障中心"></a>
            </p>
        </div>
    `
    //最后把拼接好的内容添加到box大盒子中
    box.innerHTML=str2
    }else{
        var str1=`
        <div id="header" class="clearfix">
            <a href="./index.html" class="logo" title="凡客诚品" target="_blank">
                <img src="http://i2.vanclimg.com/cms/20140829/vancl-logo.png" alt="凡客诚品"></a>
            <div class="help-center">
                <a href="#">帮助中心</a>
            </div>
            <div class="account">
                <p>
                    您好，欢迎光临凡客诚品。
                    <a href="./denglu.html" class="login">登录</a>
                    |
                    <a href="./zhuce.html" class="reg">注册</a>
                </p>
            </div>
        </div>

        <div id="location">
            <em>1.我的购物车</em>
            <span>2.填写核对信息单</span>
            <span>3.成功提交订单</span>
        </div>
                

                        

                
                 <div id="cart-empty">
                    您的购物车中没有商品请您先
                    <a href="./liebiao.html">选购商品>></a>
                </div> -->
            </div>
        </div>

        <div id="gift" data-present-url="/mycart/presents"></div>

        <div id="footer">
            <p class="copyrights">
                Copyright 2007 - 2021 vancl.com All Rights Reserved 京ICP证100557号 京公网安备11010102000579号
                出版物经营许可证新出发京批字第直110138号
            </p>
            <p class="certs">
                <a href="http://www.ectrustprc.org.cn/seal/splash/1000020.htm" class="ectrustprc" title="中国电子商务诚信单位"
                    target="_blank">
                    <img src="../img/cert-redlogo.gif" alt="电子商务诚信单位"></a>
                <span class="costumeorg" title="中国服装协会会员单位">
                    <img src="../img/cert-costumeorg.gif" alt="中国服装协会会员单位">
                </span>
                <a href="http://www.315online.com.cn/member/315090053.html" class="online315" title="网上交易保障中心"
                    target="_blank">
                    <img src="../img/cert-wsjybzzx.gif" alt="网上交易保障中心"></a>
            </p>
        </div>
        ` 
        //把当前内容添加到box盒子中
        box.innerHTML=str1
        console.log(sum[0])
    }
    console.log(sum[0])
}

//给box大盒子对象绑定点击事件
box.onclick=function(e){
    var e = e || window.event
    //获取点击对象
    var target=e.target || e.srcElement
    //判断当前点击的是否为+
    if(target.innerHTML=="+"){
        //获取当前对象中的id属性
        var id=target.getAttribute("data-id")
        //遍历cartList数组对象
        cartList.forEach(item=>{
            //判断遍历出来的商品是否为当前操作商品
            if(item.id==id){
                item.cart_number++
            }
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList3",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }
    //判断当前点击的是否为减法按钮
    if(target.innerHTML=='-'){
        //获取当前对象中的id属性
        var id=target.getAttribute("data-id")
        //遍历cartList数组对象
        cartList.forEach(item=>{
            //判断遍历出来的商品是否为当前操作商品
            if(item.id==id){
                item.cart_number--
            }
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList3",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }
    //删除
    if(target.innerHTML=='删除'){
        //获取当前对象的id
        var id=target.getAttribute("data-id")
        cartList=cartList.filter(item=>{
            //过滤被删除的商品
            return item.id!=id
        })
        
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList3",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }
    //全选
    if(target.name=="quanxuan"){
        //遍历所有商品
        cartList.forEach(item=>{
            //判断当前全选框是否被选中
            if(target.checked){
                item.is_select=1
            }else{
                item.is_select=0
            }
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList3",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }
    //选中框
    if(target.name=="xuan"){
        //获取当前商品对应的id 
        var id=target.getAttribute("data-id")
        //遍历数组中所有的商品对象
        cartList.forEach(item=>{
           if(item.id==id){
            //   //判断当前选中框是否被选中
            //   if(item.is_select==1){
            //       item.is_select=0
            //   }else{
            //       item.is_select=1
            //   }
            item.is_select=item.is_select==1?"0":"1"
           }
       })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList3",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }
    //去结算
    if(target.innerHTML=="去结算"){
        //添加确认框
        if(confirm("你确定要购买吗？")){
            alert("你需要支付：￥"+total()[1])
            cartList=cartList.filter(item=>{
                return item.is_select!=1
            })
            //重新把当前操作完毕的数组添加到localStorage中
            localStorage.setItem("cartList3",JSON.stringify(cartList))
            //调用show方法，重新把页面再次渲染
            show()
        }
    }

    //统计所选商品种类和价格

}
function total(){
    var num=0 //所选商品种类
    var price=0 //所选商品总价格
    //遍历cartList数组对象
    cartList.forEach(item=>{
        //判断当前商品是否被选中
        if(item.is_select==1){
            num++
            price+=item.cart_number*item.pricetete
        }
    })
    return [num,price]
}