<?php
header("content-type:text/html;charset=utf-8");
//获取传入的参数
$u=$_POST['username'];
$p=$_POST['password'];
//连接数据库
$link=mysqli_connect("localhost",'root','','fanke');
// if(mysqli_connect_error($link)){
//     die(mysqli_connect_error());
// }else{
//     echo "连接成功";
// }
// 设置编码
mysqli_set_charset($link,"utf8");
//SQL语句
$sql="insert into cc(name,pass) values('$u','$p')";
//执行A=SQL语句，并返回结果集
$result=mysqli_query($link,$sql);
// //判断当前集中是否存在数据
// if(mysqli_fetch_assoc($result)){
//     echo '1';
// }else{
//     echo '0';
// }

if($result==true){
    echo "注册成功";
}else{
    echo "注册失败";
}

//关闭连接
mysqli_close($link);
?>