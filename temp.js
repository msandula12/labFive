// Generated by CoffeeScript 1.10.0
(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.toCelsius = function(fahrenheit) {
    var displayCelsius;
    fahrenheit = document.getElementById("temperature").value;
    if (isNaN(fahrenheit) || fahrenheit === "") {
      alert("Please enter a number!");
    }
    fahrenheit = (fahrenheit - 32) * 5 / 9;
    displayCelsius = document.getElementById("displayCelsius");
    return displayCelsius.innerHTML = "The temperature is " + fahrenheit + " degrees Fahrenheit.";
  };

  root.toFahrenheit = function(celsius) {
    var displayFahrenheit;
    celsius = document.getElementById("temperature").value;
    if (isNaN(celsius) || celsius === "") {
      alert("Please enter a number");
    }
    celsius = celsius * 9 / 5 + 32;
    displayFahrenheit = document.getElementById("displayFahrenheit");
    return displayFahrenheit.innerHTML = "The temperature is " + celsius + " degrees Celsius.";
  };

}).call(this);
