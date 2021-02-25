var ewmBox=document.querySelector(".vweixinbox")
var ewm=document.querySelector('.vweixinTip')
var hTop=document.querySelector('.headerTop')
var hTspans=hTop.querySelectorAll('span')
var nav_LN=document.querySelector('.nav_LN')
var as_nav_LN=nav_LN.querySelectorAll('a')


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

// banner图
var mySwiper = new Swiper ('.swiper-container', {
    // autoplay: true,//可选选项，自动滑动
     autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },
    // direction: 'vertical', // 垂直切换选项
    speed:1000,
    loop: true, // 循环模式选项
    // effect :'cube',
    
    // 如果需要分页器
    pagination: {
         el: '.swiper-pagination',
        clickable:true,
    },
    
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
console.log(mySwiper.pagination.bullets.length)
for(i=0;i<mySwiper.pagination.bullets.length;i++){
        console.log(mySwiper.pagination.bullets[i])
        mySwiper.pagination.bullets[i].onmouseover=function(){
          this.click();
        };
      } 
    
var prev1=document.querySelector('.swiper-button-prev')
var next1=document.querySelector('.swiper-button-next')
prev1.onmouseover=function(){
    prev1.style.color="red"
}
prev1.onmouseout=function(){
    prev1.style.color="#ccc"
}
next1.onmouseover=function(){
    next1.style.color="red"
}
next1.onmouseout=function(){
    next1.style.color="#ccc"
}

//弹出广告栏
var shaoMaCon=document.querySelector('.shaoma_con')
var smIconClose=document.querySelector('.sm-icon-close')
smIconClose.onclick=function(){
    shaoMaCon.style.display="none"
}



