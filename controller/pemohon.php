<?php
if ($_GET['act']=='add') {
    $f = $_POST['f'];
    $idgrouppemohon = $f['grouppemohon'];
    $tgldaftar = $f['tgldaftar'];
    $j = json_encode($f);
    if ($_POST['simpan']) {
        echo "test";
        $sql = "INSERT INTO pemohon (idpemohon, idgrouppemohon, tgldaftarpemohon, infopemohon, pbpemohon) VALUES ('null','".$idgrouppemohon."','".$tgldaftar."','".$j."','1')";
        $sql_lastid = "SELECT LAST_INSERT_ID()";
        mysql_query($sql) or die (mysql_error());
        $id = mysql_query($sql_lastid) or die(mysql_error());
        while ($row = mysql_fetch_array($id)) {
            $last_id = $row[0];
        }
        $sql = "delete from tbl_index where tipe='pemohon' and id='".$last_id."'";
        mysql_query($sql) or die(mysql_error());
        foreach ($indexconfig['pemohon'] as $v) {
            $sql = "insert into tbl_index (tipe,id,kode,isi) values ('pemohon','".$last_id."','".$v."','".$f[$v]."')";
            mysql_query($sql) or die(mysql_error());
        }
    }
    include 'view/wrapper.php';
}

if ($_GET['act']=='get') {
    
}

?>
