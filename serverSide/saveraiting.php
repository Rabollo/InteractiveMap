<?php
	include 'dbloginfile.php';
	
	$userID = $_POST["userID"];
	$placeID = $_POST["placeID"];
	$raitingValue = $_POST["raitingValue"];
	

	 $insertQuery="INSERT INTO `Raitings`(`place_id`, `user_id`, `r_value`) 
				VALUES ('".$placeID."',
					'".$userID."',
					'".$raitingValue."')";
		
	 $resul2 = mysqli_query($con,$insertQuery);//create a query for mysql=*/

	mysqli_close($con);
?>