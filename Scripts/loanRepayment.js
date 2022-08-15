//Tax interest

const inputContainer = document.getElementById("slider1");
const valuesContainer = document.getElementById("valueBlock-value1");

inputContainer.addEventListener("input", function() {
    valuesContainer.innerHTML = inputContainer.value;
}); 

//Periodicity
const inputContainer2 = document.getElementById("slider2");
const valuesContainer2 = document.getElementById("valueBlock-value2");

inputContainer2.addEventListener("input", function() {
    valuesContainer2.innerHTML = inputContainer2.value;
}); 

const totalAmount = document.getElementById("capitalization_amount");

//Calculate Amortization Schedule

function calculateAmortizationSchedule(){
    const outputScheduleLoan = document.getElementById("loanRepayment_output_table");
    outputScheduleLoan.innerHTML = `<th>Año</th>`+`<th>Cuota</th>`+`<th>Intereses</th>`+`<th>Capital</th>`+`<th>Capital Vivo</th>`;
    let loanInterest = inputContainer.value/100;
    let amountPayYear = totalAmount.value*loanInterest/(1-(Math.pow(1+loanInterest, -inputContainer2.value)));
    console.log(amountPayYear);
    let year = 0;
    let fee = 0;
    let capital = 0;
    let interest = loanInterest;
    let remainingCapital=totalAmount.value;
    for (let i = 1; i<=inputContainer2.value; i++){
        year = i;
        fee = (amountPayYear).toFixed(2);
        interest = (remainingCapital*loanInterest).toFixed(2);
        capital = (fee - interest).toFixed(2);      
        remainingCapital = (remainingCapital - capital).toFixed(2);
        if(remainingCapital < 1){
            remainingCapital = 0;
        }
        let insertLine = `<tr><td>${year}</td>`+`<td>${fee} €</td>`+`<td>${interest} €</td>`+`<td>${capital} €</td>`+`<td>${remainingCapital} €</td></tr>`;
        outputScheduleLoan.insertAdjacentHTML("beforeend", insertLine);
    }
}


