<?php
include('db.php');

$Email = $Decode_React_APP_Data['Email'];
$Password = $Decode_React_APP_Data['Password']; 


$query = "SELECT * FROM admins WHERE Email = '$Email'";
$query_result = mysqli_query($connect_db, $query);


if (mysqli_num_rows($query_result)) {
$DB_Elements= mysqli_fetch_array($query_result);

    if ($DB_Elements['Password'] == $Password) {
        $Message = "Admin - Logged In Successfully";
    } else { 
		$Message = "Admin - Password is incorrect";
    }
} 
else 
{
    $Message = "User does not exist";
}

$response[] = array("Message" => $Message);

echo json_encode($response);

?>