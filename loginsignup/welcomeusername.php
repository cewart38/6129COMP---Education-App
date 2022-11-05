<?php
include('db.php');

$FirstName = $Decode_React_APP_Data['First_Name'];
//$Password = $Decode_React_APP_Data['Password']; 


$query = "SELECT * FROM users WHERE First_Name = '$FirstName'";
$result = mysqli_query($connect_db, $query);

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_array($result, MYSQLI_NUM)) {    
        echo "<br>";
        echo "<h2><center>Hi $row[1] welcome to your dashboard! <br /></p>";
    }
}






if (mysqli_num_rows($query_result)) {
$DB_Elements= mysqli_fetch_array($query_result);

    if ($DB_Elements['Password'] == $Password) {
        $Message = "Logged In Successfully";
    } else { 
		$Message = "Password is wrong";
    }
} 
else 
{
    $Message = "User does not exist";
}

$response[] = array("Message" => $Message);

echo json_encode($response);

?>