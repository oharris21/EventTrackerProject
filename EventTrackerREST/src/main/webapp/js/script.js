window.addEventListener('load', function(e) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/nutritioninfo');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var allEvents = JSON.parse(xhr.responseText);
			displayNutrition(allEvents);
			addUpdateAndDelete(); 
		} else {
			console.log("Data not found");
		}
	}
	xhr.send();
});

function addUpdateAndDelete() {
	var trList = document.getElementsByTagName("tr");
	for (var i = 0; i < trList.length; i++) {
		trList[i].addEventListener("click", function(e) {
			let row = e.target.parentElement; 
			var array = []; 
			for (var i = 0; i < row.children.length; i++) {
				array[i] = row.children[i].textContent; 
			}
			detailView(array); 
		});
	}
} 

// create update and delete buttons and add event listeners 
function detailView(selectedRow) {
	
	var f = document.createElement("form");
	f.setAttribute('id', 'ff'); 

	var fname = document.createElement("input"); 
	fname.setAttribute('type',"text");
	fname.setAttribute('name',"fname");
	fname.setAttribute('value', selectedRow[0]); 
	
	var lname = document.createElement("input"); 
	lname.setAttribute('type',"text");
	lname.setAttribute('name',"lname");
	lname.setAttribute('value', selectedRow[1]); 
	
	var current = document.createElement("input"); 
	current.setAttribute('type',"text");
	current.setAttribute('name',"current");
	current.setAttribute('value', selectedRow[2]); 
	
	var desired = document.createElement("input"); 
	desired.setAttribute('type',"text");
	desired.setAttribute('name',"desired");
	desired.setAttribute('value', selectedRow[3]); 
	
	var protein = document.createElement("input"); 
	protein.setAttribute('type',"text");
	protein.setAttribute('name',"protein");
	protein.setAttribute('value', selectedRow[4]); 
	
	var carbs = document.createElement("input"); 
	carbs.setAttribute('type',"text");
	carbs.setAttribute('name',"carbs");
	carbs.setAttribute('value', selectedRow[5]); 
	
	var fat = document.createElement("input"); 
	fat.setAttribute('type',"text");
	fat.setAttribute('name',"fat");
	fat.setAttribute('value', selectedRow[6]); 
	
	var notes = document.createElement("input"); 
	notes.setAttribute('type',"text");
	notes.setAttribute('name',"notes");
	notes.setAttribute('value', selectedRow[7]); 

	var update = document.createElement("input");
	update.type = "submit";
	update.value = "update"; 
	update.name = "update"; 
	update.id = "submit"; 
	
	f.appendChild(fname);
	f.appendChild(lname);
	f.appendChild(current);
	f.appendChild(desired);
	f.appendChild(protein);
	f.appendChild(carbs);
	f.appendChild(fat);
	f.appendChild(notes);
	f.appendChild(update);
	document.getElementById('detail').appendChild(f);
	
    document.getElementById("submit").addEventListener('click', function(e) {
    	e.preventDefault();
    	
    	var updatedRow = {
    		firstName : ff.fname.value,
    		lastName : ff.lname.value,
    		currentWeight : ff.current.value,
    		desiredWeight : ff.desired.value,
    		protein : ff.protein.value,
    		carbs : ff.carbs.value,
    		fat : ff.fat.value,
    		notes : ff.notes.value
    	}

    	// send to Patch route
    	var xhr = new XMLHttpRequest();
    	xhr.open('PATCH', 'api/editnutrition', true);
    	xhr.setRequestHeader("Content-type", "application/json"); 
    	xhr.onreadystatechange = function() {
    		if (xhr.readyState === 4) {
    			if (xhr.status == 200 || xhr.status == 201) {
    				var data = JSON.parse(xhr.responseText);
    				console.log(data);
    				
    				// reload table with updated info 
    				var xhr2 = new XMLHttpRequest();
    				xhr2.open('GET', 'api/nutritioninfo');
    				xhr2.onreadystatechange = function() {
    					if (xhr2.readyState === 4 && xhr2.status === 200) {
    						var allEvents = JSON.parse(xhr2.responseText);
    						displayNutrition(allEvents);
    					} else {
    						console.log("*** Data not found ***");
    					}
    				}
    				xhr2.send();
    			} else {
    				console.log("PATCH request failed.");
    				console.error(xhr.status + ': ' + xhr.responseText);
    			}
    		}
    	};
    	var userObjectJson = JSON.stringify(updatedRow); 
    	xhr.send(userObjectJson);
    }); 
    
    // delete 
    var del = document.createElement("input");
    del.type = "submit";
    del.value = "delete"; 
    del.name = "delete"; 
    del.id = "b"; 
    var bar = document.getElementById("detail");
    bar.appendChild(del);
    
    document.getElementById("b").addEventListener('click', function(e) {
    	e.preventDefault();
 
    	// need a JSON object 
    	var rowToDelete = {
    		firstName : selectedRow[0],
        	lastName : selectedRow[1],
        	currentWeight : selectedRow[2],
        	desiredWeight : selectedRow[3],
        	protein : selectedRow[4],
        	carbs : selectedRow[5],
        	fat : selectedRow[6],
        	notes : selectedRow[7]
    	}

    	// send to Delete route
    	var xhr = new XMLHttpRequest();
    	xhr.open('DELETE', 'api/deletenutrition', true);
    	xhr.setRequestHeader("Content-type", "application/json"); 
    	xhr.onreadystatechange = function() {
    		if (xhr.readyState === 4) {
    			if (xhr.status == 200 || xhr.status == 201) {
    				var data = JSON.parse(xhr.responseText);
    				console.log(data);
    				
    				// reload table with updated info 
    				var xhr2 = new XMLHttpRequest();
    				xhr2.open('GET', 'api/nutritioninfo');
    				xhr2.onreadystatechange = function() {
    					if (xhr2.readyState === 4 && xhr2.status === 200) {
    						var allEvents = JSON.parse(xhr2.responseText);
    						displayNutrition(allEvents);
    					} else {
    						console.log("*** Data not found ***");
    					}
    				}
    				xhr2.send();
    			} else {
    				console.log("DELETE request failed.");
    				console.error(xhr.status + ': ' + xhr.responseText);
    			}
    		}
    	};
    	// 
    	var userObjectJson = JSON.stringify(rowToDelete); 
    	xhr.send(userObjectJson);
    }); 
}

