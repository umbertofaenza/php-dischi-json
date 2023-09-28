<?php

// Prendo il contenuto di dischi.json (sottoforma di stringa)
$dischi_json = file_get_contents("./data/dischi.json");

// Lo decodifico (diventa un array)
$dischi = json_decode($dischi_json);

// Lo codifico per essere letto da JS
header("Content-Type: application/json");
echo json_encode($dischi);