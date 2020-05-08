<?php

  header('Content-Type: application/json');
  // collego il file php contenente i dati dei film
  require_once "db.php";

  echo json_encode($db);

 ?>
