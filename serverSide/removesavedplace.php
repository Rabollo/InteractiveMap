<?php
	include 'dbloginfile.php';
	
	$userID = $_POST["userID"];
	$placeID = $_POST["placeID"];

	 $insertQuery="DELETE FROM SavedPlaces WHERE place_id = ". $placeID ." AND user_id = ".$userID;
					
		
	 $resul2 = mysqli_query($con,$insertQuery);//create a query for mysql=*/

	mysqli_close($con);
?> 