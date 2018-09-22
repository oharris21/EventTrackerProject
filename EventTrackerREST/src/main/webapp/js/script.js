window.addEventListener('load', function(e) {
	
	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'api/nutritioninfo');
	xhr.onreadystatechange = function() {
		// getting hung up right here 
		if (xhr.readyState === 4 && xhr.status === 200) {
			var allEvents = JSON.parse(xhr.responseText);
			console.log(allEvents); 
			displayNutrition(allEvents);
		} 
		else {
			console.log("Data not found"); 
		}
	}
	xhr.send();
}); 

function displayNutrition(nutrition) {
	var dataDiv = document.getElementById('startTable');
	
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
				
				var fname = document.createElement('td'); 
				fname.textContent = nutrition.firstName;
				
				var lname = document.createElement('td'); 
				lname.textContent = nutrition.lastName;
				
				var curWeight = document.createElement('td'); 
				curWeight.textContent = nutrition.currentWeight;
				
				var desWeight = document.createElement('td'); 
				desWeight.textContent = nutrition.desiredWeight;
				
				var protein = document.createElement('td'); 
				protein.textContent = nutrition.protein;
				
				var carbs = document.createElement('td'); 
				carbs.textContent = nutrition.carbs;
				
				var fat = document.createElement('td'); 
				fat.textContent = nutrition.fat;
				
				var notes = document.createElement('td'); 
				notes.textContent = nutrition.notes;
				
				table.appendChild(tbody); 
				tbody.appendChild(tr); 
				tr.appendChild(fname); 
				tr.appendChild(lname); 
				tr.appendChild(curWeight); 
				tr.appendChild(desWeight); 
				tr.appendChild(protein); 
				tr.appendChild(carbs); 
				tr.appendChild(fat); 
				tr.appendChild(notes); 
}

document.button.create.addEventListener('click', function(e) {
//	When the submit button is pressed it should build a JSON object from the form field values, and send it to your POST route. 
//	If the request is successful, reload your list of all the events so it includes your newly created object.
	
	// make JSON object, one of these might be right lol 
	var nutrition = form.create.value; 

	var nutritionCreate = {
		firstName: form.create.value.fname, 
		lastName: form.create.value.lname, 
		currentWeight: form.create.value.current, 
		desiredWeight: form.create.value.desired, 
		protein: form.create.value.protein, 
		carbs: form.create.value.carbs, 
		fat: form.create.value.fat, 
		notes: form.create.value.notes 
	}
	
	// send to Post route 
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/nutritioninfo', true);

	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

	xhr.onreadystatechange = function() {
	  if (xhr.readyState === 4 ) {
	    if ( xhr.status == 200 || xhr.status == 201 ) { // Ok or Created
	      var data = JSON.parse(xhr.responseText);
	      console.log(data);
	    }
	    else {
	      console.log("POST request failed.");
	      console.error(xhr.status + ': ' + xhr.responseText);
	    }
	  }
	};

	var userObject = {
	  name: 'J. R. "Bob" Dobbs',
	  username: 'bdobbs',
	  email: 'bdobbs@example.com'
	};
	var userObjectJson = JSON.stringify(nutritionCreate); // Convert JS object to JSON string

	xhr.send(userObjectJson);
	
	// if () request is successful, reload table to show new object 
	
});

