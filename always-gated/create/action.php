<?
$asset = $_POST['asset'];
$form = $_POST['form'];

$f = fopen("../database.db", "a");
$id = md5($asset.$form);
fwrite($f, $asset."|||".$form."|||".$id."\n");
fclose($f);

$link = "http://assets.curata.me/?id=".$id;

?>
<a href="<? print $link; ?>"><? print $link; ?></a>