//Tax interest

const inputContainer = document.getElementById("slider1");
const valuesContainer = document.getElementById("valueBlock-value1");
console.log(inputContainer.value)
console.log(valuesContainer.value)

inputContainer.addEventListener("input", function() {
    valuesContainer.innerHTML = inputContainer.value + "%";
}); 

//Periodicity
const inputContainer2 = document.getElementById("slider2");
const valuesContainer2 = document.getElementById("valueBlock-value2");
console.log(inputContainer2.value)
console.log(valuesContainer2.value)

inputContainer2.addEventListener("input", function() {
    valuesContainer2.innerHTML = inputContainer2.value;
}); 

