<?php

// prendo il file json e lo salvo come stringa
$stringaDati = file_get_contents('todo-list.json');
// transformo una stringa in un elemento php
$data = json_decode($stringaDati);

// logica per la ricezione js





// restituire il json che verrà letto da json_decode
header('Content-Type: application/json');
// stampa elemento php sotto forma di string
echo json_encode($data);

