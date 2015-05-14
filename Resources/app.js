// 
//  app.js
//  InterActiveMap - Wroclaw
//  
//  Created by ISMAIL BULUC on 2015-05-06.
//  Copyright 2015 ISMAIL BULUC. All rights reserved.
// 


var MapModule = require('ti.map');
var xhr = Titanium.Network.createHTTPClient();
var IDArray = [];
Ti.include("functions.js");


 
var button = Titanium.UI.createButton({ title: 'Restaurant Details' });

// create tab group
var tabGroup = Titanium.UI.createTabGroup({ title: 'Main Page'});

// Leave a tip Windows
var leaveATip = Titanium.UI.createWindow({ backgroundColor: '#fff', title: 'Leave a Tip' });
var navWin = Ti.UI.iOS.createNavigationWindow({
  	modal:true,
	window: leaveATip
});

// Leave a tip Close button
var closeButton = Ti.UI.createButton({ systemButton: Ti.UI.iPhone.SystemButton.CANCEL });
leaveATip.setLeftNavButton(closeButton);
closeButton.addEventListener('click', function(e){ navWin.close(); });

// Leave a tip Save button
var saveButton = Ti.UI.createButton({
	systemButton: Ti.UI.iPhone.SystemButton.SAVE
});
leaveATip.setRightNavButton(saveButton);
saveButton.addEventListener('click', function(e){ navWin.close(); });


// Create windows
var details = Titanium.UI.createWindow({ backgroundColor: '#fff', title: 'Details' });  
 var scrollViewDetailsWindow = Ti.UI.createScrollView({
	backgroundColor:"White", height: '100%', width: '100%',
	showVerticalScrollIndicator: true, showHorizontalScrollIndicator: true,
});
details.add(scrollViewDetailsWindow);



 
var iAmLookingFor = Titanium.UI.createWindow({ backgroundColor: '#fff', title: 'I\'m looking for' });
var details2 = Titanium.UI.createWindow({ backgroundColor: 'red', title: 'Blue Window' });
var searchWindow = Titanium.UI.createWindow({ backgroundColor:'#fff', title: 'Search Window' });
var savedWindow = Titanium.UI.createWindow({ title:'Saved Places', backgroundColor:'#fff'});
var historyWindow = Titanium.UI.createWindow({ backgroundColor:'#fff', title: 'History Window' });
var meWindow = Titanium.UI.createWindow({ title:'Me Places', backgroundColor:'#fff' });

// Create Tabs
var tab1 = Titanium.UI.createTab({  
    icon:'img/1430944907_common_search_lookup_-16.png',
    title:'Search',
    window:searchWindow,
    backgroundColor:'blue',
});
var tab2 = Titanium.UI.createTab({  
    icon:'img/1430944985_Noun_Project_100Icon_10px_grid-38-16.png',
    title:'Saved',
    window:savedWindow,
    backgroundColor:'blue',
});
var tab3 = Titanium.UI.createTab({  
    icon:'img/1430945002_time-16.png',
    title:'History',
    window:historyWindow,
    backgroundColor:'blue',
});
var tab4 = Titanium.UI.createTab({  
    icon:'img/1430945019_hire-me.png',
    title:'Me',
    window:meWindow,
    backgroundColor:'blue'
});

// Add Tabs
tabGroup.addTab(tab1);  tabGroup.addTab(tab2); 
tabGroup.addTab(tab3);  tabGroup.addTab(tab4);  

// open tab group
tabGroup.open();
  
  
//Create Buttons
////////////////////////////////////////////////////////

var button2 = Titanium.UI.createButton({
    title: 'Restaurant Details'
});
button2.addEventListener('click', function(){
   tab2.open(details2, {animated:true});
});
savedWindow.add(button2);
////////////////////////////////////////////////////////

// Button Set
var buttonSet = Titanium.UI.createButtonBar({
    labels:[{title:'',image:'img/all.png'},// Restaurants
    		{title:'',image:'img/1430944524_Streamline-99-16.png'},// Restaurants
    		{title:'',image:'img/1430944547_food-drink_cup_coffee_tea_drink-16.png'},// Caffe
   			{title:'',image:'img/1430944540_food-drink_cocktail_wine_glass_outing_drink-16.png'},// bars
    		{title:'',image:'img/1430944645_Mask.png'},// fun 
    		{title:'',image:'img/1430944880_grid-dot.png'}],// All Buttons
    backgroundColor:'blue',
    top:0,
    height:43,
    width:"100%"
});
searchWindow.add(buttonSet);
buttonSet.addEventListener('click', function(e) {
		   if (e.index == 0){ loadList("all");
	} else if (e.index == 1){ loadList("lunch");
	} else if (e.index == 2){ loadList("coffee");
	} else if (e.index == 3){ loadList("bar");
	} else if (e.index == 4){ loadList("fun");
	} else if (e.index == 5){ tab1.open(iAmLookingFor, {animated:true}); createButtons(); }
});

//Create Search
var search = Titanium.UI.createSearchBar({
    barColor:'#fff', 
    showCancel:false,
    height:43,
    top:0,
    hintText: 'Search...'
});
searchWindow.add(search);

//Create table View
var table = Ti.UI.createTableView({
		top:'45',
		backgroundColor:'white',
 		search: search,
        hideSearchOnSelection: true
});

table.addEventListener('click',function(e){
	tab1.open(details, {animated:true},createDetailsWindowObjects(IDArray[e.index]));
});
searchWindow.add(table);

var searchButton = Titanium.UI.createButton({ // Change Image !!!
    image: 'img/1430944907_common_search_lookup_-16.png'
});
searchWindow.setRightNavButton(searchButton);
searchButton.addEventListener('click', function(){
   buttonSet.hide();
   search.show();
});
buttonSet.show();
search.hide();

var buttonSetButton = Titanium.UI.createButton({ // Change Image !!!
    image: 'img/1430944956_ui-buttons.png'
});
searchWindow.setLeftNavButton(buttonSetButton);
buttonSetButton.addEventListener('click', function(){
   buttonSet.show();
   search.hide();
});

loadList("all");
