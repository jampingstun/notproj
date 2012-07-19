<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
session_start();
if(isset($_SESSION['username'])){
    echo '<a href= "index.php?op=logout">logout</a>';
    $_GET['op'] = 'sewa';
    include 'view/wrapper.php';
}
$name = $_POST['username'];
$pass = $_POST['password'];
if(($name!='') && ($pass!='')){
$login = mysql_query("select username, password from ntr_users where
    (username='".mysql_real_escape_string($name)."') and (password='".mysql_real_escape_string(md5($pass))."')");
 if(mysql_num_rows($login)==1){
    $_SESSION['username'] = $_POST['username'];
    echo '<a href= "index.php?op=logout">logout</a>';
    $_GET['op'] = 'sewa';
    include 'view/wrapper.php';
 }
 else{
     echo 'anda tidak berhasil login';
 }
}
else{
 include 'view/wrapper.php';
}
?>
