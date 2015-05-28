// 
//  loadSavedPlaces.js
//  InterActiveMap - Wroclaw
//  
//  Created by ISMAIL BULUC on 2015-05-28.
//  Copyright 2015 ISMAIL BULUC. All rights reserved.
// 
function loadSavedPlacesList(USERID){
	
	IDArray2.length=0; // reset the array
	var dd = USERID;
	//  rss feed url	
	var url="http://dragomen.com/interactivemap/loadsavedplaces.php?userid="+dd;
	var dataforsavedWindow = [];
	
	xhr.onload = function() {
	  var json = JSON.parse(this.responseText);
		// begin looping
		for (var x=0;x<json.length;x++) {
			
			var row99 = Ti.UI.createTableViewRow({selectedBackgroundColor:"White", /*title:json[x].tag + " " + json[x].p_name,*/ height:80}); //liste icerisinde arama yapabilmek icin verilerin tableviewRow icinde yazdirilmis olmasi gerekir.	
			
			savedWindowTable.title =json[x].p_id;
			
			var block = Ti.UI.createLabel({
				width:"100%", height:"100%",
				backgroundColor:"white"
			});
			var image = Ti.UI.createImageView({
				image:json[x].p_link,
				top:5,left: "5%",
				height:'70', width:'70',
				borderRadius:3
			});
			var companyName = Ti.UI.createLabel({
				text:json[x].p_name,
				font: { fontSize:14, fontWeight: 'bold', },
				left: "30%",top: "10%",
				color:'blue'
			});
			var companyDescription = Ti.UI.createLabel({
				text:json[x].p_description,
				font: { fontSize:12 },
				left: "30%", top: "43%",
				color:'Gray', width:"55%", height:"40%",
				// backgroundColor:"red"
			});
			var companyRating = Ti.UI.createLabel({
				text:" "+json[x].AvarageOfRatings+ " ",
				font: { fontSize:14 },
				right: "5%",top: "40%", bottom: "10%",
				width:"auto", height:"auto",
				color:'white', backgroundColor:"#FF6600",
				borderRadius:5
			});
	
			row99.add(block);
			row99.add(companyName);
			row99.add(companyDescription);
			row99.add(companyRating);
			row99.add(image);
			dataforsavedWindow.push(row99);
			IDArray2.push(json[x].p_id);
		}
		savedWindowTable.data = dataforsavedWindow;
	 };
	
	
	 xhr.onerror = function(e) { alert('Network error '+e.error); };
	 
	 xhr.open('GET',url);
	 xhr.setRequestHeader("content-type", "application/json");
	 xhr.send();
}