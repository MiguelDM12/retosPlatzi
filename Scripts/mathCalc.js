function calculateValues(){
    let numbersGroupContainer = document.getElementById("textarea_number");
    let numbersGroupValues = numbersGroupContainer.value;
    let arrayNumbersValues = numbersGroupValues.split(",");

    // calculating arithmetic average

    let sumArrayElements = 0;
    for (let i=0; i<arrayNumbersValues.length; i++){
        sumArrayElements = sumArrayElements+ parseInt( arrayNumbersValues[i]);   
    }
    let arithmeticAverage = sumArrayElements/arrayNumbersValues.length;
    average_result.innerText = arithmeticAverage;   

    // calculating median

    let sortArray = arrayNumbersValues.sort(function(a,b){return a - b;});
    let medianPosition = 0;
    let median = 0;
    if (sortArray.length % 2 === 0){
        medianPosition = sortArray.length/2;
        median = (parseInt(sortArray[medianPosition]) + parseInt(sortArray[medianPosition-1]))/2;
        median_result.innerText = median;
    } else {
        medianPosition = parseInt(sortArray.length/2);
        median = sortArray[medianPosition];
        median_result.innerText = median;
    }

    // calculating statistical mode

    let objectCountValues = {};
    sortArray.map(
        function(element){
            if(objectCountValues[element]){
                objectCountValues[element] +=1;
            } else {
                objectCountValues[element] = 1
            }
        }
    )

    let arrayCountValues = Object.entries(objectCountValues).sort(function(a,b){return a-b});

    let statisticalMode = arrayCountValues[arrayCountValues.length-1][0];
    
    statisticalMode_result.innerText = statisticalMode;
    
}