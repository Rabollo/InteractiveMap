<?php
	include 'dbloginfile.php';
	
	$tag = $_GET["tag"];
//$tag = "all";
	
	//$requestQuery ="SELECT * FROM Places WHERE tag LIKE '%". $tag."%' AND isOpen=1";
	$requestQuery = "SELECT COUNT( * ) AS NumberOfRaitings, Places.p_id, Places.p_name,Places.p_description, Places.tag, ROUND( SUM( Raitings.r_value ) / COUNT( * ) ,2) AS AvarageOfRatings,Pictures.p_link
			FROM  `Places` 
			INNER JOIN Raitings ON Places.p_id = Raitings.place_id
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