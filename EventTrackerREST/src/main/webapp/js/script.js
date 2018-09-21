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
	
	// draw table out and create elements 
	var table = document.createElement('table'); 
	var th = document.createElement('th'); 
	var tr = document.createElement('tr'); 
	var td = document.createElement('td'); 
	
	table.id = 'nutritionTable';
	table.appendChild('th'); 
	th.textContent = "First Name";
	th.textContent = "Last Name";
	th.textContent = "Current Weight";
	th.textContent = "Desired Weight";
	th.textContent = "Protein";
	th.textContent = "Carbs";
	th.textContent = "Fat";
	th.textContent = "Notes";
	
	th.appendChild('tr'); 
	tr.appendChild('td'); 
	td.textContent = nutrition.firstName; 
	td.textContent = nutrition.lastName; 
	td.textContent = nutrition.currentWeight; 
	td.textContent = nutrition.desiredWeight; 
	td.textContent = nutrition.protein; 
	td.textContent = nutrition.carbs; 
	td.textContent = nutrition.fat; 
	td.textContent = nutrition.notes; 
}