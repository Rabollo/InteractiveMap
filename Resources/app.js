// 
//  app.js
//  InterActiveMap - Wroclaw
//  
//  Created by ISMAIL BULUC on 2015-06-04.
//  Copyright 2015 ISMAIL BULUC. All rights reserved.
// 
var userID= 7;


Ti.Facebook=Titanium.Facebook = require('facebook');
Ti.Facebook.appid = 286782951506908;
Ti.Facebook.permissions = ['publish_actions']; // Permissions your app needs
Ti.Facebook.forceDialogAuth = true;

var loginWindow = Titanium.UI.createWindow({ title:'Me Places', backgroundColor:'#fff' });
	
	// Create an ImageView.
	var logo = Ti.UI.createImageView({
		image : '1433471658_maps.png',
		width : 100,
		height : 100,
		top : 140,
		left : 110
	});
	loginWindow.add(logo);
	
   var facebookLoginButton = Titanium.Facebook.createLoginButton({ 
		top: 280,
		left: 80,
	    height: 80,
		width: 200, 
		style: Ti.Facebook.BUTTON_STYLE_WIDE  
	});
	loginWindow.add(facebookLoginButton);
	loginWindow.open();

Titanium.Facebook.addEventListener('login', function(e) {
    if (e.success) {
		Titanium.Facebook.requestWithGraphPath('me', {}, 'GET', function(e) {
	     if (e.success) {
			     	USER_LOGGED_IN = true;
			        var jsonObject  = JSON.parse(e.result);
			        //alert("Info " + e.result);
			       // alert(jsonObject.id);
			        //alert(jsonObject.birthday);
			        //alert(jsonObject.email);
			        
			       // userID = jsonObject.id; //Set User ID
			        
			      	//alert(jsonObject.birthday);
			       	// alert(jsonObject.email);
		      		//alert(jsonObject.name);

					//loginWindow.remove(facebookLoginButton);
					
					Ti.include("startApp.js");
					loginWindow.close();

			    } else if (e.error) {
			        alert(e.error);
			    } else {
			        alert('Unknown response');			       			       
			    }
			});
			//loginWindow.remove(facebookLoginButton);

    }
});

Titanium.Facebook.addEventListener('logout', function(e) {
    //alert('Logged out');
	loginWindow.open();
});


