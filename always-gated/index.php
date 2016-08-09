<?

require_once("lib.php");

if(!array_key_exists('id', $_GET)) {
  return;
}

$needs_redirect = !array_key_exists($_GET['id'], $_COOKIE);

$f = fopen('database.db', 'r');
if($f) {
  $found == false;
  while(($line = fgets($f)) !== false) {
    list($asset, $form, $id) = split('\|\|\|', trim($line), 3);
    if($id == $_GET['id']) { 
      $found = true;
      if($needs_redirect) { 
	header("Location: ".$form);
      } else {
	render_file($asset);
      }
      break;      
    }
  }
  fclose($f);



  if(!$found) {
    print 'Asset not found';

  }
}

?>