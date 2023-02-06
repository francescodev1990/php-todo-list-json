<?php

//recupero
$string = file_get_contents('todo-list.json');
var_dump($string);

//converto
$todo_list = json_decode($string, true);
var_dump($todo_list);
