// 
//  functions.js
//  InterActiveMap - Wroclaw
//  
//  Created by ISMAIL BULUC on 2015-05-11.
//  Copyright 2015 ISMAIL BULUC. All rights reserved.
// 

var annotationL = [];
var placeID;
var userID= 1;

function loadList(searchTag){
	
	var dd = searchTag;
//  rss feed url	
var url="http://dragomen.com/interactivemap/sortdata.php?tag="+dd; 
var data = [];

xhr.onload = function() {
	
   	var json = JSON.parse(this.responseText);

	// begin looping
	for (var x=0;x<json.length;x++) {
		
		var row = Ti.UI.createTableViewRow({selectedBackgroundColor:"White", title:json[x].tag, height:80});	//liste icerisinde arama yapabilmek icin verilerin tableviewRow icinde yazdirilmis olmasi gerekir.	
		
		table.title =json[x].p_id;
		
		var block = Ti.UI.createLabel({ 
			width:"100%", height:"100%",
			backgroundColor:"white"
		});
		var image = Ti.UI.createImageView({
			image:json[x].p_link,
			top:10,left: "5%",
			height:'70', width:'70'
		});
		var companyName = Ti.UI.createLabel({
			text:json[x].p_name,
			font: { fontSize:14, fontWeight: 'bold', },
			left: "30%",top: "10%",
			color:'blue'
		});
		var companyTags = Ti.UI.createLabel({
			text:json[x].p_description,
			font: { fontSize:12 },
			left: "30%", top: "43%",
			color:'Gray', width:"55%", height:"40%",
			// backgroundColor:"red"
		});
		var companyCity = Ti.UI.createLabel({
			text:"Wroclaw",
			font: { fontSize:12 },
			left: "30%",bottom: "10%",
			color:'Gray'
		});
		var companyRating = Ti.UI.createLabel({
			text:" "+json[x].AvarageOfRatings+ " ",
			font: { fontSize:14 },
			right: "5%",top: "40%", bottom: "10%",
			width:"auto", height:"auto",
			color:'white', backgroundColor:"green"
		});
		
		row.add(block);
		row.add(companyName);
		row.add(companyTags);
		//row.add(companyCity);
		row.add(companyRating);
		row.add(image);
				
		data.push(row); 
		IDArray.push(json[x].p_id);
	 }
	 table.data = data;
 };


 xhr.onerror = function(e) { alert('Network error '+e.error); };
 
 xhr.open('GET',url);
 xhr.setRequestHeader("content-type", "application/json");
 xhr.send();
}

function createButtons () {
	
	var color = "white";
	var borderScolor=  "blue";
				
	var buttonSetButton1 = Titanium.UI.createButton({ 
	    backgroundColor: color,
	    height: 100, width: 100,
	    top: 5, left: 5, title: " Breakfast",
	    borderColor:borderScolor, image:"img/1430966129_cheese.png"
	});
	var buttonSetButton2 = Titanium.UI.createButton({ 
	    backgroundColor: color,
	    height: 100, width: 100,
	    top: 5, left: 110, title: " Lunch",
	    borderColor:borderScolor, image:"img/1430944524_Streamline-99-16.png"
	}); 			
	var buttonSetButton3 = Titanium.UI.createButton({ 
	    backgroundColor: color,
	    height: 100, width: 100,
	    top: 5, left: 215, title: " Dinner",
	    borderColor:borderScolor, image:"img/1430965660_plate-cutlery.png"
	}); 			
	var buttonSetButton4 = Titanium.UI.createButton({ 
	    backgroundColor: color,
	    height: 100, width: 100,
	    top: 110, left: 5, title: " Dessert",
	    borderColor:borderScolor, image:"img/1430966014_food_birthday-cake_party_candle-16.png"
	}); 			
	var buttonSetButton5 = Titanium.UI.createButton({ 
	    backgroundColor: color,
	    height: 100, width: 100,
	    top: 110, left: 110, title: " Coffee",
	    borderColor:borderScolor, image:"img/1430944547_food-drink_cup_coffee_tea_drink-16.png"
	}); 			
	var buttonSetButton6 = Titanium.UI.createButton({ 
	    backgroundColor: color,
	    height: 100, width: 100,
	    top: 110, left: 215, title: " Night Life",
	    borderColor:borderScolor,image:"img/1430944540_food-drink_cocktail_wine_glass_outing_drink-16.png"
	}); 			
	var buttonSetButton7 = Titanium.UI.createButton({ 
	    backgroundColor: color,
	    height: 100, width: 100,
	    top: 215, left: 5, title: " Fun",
	    borderColor:borderScolor, image: "img/1430944645_Mask.png"
	}); 			
	var buttonSetButton8 = Titanium.UI.createButton({ 
	    backgroundColor: color,
	    height: 100, width: 100,
	    top: 215, left: 110, title: " Shopping",
	    borderColor:borderScolor, image: "img/1430966201_shopping-cart-16.png"
	}); 			
	var buttonSetButton9 = Titanium.UI.createButton({ 
	    backgroundColor: color,
	    height: 100, width: 100,
	    top: 215, left: 215, title: " Specials",
	    borderColor:borderScolor, image: "img/1430966221_special-offer.png"
	}); 			
	 			
	iAmLookingFor.add(buttonSetButton1);
	iAmLookingFor.add(buttonSetButton2);
	iAmLookingFor.add(buttonSetButton3);
	iAmLookingFor.add(buttonSetButton4);
	iAmLookingFor.add(buttonSetButton5);
	iAmLookingFor.add(buttonSetButton6);
	iAmLookingFor.add(buttonSetButton7);
	iAmLookingFor.add(buttonSetButton8);
	iAmLookingFor.add(buttonSetButton9); 
	
	buttonSetButton1.addEventListener('click',function(e){ loadList("breakfast");iAmLookingFor.close();});
	buttonSetButton2.addEventListener('click',function(e){ loadList("lunch");iAmLookingFor.close();});
	buttonSetButton3.addEventListener('click',function(e){ loadList("dinner");iAmLookingFor.close();});
	buttonSetButton4.addEventListener('click',function(e){ loadList("dessert");iAmLookingFor.close();});
	buttonSetButton5.addEventListener('click',function(e){ loadList("coffee");iAmLookingFor.close();});
	buttonSetButton6.addEventListener('click',function(e){ loadList("nightlife");iAmLookingFor.close();});
	buttonSetButton7.addEventListener('click',function(e){ loadList("fun");iAmLookingFor.close();});
	buttonSetButton8.addEventListener('click',function(e){ loadList("shopping");iAmLookingFor.close();});
	buttonSetButton9.addEventListener('click',function(e){ loadList("special");iAmLookingFor.close();});


}

