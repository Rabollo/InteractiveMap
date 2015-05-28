<?php
	include 'dbloginfile.php';
	
	$id = $_GET["id"];
			
	$requestQuery2 = "SELECT Users.facebook_id,Comments.comment,Comments.creation_date 
			FROM Comments 
			JOIN Users ON Comments.user_id = Users.u_id
			WHERE place_id =".$id;
		
	//$result = mysqli_query($con,$requestQuery);
	$result2 = mysqli_query($con,$requestQuery2);

	$rowsArray = array();

	while($row = mysqli_fetch_assoc($result2)) {
	    $rowsArray[] = $row;
	}
	
	print json_encode($rowsArray);
	

	mysqli_close($con);
?>