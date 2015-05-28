<?php
	include 'dbloginfile.php';
	
	$userID=$_POST["facebook_id"];
	$userEMAIL=$_POST["u_email"];
	
	$requestQuery ="SELECT * FROM Users WHERE facebook_id =".$userID;

	$result = mysqli_query($con,$requestQuery);

	$row = mysqli_fetch_array($result);
	echo $row[facebook_id];
	

	if($row[facebook_id]===$userID && $row[isActive]==1){
	}else if($row[facebook_id]===$userID && $row[isActive]==0){
	}else if($row[facebook_id]===NULL){ // If user is not regestered at all.
	 $insertQuery="INSERT INTO Users(`facebook_id`, 
					`u_email`
					) 
				VALUES ('".$userID."',
					'".$userEMAIL."')";
		
	 $resul2 = mysqli_query($con,$insertQuery);//create a query for mysql=*/
	}
	

	mysqli_close($con);
?>