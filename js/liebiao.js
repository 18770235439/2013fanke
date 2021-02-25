var ewmBox=document.querySelector(".vweixinbox")
var ewm=document.querySelector('.vweixinTip')
var hTop=document.querySelector('.headerTop')
var hTspans=hTop.querySelectorAll('span')
var nav_LN=document.querySelector('.nav_LN')
var as_nav_LN=nav_LN.querySelectorAll('a')

var row=document.querySelector('.row')
var pagination1=document.querySelector('.pagination')
var dt;

(async function(){
    dt=await promiseAjax({
        url:'../php/liebiao.php',
        datatype:'json'
    })
    console.log(dt)
    //创建分页器对象
    new Pagination(pagination1,{
        pageInfo:{
            pagenum:1,
            pagesize:10,
            totalsize:dt.length,
            totalpage:Math.ceil(dt.length/10)
        },
        textInfo:{
            first:'首页',
            prev:"上一页",
            next:"下一页",
            last:"尾页"
        },cb(m){
            //获取当前页需要显示的数据
            var ar1=dt.slice((m-1)*10,m*10)
            //创建拼接所有数据的字符串
            var str=''
            //遍历当前ar1数组中所有的数据
            ar1.forEach(item=>{
                str+=`
                <li class="scListArea borCdbd7d6 productwrapper border">
                    <div class="pic" >
                        <a href="./xiangqin.html?id=${item.id}" class="track" name="s-s-c_rs_27544-1_1-6389529_Sort01_qb_000-v" title="${item.name}" target="_blank">
                            <img src="${item.imgUrl}" alt="牛仔衬衫 男款 水洗蓝" width="230" height="230" class="productPhoto" style="display: block;">
                        </a>
                        <div class="tehui">${item.pricete}</div>
                    </div>
                    <p>
                        <a href="./xiangqin.html" class="track" name="s-s-c_rs_27544-1_1-6389529_Sort01_qb_000-v" title="牛仔衬衫 男款 水洗蓝">${item.name}</a>
                    </p>
                    <div class="Mpricediv0124">
                        <span class="Sprice">
                            售价￥<strong>${item.price}</strong>
                        </span>
                    </div>
                </li>
                `
            })
            //把当前拼接好的字符串，添加到row盒子中
            row.innerHTML=str
        }
        
    })
})()



ewmBox.onmouseover=function(){
    ewm.style.display="block"
}
ewmBox.onmouseout=function(){
    ewm.style.display="none"
}
// console.log(hTspans)
for(attr in hTspans){
    hTspans[attr].onmouseover=function(){
        this.style.color="red"
    }  
    hTspans[attr].onmouseout=function(){
        this.style.color="#808080"
    } 
}
// 导航
$(function(){
    $('.nav_LN>li').hover(function(){
        $(this).children('ul').stop().slideToggle(600)
    })
})
console.log(as_nav_LN)
for(attr in as_nav_LN){
    as_nav_LN[attr].onmouseover=function(){
        this.style.color="red"
    }  
    as_nav_LN[attr].onmouseout=function(){
        this.style.color="#808080"
    } 
}

$('.duyi').click(function(){
    alert('已加入购物车')
})
