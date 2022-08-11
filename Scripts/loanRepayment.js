//Tax interest

const inputContainer = document.getElementById("slider1");
const valuesContainer = document.getElementById("valueBlock-value1");

inputContainer.addEventListener("input", function() {
    valuesContainer.innerHTML = inputContainer.value;
}); 

//Periodicity
const inputContainer2 = document.getElementById("slider2");
const valuesContainer2 = document.getElementById("valueBlock-value2");
console.log(inputContainer2.value)
console.log(valuesContainer2.value)

inputContainer2.addEventListener("input", function() {
    valuesContainer2.innerHTML = inputContainer2.value;
}); 

const totalAmount = document.getElementById("capitalization_amount");

// Calculate Amortization Schedule

function calculateAmortizationSchedule(){
    let monthlyFees = inputContainer2.value*12;
    let loanInterest = inputContainer.value/100
    let amountPayYear = totalAmount.value*loanInterest/(1-(Math.pow(1+loanInterest, -inputContainer2.value)));
    let amountPayMonth = (amountPayYear/12).toFixed(2);
    console.log(amountPayYear);
    console.log(amountPayMonth);
    let month = 0;
    let fee = 0;
    let capital = 0;
    let interest = loanInterest;
    let remainingCapital=totalAmount.value;
    for (let i = 1; i<monthlyFees; i++){
        remainingCapital = remainingCapital - capital;
        month = i;
        fee = amountPayMonth;
        interest = remainingCapital*loanInterest/monthlyFees;
        capital = fee - interest;
        console.log(remainingCapital);
    }
}





