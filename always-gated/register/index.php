<?
require_once("../lib.php");

if(!array_key_exists('id', $_GET)) {
  print 'Id not found';
  return;
}

setcookie($_GET['id'], "1", strtotime('+90 days'), "/");
$host = get_host();

?>