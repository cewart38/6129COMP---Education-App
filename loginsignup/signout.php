<?php

    session_start();

	session_destroy(); 

	header("Location: signin.php");

	$Message = "You have successfully logged out";

	$response[] = array("Message" => $Message);

	echo json_encode($response);

?>