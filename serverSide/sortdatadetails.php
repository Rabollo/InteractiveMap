<?php
	include 'dbloginfile.php';
	
	$id = $_GET["id"];
//$tag = "all";
	
	//$requestQuery ="SELECT * FROM Places WHERE tag LIKE '%". $tag."%' AND isOpen=1";
	
	
	$requestQuery = "SELECT Places.p_name,Places.p_description, Pictures.p_id, Pictures.p_link, Places.p_lat, Places.p_long FROM Pictures 
			INNER JOIN Places ON Pictures.place_id = Places.p_id
			WHERE place_id =".$id;
			
	//$requestQuery = "SELECT p_link FROM Pictures WHERE place_id =".$id;
			
	$requestQuery2 = "SELECT comment,creation_date FROM Comments WHERE place_id =".$id;
	
	

	$result = mysqli_query($con,$requestQuery);
	$result2 = mysqli_query($con,$requestQuery2);

	

	$rowsArray = array();
	while($row = mysqli_fetch_assoc($result)) {
	    $rowsArray[] = $row;
	}
	while($row = mysqli_fetch_assoc($result2)) {
	    $rowsArray[] = $row;
	}
	
	print json_encode($rowsArray);
	

	mysqli_close($con);
?>