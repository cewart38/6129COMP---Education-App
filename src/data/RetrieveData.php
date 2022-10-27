<?php

include('db.php');
    //bind to $name
    if ($stmt = $mysqli->prepare("SELECT object_name FROM object")) {
        $stmt->bind_result($name);
        $OK = $stmt->execute();
    }
    //put all of the resulting names into a PHP array
    $result_array = Array();
    while($stmt->fetch()) {
        $result_array[] = $name;
    }
    //convert the PHP array into JSON format, so it works with javascript
    $json_array = json_encode($result_array);
?>

<script>
    //now put it into the javascript
    var arrayObjects = <?php echo $json_array; ?>
</script>