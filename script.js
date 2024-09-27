function calcNumbers(result){
    form.displayResult.value=form.displayResult.value+result
  }
  function clearDisplay() {
    document.form.displayResult.value = "";
}

function backspace() {
    var displayValue = document.form.displayResult.value;
    
    displayValue = displayValue.substring(0, displayValue.length - 1);
    
    document.form.displayResult.value = displayValue;
}


function calculateAndDisplay() {
  var result = eval(document.form.displayResult.value);
  
  document.form.displayResult.value = result;
  
  document.getElementById('resultOutside').innerText = result;
}

async function convertCurrency() {
  var fromCurrency = document.getElementById('fromCurrency1').value;
  var toCurrency = document.getElementById('toCurrency1').value;
  var amount = document.getElementById('resultOutside').innerText; // Corrected line

  // Fetch the exchange rates
  var response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
  var rates = await response.json();

  // Calculate the converted amount
  var rate = rates.rates[toCurrency];
  var result = amount * rate;

  // Display the result
  if (amount !== "" && rate !== "") {
    var result = amount * rate;
    document.getElementById('result1').value = result.toFixed(2) + ' ' + toCurrency;
  } else {
    document.getElementById('result1').value = "Please enter an amount and select both currencies";
  }
}

