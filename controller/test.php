<?
	$exe = $_GET['exe'];
	$view = $_GET['op'];
	switch ($exe) {
		case 'delete' :
                    include 'view/'.$view.'-delete.php';
		break;
		case 'edit' : 
			if ($_POST['SSUBMIT']) {
				// sql untuk insert
					
			} else {
				// ambil data di sql nya
				$id = $_GET['id'];
				// sql
				$row = array('nama'=>'abc','alamat'=>'asdassd');
				$f = $row;
			}
			include 'view/'.$view.'-add.php';
		break;
		case 'add' :
			$f = $_POST['f'];
			if ($_POST['SSUBMIT']) {
				// sql untuk insert
				print_r($f);
			}
		
			include 'view/'.$view.'-add.php';
		break;
		default:
			include 'view/'.$view.'.php';
		break;
	}
?>