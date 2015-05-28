// 
//  sendComment.js
//  InterActiveMap - Wroclaw
//  
//  Created by ISMAIL BULUC on 2015-05-28.
//  Copyright 2015 ISMAIL BULUC. All rights reserved.
// 

function sendComment(placeId,userId,commentValue) {
	var url="http://dragomen.com/interactivemap/savecomment.php";
	var xhr = Titanium.Network.createHTTPClient();

	var data = [];
	var params = {
		'userID':userId,
		'placeID':placeId,
		'commentValue':commentValue
	};
	xhr.onload = function() {};

	xhr.onerror = function(e) { alert('Network error '+e.error); };
	xhr.open('POST',url);
	xhr.send(params);
}