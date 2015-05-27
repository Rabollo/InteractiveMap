// 
//  createDetailsWindowLoadComments.js
//  InterActiveMap - Wroclaw
//  
//  Created by ISMAIL BULUC on 2015-05-28.
//  Copyright 2015 ISMAIL BULUC. All rights reserved.
// 

function createDetailsWindowLoadComments(searchID){
	var url="http://dragomen.com/interactivemap/sortplacecomments.php?id="+searchID;
	
	xhr.onload = function() {
		var json = JSON.parse(this.responseText);
		//Create table View
		var commentsTable = Ti.UI.createTableView({
				top:'240'
		});
		scrollViewDetailsWindow.add(commentsTable);
		
		var commentList=[];
		for(var z= 0; z < json.length; z++){
			var row2 = Ti.UI.createTableViewRow({selectedBackgroundColor:"White", height:60});	//liste icerisinde arama yapabilmek icin verilerin tableviewRow icinde yazdirilmis olmasi gerekir.	
				
				var userImage = Ti.UI.createImageView({
					image:"http://graph.facebook.com/"+json[z].facebook_id+"/picture/",
					top:5,left: "5%",
					height:'50', width:'50',
					borderRadius:3
				});
				
				var c_comment = Ti.UI.createLabel({
					text:json[z].comment,
					font: { fontSize:11 },
					left: "25%", right:"20%",
					top: "2%", color:'Black', 
					width:"70%", height:"70%"
				});

				var c_date = Ti.UI.createLabel({
					text:json[z].creation_date,
					font: { fontSize:7 },
					left: "25%", top: "70%",
					color:'Black', width:"auto", height:"auto"
				});
					
				row2.add(userImage);					
				row2.add(c_comment);
				row2.add(c_date);
				commentList.push(row2);
				commentsTable.data = commentList;
		}
		
	};
	xhr.onerror = function(e) { alert('Network error '+e.error); };
	xhr.open('GET',url);
	xhr.setRequestHeader("content-type", "application/json");
	xhr.send();
	
}