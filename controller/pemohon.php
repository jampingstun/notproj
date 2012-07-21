<?php
if ($_GET['ip']=='input') {
    $f = $_POST['f'];
    $idgrouppemohon = $f['grouppemohon'];
    $tgldaftar = $f['tgldaftar'];
    $j = json_encode($f);
    if ($_POST['simpan']) {
        echo "test";
        $sql = "INSERT INTO pemohon (idpemohon, idgrouppemohon, tgldaftarpemohon, infopemohon, pbpemohon) VALUES ('null','".$idgrouppemohon."','".$tgldaftar."','".$j."','1')";
        mysql_query($sql) or die (mysql_error());
    }
    
    include 'view/pemohon.php';
}

?>
