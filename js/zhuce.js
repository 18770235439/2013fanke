var btn=document.querySelector('#inp')
var submit=document.querySelector('[type="submit"]')
var user=document.querySelector('[type="text"]')
var pass=document.querySelector('[type="password"]')
//获取地址栏中的参数
var search=location.search

btn.onclick=function(){
    //判断当前选项是否被选中
    if(user.value!='' && pass.value!='' && btn.checked){
        //取消登录按钮的禁用
        submit.disabled=false
        //改变登录按钮的背景色
        submit.style.backgroundColor="#b52024"
    }else{
        submit.disabled=true
        submit.style.backgroundColor='#9A9A9A'
    }
}


//给注册按钮绑定点击事件
submit.onclick=function(){
    //获取账号输入框中的value
    console.log(111)
    var u1=user.value
    var p1=pass.value
    console.log(u1,p1)
    //调用Ajax发送请求
    Ajax({
        url:'../php/zhuce.php',
        type:'post',     
        data:`username=${u1}&password=${p1}`,
        success:function(dt){
            //判断当前返回值是否等于1
            if(dt==1){
                alert('注册失败')
            }else{
                alert("注册成功，欢迎登录!")
                location.href="./denglu.html"
            }
        }
    })
    return false
}