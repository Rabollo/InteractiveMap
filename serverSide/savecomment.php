<?php
	include 'dbloginfile.php';
	
	$userID = $_POST["userID"];
	$placeID = $_POST["placeID"];
	$commentValue = $_POST["commentValue"];
	

	 $insertQuery="INSERT INTO Comments(`place_id`, `user_id`, `comment`) 
				VALUES ('".$placeID."',
					'".$userID."',
					'".$commentValue."')";
					
		
	 $resul2 = mysqli_query($con,$insertQuery);//create a query for mysql=*/

	mysqli_close($con);
?>