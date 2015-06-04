// 
//  loadList.js
//  InterActiveMap - Wroclaw
//  
//  Created by ISMAIL BULUC on 2015-05-27.
//  Copyright 2015 ISMAIL BULUC. All rights reserved.
// 


function loadMap(searchTag){

	var dd = searchTag;
	//  rss feed url	
	var url="http://dragomen.com/interactivemap/loadmap.php?tag="+dd;
	var data = [];
	
	xhr.onload = function() {
	  var json = JSON.parse(this.responseText);
		// begin looping
		for (var x=0;x<json.length;x++) {
			
			annotationL[json[x].p_id] = MapModule.createAnnotation({
				latitude:json[x].p_lat,longitude:json[x].p_long,
				title : json[x].p_name,
				subtitle: json[x].p_description,
				leftButton: Titanium.UI.iPhone.SystemButton.INFO_LIGHT,
				myid :json[x].p_id,
				//image: json[x].p_link
			});
			
			MainMapView.setLocation({latitude:json[x].p_lat,
				longitude:json[x].p_long, 
				animate:true,
				latitudeDelta:0.01, 
				longitudeDelta:0.01}
				);
			MainMapView.addAnnotation(annotationL[json[x].p_id]);
			
			
		}		
	 };
	
	
	 xhr.onerror = function(e) { alert('Network error '+e.error); };
	 
	 xhr.open('GET',url);
	 xhr.setRequestHeader("content-type", "application/json");
	 xhr.send();
	
}