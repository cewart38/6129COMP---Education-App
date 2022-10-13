<?php

$host = 'localhost';
$username = 'root';
$password = '';
$db_name = '';

    $connect_db = mysqli_connect($host, $username, $password, $db_name);	// connection to database

    $React_APP_Data = file_get_contents('php://input'); 		// reads a file into a string 
    $Decode_React_APP_Data = json_decode($React_APP_Data , true);	// takes input from user which is JSON encoded string and converts it into a php variable

    if (!$connect_db) {
        echo json_encode ("Connection to Database Failed.");
    }

?>