function createDetailsWindowObjects(searchID){
		
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
		var detailsWindowButtonSet = Titanium.UI.createButtonBar({
		    labels:[{title:'Rate'},	    		
		    		{title:'Leave a Tip'}, 
		    		{title:'Save'}],
		    backgroundColor:'blue',
		    top:100,
		    height:40,
		    width:"100%"
		});
		scrollViewDetailsWindow.add(detailsWindowButtonSet);
		detailsWindowButtonSet.addEventListener('click', function(e) {
			if (e.index == 0){// Rate
				createRatingButtons();
			} else if (e.index == 1){// Leave a tip
				//scrollViewDetailsWindow.remove(detailsWindowRaitingButtonSet);
				//details.open(leaveATip, {animated:true});
				navWin.open({
					modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL,
					modalStyle: Ti.UI.iPhone.MODAL_PRESENTATION_PAGESHEET
				});
			} else if (e.index == 2){// Save
				//scrollViewDetailsWindow.remove(detailsWindowRaitingButtonSet);
				alert("clicked rate button");
			}
			
		});
					
		var mapview = MapModule.createView({
			height:130,
			top:140,
			mapType: MapModule.NORMAL_TYPE,
			userLocation:true,
		    visible: true, 
		    latitudeDelta: 0.05, longitudeDelta: 0.05
		
		});
		scrollViewDetailsWindow.add(mapview);
		
		annotationL[json[0].p_id] = MapModule.createAnnotation({
											latitude:json[0].p_lat,longitude:json[0].p_long, 
											title : json[0].p_name,
											subtitle: json[0].p_description,
											rightButton: Titanium.UI.iPhone.SystemButton.INFO_LIGHT,    
											myid :json[0].p_id
										});
		mapview.setLocation({latitude:json[0].p_lat,longitude:json[0].p_long,
							animate:true,latitudeDelta:0.01, longitudeDelta:0.01});
	 	
		mapview.addAnnotation(annotationL[json[0].p_id]);
		
		//Create table View
		var commentsTable = Ti.UI.createTableView({
				top:'280',
				backgroundColor:'white',
		 		search: search,
		        hideSearchOnSelection: true,
		        
		});
		scrollViewDetailsWindow.add(commentsTable);
		//commentsTable.addEventListener('click',function(e){});
		
		var commentList=[];
		for(var z= 0; z < json.length; z++){ 
			var row2 = Ti.UI.createTableViewRow({selectedBackgroundColor:"White", height:60});	//liste icerisinde arama yapabilmek icin verilerin tableviewRow icinde yazdirilmis olmasi gerekir.	
			
			if(json[z].comment!=null){
				
				var companyTags = Ti.UI.createLabel({
					text:json[z].comment,
					font: { fontSize:16 },
					left: "30%", top: "43%",
					color:'Black',
					height:"auto",width:"auto"
				});
				
				row2.add(companyTags);
				commentList.push(row2); 
				commentsTable.data = commentList;
			}
		}
	 };
	
	 xhr.onerror = function(e) { alert('Network error '+e.error); }; 
	 xhr.open('GET',url);
	 xhr.setRequestHeader("content-type", "application/json");
	 xhr.send();
}

function createRatingButtons(){
	
		var detailsWindowRaitingButtonSet = Titanium.UI.createButtonBar({
		    labels:[{title:'Very Bad',image:"img/unlike.png"},	    		
		    		{title:'So-So',image:"img/so_so.png"}, 
		    		{title:'Loved it!',image:"img/like.png"}],
		    backgroundColor:'Red',
		    top:280,
		    height:40,
		    width:"100%"
		});
		scrollViewDetailsWindow.add(detailsWindowRaitingButtonSet);
		detailsWindowRaitingButtonSet.addEventListener('click', function(e) {
			if (e.index == 0){// Rate
				scrollViewDetailsWindow.remove(detailsWindowRaitingButtonSet);
				sendRating(placeID,userID,2);
				alert("clicked rate button");
			} else if (e.index == 1){// Leave a tip
				scrollViewDetailsWindow.remove(detailsWindowRaitingButtonSet);
				sendRating(placeID,userID,5);
				alert("clicked rate button");
			} else if (e.index == 2){// Save
				scrollViewDetailsWindow.remove(detailsWindowRaitingButtonSet);
				sendRating(placeID,userID,10);
				alert("clicked rate button");
			}
		});
	
}

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