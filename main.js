var userInput = document.getElementById("userInput");
var button = document.getElementById("converter");
var results = document.getElementById("convertedvalue").value;
// var clearAF = document.getElementById("clearButton").value;

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
function determineConverter() {
    if (document.getElementById("FtoC").checked) {
        toCelsius()
        if (userInput.value >= 32) {
            userInput.style.color = "red";
          } else if (userInput.value <= 0) {
              userInput.style.color = "blue";
          } else if (userInput.value > 0 && userInput.value < 32)
            {
              userInput.style.color = "green"
          }
    } else if (document.getElementById("CtoF").checked) {
        toFahrenheit()
        if (userInput.value >= 90) {
            userInput.style.color = "red";
        } else if (userInput.value <= 32) {
            userInput.style.color = "blue";
        } else if (userInput.value > 32 && userInput.value < 90)
          {
            userInput.style.color = "green"
        }
    }
}
    


// function determineColor(temp) {
//     if (celcius.checked) {
//         convertedInput.value = toC(userInput);
//         if (convertedInput.value >= 32) {
//             convertedInput.style.color = "red";
//           } else if (convertedInput.value <= 0) {
//               convertedInput.style.color = "blue";
//           } else if (convertedInput.value > 0 && convertedInput.value < 32)
//             {
//               convertedInput.style.color = "green"
//           }
//     } else if (fahrenheit.checked) {
//         convertedInput.value = toF(userInput);
//       if (convertedInput.value >= 90) {
//             convertedInput.style.color = "red";
//         } else if (convertedInput.value <= 32) {
//             convertedInput.style.color = "blue";
//         } else if (convertedInput.value > 32 && convertedInput.value < 90)
//           {
//             convertedInput.style.color = "green"
//         }
//     }
// }


document.getElementById("convertbutton").addEventListener("click", determineConverter);
// document.getElementById("clearButton").addEventListener("clear", clearInput);

// function clearInput() {
//     convertedvalue.innerHTML = document.getElementById("userInput").value = "";
//     }