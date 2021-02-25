var submit=document.querySelector('[type="submit"]')
var user=document.querySelector('[type="text"]')
var pass=document.querySelector('[type="password"]')
//获取地址栏中的参数
var search=location.search

//给登录按钮绑定点击事件
submit.onclick=function(){
    //获取账号输入框中的value
    console.log(111)
    var u1=user.value
    var p1=pass.value
    //调用Ajax发送请求
    Ajax({
        url:'../php/denglu.php',
        data:`username=${u1}&password=${p1}`,
        success:function(dt){
            //判断当前返回值是否等于1
            if(dt==1){
                //判断当前地址栏中是否有参数
                if(search){
                    //获取参数中传入的地址
                    var new_url=search.split('=')[1]
                    location.href=new_url
                }else{
                    location.href="./index.html"
                }
                setCookie("user",u1)
            }else{
                alert("账号或密码错误")
            }
        }
    })
    return false
}