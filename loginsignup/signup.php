<?php

include('db.php');

$First_Name = $Decode_React_APP_Data['First_Name'];
$Last_Name = $Decode_React_APP_Data['Last_Name'];
$Email = $Decode_React_APP_Data['Email'];
$Password = ($Decode_React_APP_Data['Password']); 

$query = "SELECT * FROM users WHERE Email = '$Email'";
$query_result = mysqli_query($connect_db, $query);

if (!mysqli_num_rows($query_result)) {
    $Reg_Query = "INSERT INTO users (`First_Name`, `Last_Name`, `Email`, `Password`) VALUES ('$First_Name', '$Last_Name', '$Email', '$Password')";
    $Reg_Query_Result = mysqli_query($connect_db, $Reg_Query);

    if ($Reg_Query_Result) {
        $Message = "Registered Successfully!";
    } else {
        $Message = "Error, please try again.";
    }

} else {
    $Message = "User already registered!";
}

$response[] = array("Message" => $Message);

echo json_encode($response);
?>