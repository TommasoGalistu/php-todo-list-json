<?php

// prendo il file json e lo salvo come stringa
$stringaDati = file_get_contents('todo-list.json');
// transformo una stringa in un elemento php
$data = json_decode($stringaDati);

// logica per la ricezione js
if(isset($_POST['toDo'])){
    $toDoItem = $_POST['toDo'];

    $data[] = $toDoItem;

    file_put_contents('todo-list.json', json_encode($data));
}
// logica per eliminazione file
if(isset($_POST['eliminate'])){
    $eliminateItem = $_POST['eliminate'];

    array_splice($data, $eliminateItem, 1);

    file_put_contents('todo-list.json', json_encode($data));
}




// restituire il json che verrà letto da json_decode
header('Content-Type: application/json');
// stampa elemento php sotto forma di string
echo json_encode($data);

