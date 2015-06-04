<?php
	include 'dbloginfile.php';
	
	$tag = $_GET["tag"];
//$tag = "all";
	
	//$requestQuery ="SELECT * FROM Places WHERE tag LIKE '%". $tag."%' AND isOpen=1";
	$requestQuery = "SELECT  Places.p_id,Places.p_name, Places.p_description, Places.p_lat, Places.p_long, Pictures.p_link
			FROM  Places
			INNER JOIN Pictures ON Places.p_id = Pictures.place_id
			WHERE Places.isOpen = 1 AND Places.tag LIKE '%". $tag."%'
			GROUP BY Places.p_id";

	$result = mysqli_query($con,$requestQuery);

	$rowsArray = array();
	while($row = mysqli_fetch_assoc($result)) {
	    $rowsArray[] = $row;
	}
	print json_encode($rowsArray);

	mysqli_close($con);
?>