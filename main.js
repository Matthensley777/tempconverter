var userInput = document.getElementById("userInput");
var button = document.getElementById("converter");
var results = document.getElementById("convertedvalue").value;
// var clearAF = document.getElementById("clearButton").value;

function toCelsius(temp) {
    var fahrenheitToC = parseInt((userInput.value - 32) * (5 / 9));
    document.getElementById("convertedvalue").innerHTML = fahrenheitToC;
    var classColor = toCelsius;
}

function toFahrenheit(temp) {
    var celsiusToF = parseInt((userInput.value * (9 / 5) + 32));
	document.getElementById("convertedvalue").innerHTML = celsiusToF;
	var classColor = toFahrenheit;
}
// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter(temp) {
    if (document.getElementById("FtoC").checked) {
        toCelsius()
    } else if (document.getElementById("CtoF").checked) {
        toFahrenheit()
    }
}



document.getElementById("convertbutton").addEventListener("click", determineConverter);
// document.getElementById("clearButton").addEventListener("clear", clearInput);

// function clearInput() {
//     convertedvalue.innerHTML = document.getElementById("userInput").value = "";
//     }