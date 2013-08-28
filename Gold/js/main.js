

$('#home').on('pageinit', function(){

});	
		
$('#form').on('pageinit', function(){

		var myForm = $('#recordform');
		    myForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);
		}
	});

		function ge(x){
			var element = document.getElementById(x);
			return element;
		};	


	//any other code needed for addItem page goes here
	
});

		function getType() {
			var typeKind = $("#recordform")[0].type;
			for(var i=0; i < typeKind.length; i++){
				if(typeKind[i].checked) {
					typeValue = typeKind[i].value;
				}
			}		
		};

		function getArchetype() {
			var archetypeKind = $("#recordform")[0].archetype;
			for(var i=0; i < archetypeKind.length; i++){
				if(archetypeKind[i].checked) {
					archetypeValue = archetypeKind[i].value;
				}
			}		
		};

		
//  *************TESTING.  NON FUNCTIONAL**************
		// function pullData () {
		// 	if(localStorage.length === 0){
		// 		alert("There are currently no items in your stash, so some items have been loaded for you.");
		// 		fillData ();
		// 	}
		// 	toggle("on");
		// 	var displayDiv = document.createElement("div");
		// 	displayDiv.setAttribute("id", "object");
		// 	var createList = document.createElement("ul");
		// 	displayDiv.appendChild(createList);
		// 	document.body.appendChild(displayDiv);
		// 	ge("object").style.display = "block";
		// 	for(var i=0, j=localStorage.length; i<j; i++){
		// 		var createLi = document.createElement("li");
		// 		var linkLi = document.createElement("li");
		// 		createList.appendChild(createLi);
		// 		var storageKey = localStorage.key(i);
		// 		var storageValue = localStorage.getItem(storageKey);
		// 		var listObject = JSON.parse(storageValue);
		// 		var createSubList = document.createElement("ul");
		// 		createLi.appendChild(createSubList);
		// 		pullImage(listObject.archetype[1], createSubList);		
		// 		for(var n in listObject){
		// 			var createSubLi = document.createElement("li");
		// 			createSubList.appendChild(createSubLi);
		// 			var objSubText = listObject[n][0]+"  "+listObject[n][1];
		// 			createSubLi.innerHTML = objSubText;
		// 			createSubList.appendChild(linkLi);
		// 		}
		// 		updateItemLink(localStorage.key(i), linkLi);  //create edit and delete buttons link for each item in local storage
		// 	}
		// };

		// function pullImage(archetypeName, createSubList) { // These arguments are pulled in from line 72 of the pullData function
		// 	var imgLi = document.createElement("li");
		// 	createSubList.appendChild(imgLi);
		// 	var newImage = document.createElement("img");
		// 	var	setSource = newImage.setAttribute("src", "images/"+ archetypeName + ".png");
		// 	imgLi.appendChild(newImage);
		// };

		// function clearItems(){
		// 	if(localStorage.length === 0){
		// 		alert("No items to clear");
		// 	} else {
		// 		localStorage.clear();
		// 		alert("Stash has been cleared");
		// 		window.location.reload();
		// 		return false;
		// 	}
		// };

		// function fillData (){
		// 	for(var n in jsonData) {
		// 	var storeNumber = Math.floor(Math.random()*100000001);	
		// 	localStorage.setItem(storeNumber, JSON.stringify(jsonData[n]));
		// 	}
		// };

		// var displayData = $("#displayData");
		// displayData.addEventListener("click", pullData);
		// var clearData = ge("#clearData");
		// clearData.addEventListener("click", clearItems);

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var parseRecordForm = function(data){

};

var autofillData = function (){
	for(var n in json) {
		var storeNumber = Math.floor(Math.random()*100000001);	
		localStorage.setItem(storeNumber, JSON.stringify(json[n]));
	}
};

var getData = function(){
	toggle("on");
		if(localStorage.length === 0){
		alert("There are currently no items in your stash, so some items have been loaded for you.");
		autofillData ();
	}
};

var storeData = function(key){
	//condition for if key or not to store new data or edit current data
	if(!key){
	var storeNumber = Math.floor(Math.random()*100000001);
	} else {
		storeNumber = key;  //use existing key to update not create new item in local storage
	}
	getType();
	getArchetype();

	var object 				= {};
	object.itemname 		= ["Item Name:", $("#itemname").val()];
	object.archetype		= ["Archetype:", archetypeValue];
	object.type 			= ["Type:", typeValue];
	object.classification 	= ["Classification:", $("#classification").val()];
	object.quality 			= ["Quality:", $("#quality").val()];
	object.sellvalue 		= ["Sell Value:", $("#sellvalue").val()];
	object.date 			= ["Date Stashed:", $("#mydate").val()];
	object.dropped 			= ["Dropped From:", $("#dropped").val()];
	localStorage.setItem(storeNumber, JSON.stringify(object));
	window.location.reload();
	alert("Stash Successful!");
}; 

var	deleteItem = function (){
	var prompt = confirm("Remove item from stash permanently?");
		if(prompt){
			localStorage.removeItem(this.key);
			window.location.reload();
		} else {
			alert("The item was not removed from stash");
		}			
};
					
var clearLocal = function(){
		if(localStorage.length === 0){
		alert("No items to clear");
	} else {
		localStorage.clear();
		alert("Stash has been cleared");
		window.location.reload();
		return false;
	}
};