// table with all nutrition entities 
function displayNutrition(nutrition) {
	var dataDiv = document.getElementById('tableHere');

	var table = document.createElement('table');
	var thead = document.createElement('thead');
	var tr = document.createElement('tr');

	var thFname = document.createElement('th');
	thFname.textContent = "First Name";

	var thLname = document.createElement('th');
	thLname.textContent = "Last Name";

	var thCurWeight = document.createElement('th');
	thCurWeight.textContent = "Current Weight";

	var thDesWeight = document.createElement('th');
	thDesWeight.textContent = "Desired Weight";

	var thProtein = document.createElement('th');
	thProtein.textContent = "Protein";

	var thCarbs = document.createElement('th');
	thCarbs.textContent = "Carbs";

	var thFat = document.createElement('th');
	thFat.textContent = "Fat";

	var thNotes = document.createElement('th');
	thNotes.textContent = "Notes";

	dataDiv.appendChild(table); 
	table.appendChild(thead);
	thead.appendChild(tr);
	tr.appendChild(thFname);
	tr.appendChild(thLname);
	tr.appendChild(thCurWeight);
	tr.appendChild(thDesWeight);
	tr.appendChild(thProtein);
	tr.appendChild(thCarbs);
	tr.appendChild(thFat);
	tr.appendChild(thNotes);
	
	var tbody = document.createElement('tbody');
	table.appendChild(tbody);
	
	for (var i = 0; i < nutrition.length; i++) {
		var tr = document.createElement('tr');
		tbody.appendChild(tr); 
		
		var fname = document.createElement('td');
		var lname = document.createElement('td');
		var curWeight = document.createElement('td');
		var desWeight = document.createElement('td');
		var protein = document.createElement('td');
		var carbs = document.createElement('td');
		var fat = document.createElement('td');
		var notes = document.createElement('td');
		
		fname.textContent = nutrition[i].firstName;
		lname.textContent = nutrition[i].lastName;
		curWeight.textContent = nutrition[i].currentWeight;
		desWeight.textContent = nutrition[i].desiredWeight;
		protein.textContent = nutrition[i].protein;
		carbs.textContent = nutrition[i].carbs;
		fat.textContent = nutrition[i].fat;
		notes.textContent = nutrition[i].notes;
		
		tr.appendChild(fname); 
		tr.appendChild(lname); 
		tr.appendChild(curWeight); 
		tr.appendChild(desWeight); 
		tr.appendChild(protein); 
		tr.appendChild(carbs); 
		tr.appendChild(fat); 
		tr.appendChild(notes); 
	} 
}

// create nutrition 
document.getElementById("create").addEventListener('click', function(e) {
	e.preventDefault();

	// make JSON object
	var nutritionCreate = {
		firstName : startTable.firstElementChild.fname.value,
		lastName : startTable.firstElementChild.lname.value,
		currentWeight : startTable.firstElementChild.current.value,
		desiredWeight : startTable.firstElementChild.desired.value,
		protein : startTable.firstElementChild.protein.value,
		carbs : startTable.firstElementChild.carbs.value,
		fat : startTable.firstElementChild.fat.value,
		notes : startTable.firstElementChild.notes.value
	}

	// send to Post route
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/createnutrition', true);
	xhr.setRequestHeader("Content-type", "application/json"); 
																
	xhr.onreadystatechange = function() {
		// if request is successful reload table to show new object
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) {
				var data = JSON.parse(xhr.responseText);
				console.log(data);
				
				var xhr2 = new XMLHttpRequest();
				xhr2.open('GET', 'api/nutritioninfo');
				xhr2.onreadystatechange = function() {
					if (xhr2.readyState === 4 && xhr2.status === 200) {
						var allEvents = JSON.parse(xhr2.responseText);
						displayNutrition(allEvents);
					} else {
						console.log("*** Data not found ***");
					}
				}
				xhr2.send();
			} else {
				console.log("POST request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};
	var userObjectJson = JSON.stringify(nutritionCreate); 
	xhr.send(userObjectJson);
});