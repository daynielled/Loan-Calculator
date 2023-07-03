window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() { 
const initialValues = {amount:25000, years:5, rate:5};
const principleVal= document.getElementById("loan-amount");
principleVal.value = initialValues.amount;

const termVal= document.getElementById("loan-years")
termVal.value = initialValues.years;

const interestVal= document.getElementById("loan-rate")
interestVal.value = initialValues.rate;

update();


}

// Get the current values from the UI
// Update the monthly payment
function update() {
const currentVal = getCurrentUIValues();
const monthlyPayment= calculateMonthlyPayment(currentVal);
updateMonthly(monthlyPayment);
}


// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {

let interest = (values.rate/100)/12;
let term = values.years*12;
let principle = values.amount;

return (interest*principle/ (1 -Math.pow ((1+interest), -term))).toFixed(2);

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPaymentUpdate = document.getElementById("monthly-payment")
  monthlyPaymentUpdate.textContent=monthly;
}
