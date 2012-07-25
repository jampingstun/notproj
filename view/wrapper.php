<?php
include 'view/menu.php';
//  echo      '<div class="span9">';
$op = $_GET['op'];
$oo = $_GET['oo'];
$fileinc = strtolower($op).'.php';
if (file_exists('view/'.$fileinc)) {
        include 'view/'.$op.'.php';
} else {
    echo "error";
}

//       echo '</div>
//    </div>
//</div>';


?>
