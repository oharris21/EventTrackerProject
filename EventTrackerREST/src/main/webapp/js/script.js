window.addEventListener('load', function(e) {

	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'api/nutritioninfo');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var allEvents = JSON.parse(xhr.responseText);
			console.log(allEvents); 
			displayNutrition(allEvents);
		} else {
			console.log("Data not found");
		}
	}
	xhr.send();
});

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
	var tr = document.createElement('tr');
	table.appendChild(tbody);
	tbody.appendChild(tr); 
	
	// not printing data passed in to table 
	for (var i = 0; i < nutrition.length; i++) {
		var fname = document.createElement('td');
		var lname = document.createElement('td');
		var curWeight = document.createElement('td');
		var desWeight = document.createElement('td');
		var protein = document.createElement('td');
		var carbs = document.createElement('td');
		var fat = document.createElement('td');
		var notes = document.createElement('td');
		
		fname.textContent = nutrition.firstName;
		lname.textContent = nutrition.lastName;
		curWeight.textContent = nutrition.currentWeight;
		desWeight.textContent = nutrition.desiredWeight;
		protein.textContent = nutrition.protein;
		carbs.textContent = nutrition.carbs;
		fat.textContent = nutrition.fat;
		notes.textContent = nutrition.notes;
		
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
	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON
																// request body
	xhr.onreadystatechange = function() {
		// breaking in here
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) { // Ok or Created
				var data = JSON.parse(xhr.responseText);
				console.log(data);
			} else {
				console.log("POST request failed.");
				// console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};

	var userObjectJson = JSON.stringify(nutritionCreate); // Convert JS object to JSON string
	xhr.send(userObjectJson);

	// if request is successful reload table to show new object
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState === 4) {
			var response = JSON.parse(xmlhttp.responseText);
			if (xmlhttp.status === 200 && response.status === 'OK') {
				// reload table to show new object 
			} else {
				console.log('failed');
			}
		}
	}
});