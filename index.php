<?php
session_start();
error_reporting(E_ALL & ~E_NOTICE & ~E_DEPRECATED);
	include 'config.php';
	include 'funct/common.php';
        include 'view/header.php';

	// ada  2 tipe params GET | POST
        
	$op = $_GET['op'];

	// cek controller ada tidak
	$fileinc = strtolower($op).'.php';
	if (file_exists('controller/'.$fileinc)) {
		include 'controller/'.$fileinc;
	} else {
		include 'view/wrapper.php';
	}
	
        include 'view/footer.php';
	/*
?>

	<form method="post">
		<input type="text" name="op">
		<input type="submit">
	</form>

<?php
	echo 'GET : '.$_GET['op'].'<br />';
	echo 'POST : '.$_POST['op'].'<br />';
?>

*/
?>