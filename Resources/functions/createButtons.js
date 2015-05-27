// 
//  createButtons.js
//  InterActiveMap - Wroclaw
//  
//  Created by ISMAIL BULUC on 2015-05-27.
//  Copyright 2015 ISMAIL BULUC. All rights reserved.
// 


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
