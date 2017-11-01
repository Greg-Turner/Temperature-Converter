/* Write a program that will convert a temperature from fahrenheit to celsius, or from celsius to fahrenheit.

   In the HTML, have one input field where someone can enter in a temperature.
   Create a radio button group where Celsius or Fahrenheit can be selected as the scale that the number should be converted to.
   Create a block level element that will hold the text of the converted temperature.
   Create a button that, when clicked, displays the converted temperature.
   Create another button that, when clicked, clears any text in the input field.
   Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
   If the temperature is greater than 90F/32C the color of the converted temperature should be red.
   If the temperature is less than 32F/0C the color of the converted temperature should be blue.
   For any other temperature, the color should be green. */

// declare the document elements
let tempInputEl = document.getElementById("temp")
let cRadioEl = document.getElementById("tempTypeC")
let fRadioEl = document.getElementById("tempTypeF")
let resultEl = document.getElementById("newTemp")

// Get a reference to the convert button element in the DOM
const convButton = document.getElementById("convert");

// Get a reference to the convert button element in the DOM
const resetButton = document.getElementById("reset");
   
function toCelsius () {
    // take the parseInt of input value and subtract 32 then divide by 1.8
    let cTemp = (parseInt(tempInputEl.value)-32)/1.8
    let color = ""
    if (cTemp > 32) {
            color = "red"
        } else if (cTemp < 0) {
            color = "blue"
        } else {
            color = "green"
        }
    postConversion(cTemp, color);
}

function toFahrenheit () {
    // take the parseInt of input value and multiply by 1.8 then add 32
    let fTemp = (parseInt(tempInputEl.value)*1.8)+32
    let color = ""
    if (fTemp > 90) {
            color = "red"
        } else if (fTemp < 32) {
            color = "blue"
        } else {
            color = "green"
        }
    postConversion(fTemp, color);
}

function postConversion (newTemp, color) {
    resultEl.innerHTML = `
    <h3><font color = "${color}">${newTemp}</font></h3>
    `
}

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter () {
    if (cRadioEl.checked) {
        toCelsius()
    } else if (fRadioEl.checked){
        toFahrenheit()
    }
}

// This function clears the radio buttons and the input field
function resetPage () {
    tempInputEl.value = ""
    cRadioEl.checked = "false"
    fRadioEl.checked = "false"
    resultEl.innerHTML = ""
}

// Assign a function to be executed when the convert button is clicked
convButton.addEventListener("click", determineConverter);

// Assign a function to be executed when the reset button is clicked
resetButton.addEventListener("click", resetPage);

// Assign a function to be executed if the enter key is hit in the input field
tempInputEl.addEventListener("keyup", function () {
    if (event.keyCode === 13) {
        determineConverter();}
    })