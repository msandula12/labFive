function toCelsius(fahrenheit) {
	fahrenheit = document.getElementById("temperature").value;
	if (isNaN(fahrenheit)) {
		alert("Please enter a number!")
	} else if (fahrenheit === "") {
		alert("Please enter a number!")	
	} else {
	    fahrenheit = (fahrenheit-32) * 5/9;
		var displayCelsius = document.getElementById("displayCelsius");		
		displayCelsius.innerHTML = "The temperature is " + fahrenheit + " degrees Fahrenheit.";
	}
}

function toFahrenheit(celsius) {
	celsius = document.getElementById("temperature").value;
	if (isNaN(celsius)) {
		alert("Please enter a number!")
	} else if (celsius === "") {
		alert("Please enter a number!")	
	} else {
	   	celsius = celsius * 9/5 + 32;
		var displayFahrenheit = document.getElementById("displayFahrenheit");
		displayFahrenheit.innerHTML = "The temperature is " + celsius + " degrees Celsius.";
	}
}