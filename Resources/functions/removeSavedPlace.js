// 
//  removeSavedPlace.js
//  InterActiveMap - Wroclaw
//  
//  Created by ISMAIL BULUC on 2015-05-28.
//  Copyright 2015 ISMAIL BULUC. All rights reserved.
// 

function removeSavedPlace(placeId,userId) {
	var url="http://dragomen.com/interactivemap/removesavedplace.php";
	var xhr = Titanium.Network.createHTTPClient();

	var data = [];
	var params = {
		'userID':userId,
		'placeID':placeId,
	};
	xhr.onload = function() {alert("A place has been removed.");};

	xhr.onerror = function(e) { alert('Network error '+e.error); };
	xhr.open('POST',url);
	xhr.send(params);
}
