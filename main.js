var userInput = document.getElementById("userInput");
var button = document.getElementById("converter");
var results = document.getElementById("convertedvalue").value;
// var clearAF = document.getElementById("clearButton").value = "";


function toCelsius() {
    var fahrenheitToC = parseInt((userInput.value - 32) * (5 / 9));
    // if 
    document.getElementById("convertedvalue").innerHTML = fahrenheitToC;
}

function toFahrenheit() {
    var celsiusToF = parseInt((userInput.value * (9 / 5) + 32));
    
    document.getElementById("convertedvalue").innerHTML = celsiusToF;
}

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter(clickEvent) {
    if (document.getElementById("FtoC").checked) {
        toCelsius()
    } else {
        if (document.getElementById("CtoF").checked) {
            toFahrenheit()
        }
    }
}



document.getElementById("convertbutton").addEventListener("click", determineConverter);