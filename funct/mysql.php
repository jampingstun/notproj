<?php
	//echo $dbconfig['host'];
        
        $db['hostname'] = "localhost";
        $db['username'] = "root"; //jika lain, isikan yang sesuai
        $db['password'] = ""; //jika lain, isikan yang sesuai
        $db['database'] = "notaris&ppat";
        $db['dbdriver'] = "mysql";
        //$db['dbprefix'] = "ntr_";
	mysql_connect($db['hostname'],$db['username'],$db['password']) or die("CONNECTION FAILED");
 	mysql_select_db($db['database']) or die('DATABASE FAILED');
?>