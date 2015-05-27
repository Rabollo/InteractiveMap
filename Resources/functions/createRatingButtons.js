// 
//  createRatingButtons.js
//  InterActiveMap - Wroclaw
//  
//  Created by ISMAIL BULUC on 2015-05-27.
//  Copyright 2015 ISMAIL BULUC. All rights reserved.
// 


function createRatingButtons(){
		var detailsWindowRaitingButtonSet = Titanium.UI.createButtonBar({
			labels:[{title:'Very Bad',image:"img/unlike.png"},
					{title:'So-So',image:"img/so_so.png"},
					{title:'Loved it!',image:"img/like.png"}],
			backgroundColor:'blue',
			top:141,
			height:40,
			width:"100%"
		});
		scrollViewDetailsWindow.add(detailsWindowRaitingButtonSet);
		detailsWindowRaitingButtonSet.addEventListener('click',function(e){
			if (e.index == 0){
				sendRating(placeID,userID,2);
				detailsWindowButtonSet.show();
			} else if (e.index == 1){
				sendRating(placeID,userID,5);
				detailsWindowButtonSet.show();
			} else if (e.index == 2){
				sendRating(placeID,userID,9);	
				detailsWindowButtonSet.show();			
			}
			scrollViewDetailsWindow.remove(detailsWindowRaitingButtonSet);
		});
}
