// 
//  sendRating.js
//  InterActiveMap - Wroclaw
//  
//  Created by ISMAIL BULUC on 2015-05-27.
//  Copyright 2015 ISMAIL BULUC. All rights reserved.
// 

function sendRating(placeId,userId,raitingValue) {
	var url="http://dragomen.com/interactivemap/saveraiting.php";
	var xhr = Titanium.Network.createHTTPClient();

	var data = [];
	var params = {
		'userID':userId,
		'placeID':placeId,
		'raitingValue':raitingValue
	};
	xhr.onload = function() {};

	xhr.onerror = function(e) { alert('Network error '+e.error); };
	xhr.open('POST',url);
	xhr.send(params);
}