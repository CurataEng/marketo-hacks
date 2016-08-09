<?php 

function get_host() {
  $pageURL = 'http';
  ($_SERVER["SERVER_PORT"] === 443) ? $pageURL .= "s" : '';
  $pageURL .= "://";
  if ($_SERVER["SERVER_PORT"] != "80") {
    $pageURL .= $_SERVER["SERVER_NAME"].":".$_SERVER["SERVER_PORT"];
  } else {
    $pageURL .= $_SERVER["SERVER_NAME"];
  }
  return $pageURL;
}

function render_file($asset) {
  $asset_file = file_get_contents($asset, 'r');
  $finfo = new finfo(FILEINFO_MIME);
  
  header("Content-type: application/pdf");
  header('Content-Disposition: inline; filename="filename.pdf"');
  
  print $asset_file;
}

?>