<?php

       include 'include/header.php';
        
	$op = $_GET['op'];
	$fileinc = strtolower($op).'.php';
	if (file_exists('view/'.$fileinc)) {
		include 'view/'.$fileinc;
	} else {
		include 'view/tgrouptransaksi.php';
	}
	
        include 'include/footer.php';
        
?>
