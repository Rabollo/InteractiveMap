<?php
	include 'dbloginfile.php';
	
	$userID = $_POST["userID"];
	$placeID = $_POST["placeID"];

	 $insertQuery="INSERT INTO SavedPlaces(`place_id`, `user_id`) 
				VALUES ('".$placeID."',
					'".$userID."')";
					
		
	 $resul2 = mysqli_query($con,$insertQuery);//create a query for mysql=*/

	mysqli_close($con);
?>