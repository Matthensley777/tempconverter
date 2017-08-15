var userInput = document.getElementById("userInput");
var button = document.getElementById("converter");
var results = document.getElementById("convertedvalue").value;
var clearAF = document.getElementById("clearButton").value;

function toCelsius() {
    var fahrenheitToC = parseInt((userInput.value - 32) * (5 / 9));
    document.getElementById("convertedvalue").innerHTML = fahrenheitToC;
    var classColor = toCelsius;
}

function toFahrenheit() {
    var celsiusToF = parseInt((userInput.value * (9 / 5) + 32));
	document.getElementById("convertedvalue").innerHTML = celsiusToF;
	var classColor = toFahrenheit;
}
// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter(classColor) {
    if (document.getElementById("FtoC").checked) {
        toCelsius()
        if (classColor >= 32) {
            classColor.style.color = "red";
          } else if (classColor.value <= 0) {
              classColor.style.color = "blue";
          } else if (classColor.value > 0 && classColor.value < 32)
            {
              classColor.style.color = "green" 
          }
          console.log("colors", classColor);
    } else if (document.getElementById("CtoF").checked) {
        toFahrenheit()
        if (classColor.value >= 90) {
            classColor.style.color = "red";
        } else if (classColor.value <= 32) {
            classColor.style.color = "blue";
        } else if (classColor.value > 32 && classColor.value < 90)
          {
            classColor.style.color = "green"
        }
    }
}
    





document.getElementById("convertbutton").addEventListener("click", determineConverter);
document.getElementById("clearButton").addEventListener('click', clearInput);
function clearInput(e) {
    var clear = document.getElementById("userInput").value = "";
}