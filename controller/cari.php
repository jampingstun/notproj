<?php
$f = $_POST['f'];
$sql = "SELECT * FROM tbl_index WHERE tipe='".$f['tipe']."' and kode='".$f['kode']."' and isi='".$f['isi']."'";
$data = mysql_query($sql) or die(mysql_error());
if (mysql_num_rows($data)>0) {
    while ($row = mysql_fetch_array($data)) {
        $id = $row['id'];
    }
    $sql = "SELECT * FROM ".$f['tipe']." WHERE idpemohon='".$id."'";
    //kode tampil di view
}
else {
    echo "data tidak ditemukan";
}  
?>
