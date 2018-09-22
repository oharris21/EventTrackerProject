window.addEventListener('load', function(e) {
	
	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'api/nutritioninfo');
	xhr.onreadystatechange = function() {
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