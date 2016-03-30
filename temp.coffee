root = exports ? this
root.toCelsius = (fahrenheit) ->
	fahrenheit = document.getElementById("temperature").value
	if isNaN(fahrenheit) or fahrenheit is ""
		alert "Please enter a number!"
	fahrenheit = (fahrenheit-32) * 5/9
	displayCelsius = document.getElementById("displayCelsius")
	displayCelsius.innerHTML = "The temperature is " + fahrenheit + " degrees Fahrenheit."

root.toFahrenheit = (celsius) ->
	celsius = document.getElementById("temperature").value
	if isNaN(celsius) or celsius is ""
		alert "Please enter a number"
	celsius = celsius * 9/5 + 32
	displayFahrenheit = document.getElementById("displayFahrenheit")
	displayFahrenheit.innerHTML = "The temperature is " + celsius + " degrees Celsius."