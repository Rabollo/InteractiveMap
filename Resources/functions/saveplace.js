// 
//  saveplace.js
//  InterActiveMap - Wroclaw
//  
//  Created by ISMAIL BULUC on 2015-05-28.
//  Copyright 2015 ISMAIL BULUC. All rights reserved.
// 



function saveplace(placeId,userId) {
	var url="http://dragomen.com/interactivemap/saveplace.php";
	var xhr = Titanium.Network.createHTTPClient();

	var data = [];
	var params = {
		'userID':userId,
		'placeID':placeId
	};
	xhr.onload = function() {				
		alert("The place has been saved on your list.");
	};

	xhr.onerror = function(e) { alert('Network error '+e.error); };
	xhr.open('POST',url);
	xhr.send(params);
}
