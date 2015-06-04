// 
//  createDetailsWindowObjects.js
//  InterActiveMap - Wroclaw
//  
//  Created by ISMAIL BULUC on 2015-05-27.
//  Copyright 2015 ISMAIL BULUC. All rights reserved.
// 


var annotationL = [];
var detailsWindowButtonSet;function createDetailsWindowObjects(searchID){
		
	var id = searchID;
	placeID=searchID;
	//  rss feed url	
	var url="http://dragomen.com/interactivemap/sortdatadetails.php?id="+id;
	var data = [];
	
	xhr.onload = function() {
		var json = JSON.parse(this.responseText);

		var imageLinks = [];
		
		imageLinks[0] = "KS_nav_ui.png";
		imageLinks[1] = "KS_nav_ui.png";
		imageLinks[2] = "KS_nav_ui.png";
		
		for(var c= 0; c < json.length; c++){ imageLinks[c] =json[c].p_link; }

		var color = "white";
		var borderScolor=  "white";
		var imageView1 = Titanium.UI.createImageView({
			backgroundColor: color,
			height: 100, width: 105,
			top: 0, left: 0,
			borderColor:borderScolor, image:imageLinks[0]
		});
		var imageView2 = Titanium.UI.createImageView({
			backgroundColor: color,
			height: 100, width: 110,
			top: 0, left: 105,
			borderColor:borderScolor, image:imageLinks[1]
		});
		var imageView3 = Titanium.UI.createImageView({
			backgroundColor: color,
			height: 100, width: 105,
			top: 0, left: 215,
			borderColor:borderScolor, image:imageLinks[2]
		});

		scrollViewDetailsWindow.add(imageView1);
		scrollViewDetailsWindow.add(imageView2);
		scrollViewDetailsWindow.add(imageView3);
		
		// Button Set
	 	detailsWindowButtonSet = Titanium.UI.createButtonBar({
			labels:[{title:'Rate'},
					{title:'Leave a Tip'},
					{title:'Save'}],
			backgroundColor:'blue',
			top:100,
			height:40,
			width:"100%"
		});
		scrollViewDetailsWindow.add(detailsWindowButtonSet);
		detailsWindowButtonSet.addEventListener('click',function(e){
			if(e.index == 0){
				createRatingButtons();
			}else if (e.index == 1){// Leave a tip
				// Leave a tip Close button
				var closeButton = Ti.UI.createButton({ systemButton: Ti.UI.iPhone.SystemButton.CANCEL });
				leaveATip.setLeftNavButton(closeButton);
				closeButton.addEventListener('click', function(e){ navWin.close(); });

				// Leave a tip Save button
				var saveButton = Ti.UI.createButton({
					//ssystemButton: Ti.UI.iPhone.SystemButton.SAVE,
				    title:"Post",
				    marginRight:"10"
				});
				leaveATip.setRightNavButton(saveButton);
				saveButton.addEventListener('click', function(e){ 
				    if(commentBox.value == ""){
				        alert("You con not send empty comment.");
				    }else{
				        //alert(commentBox.value + " UID: " + userID + " PID: " +placeID);
				        sendComment(placeID,userID,commentBox.value);
				        navWin.close();
				        createDetailsWindowLoadComments(id);
				    }
				});
				var commentBoxLabel  = Titanium.UI.createLabel({
					font:{fontSize:18},color:"blue",
					text:"What's good here?",
					height:"10%",width:"100%",
					top:"0",left:"5"
				});
				leaveATip.add(commentBoxLabel);

				var commentBox  = Titanium.UI.createTextArea({
					font:{fontSize:24},
					height:"30%",width:"100%",
					top:"9%"
				});
				leaveATip.add(commentBox);
				
				commentBox.addEventListener("click", function(e) {
					commentBox.focus();
				});
				navWin.addEventListener("open", function(e) {
					commentBox.focus();
				});

				navWin.open({
						modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL,
						modalStyle: Ti.UI.iPhone.MODAL_PRESENTATION_PAGESHEET
				});
			} else if (e.index == 2){// Save
				saveplace(placeID,userID);
			}
		});
					
		var mapview = MapModule.createView({
			height:130,	top:140,
			mapType: MapModule.NORMAL_TYPE,
			userLocation:true,visible: true,
			latitudeDelta: 0.05, longitudeDelta: 0.05
		});
		scrollViewDetailsWindow.add(mapview);
		
		annotationL[json[0].p_id] = MapModule.createAnnotation({
			latitude:json[0].p_lat,longitude:json[0].p_long,
			title : json[0].p_name,
			subtitle: json[0].p_description,
			//rightButton: Titanium.UI.iPhone.SystemButton.INFO_LIGHT,
			myid :json[0].p_id
		});
		mapview.setLocation({latitude:json[0].p_lat,longitude:json[0].p_long, animate:true,latitudeDelta:0.01, longitudeDelta:0.01});
		mapview.addAnnotation(annotationL[json[0].p_id]);
		
		createDetailsWindowLoadComments(id);
	};
	xhr.onerror = function(e) { alert('Network error '+e.error); };
	xhr.open('GET',url);
	xhr.setRequestHeader("content-type", "application/json");
	xhr.send();
}





