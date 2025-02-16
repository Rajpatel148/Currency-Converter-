const cvt = document.getElementsByClassName("convert")[0];
const swap = document.getElementsByClassName("swap")[0];
const amount = document.getElementsByClassName("input-field")[0];
const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const display = document.getElementById("result");

const convert = async (from, to, amount) => {
  if (from === to) {
    return amount.toFixed(2);
  }
  let URL = `https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`;
  const response = await fetch(URL);

  const data = await response.json();
  return (amount * data.rates[to]).toFixed(2);
};

const cvtHandler = async (e) => {
  if (parseFloat(amount.value) < 0 || isNaN(parseFloat(amount.value))) {
    display.textContent = "Amount is invalid";
    return;
  }
  try {
    let convertedAmount = await convert(
      fromCurrency.value,
      toCurrency.value,
      parseFloat(amount.value)
    );
    display.textContent = `${amount.value} ${fromCurrency.value} = ${convertedAmount} ${toCurrency.value}`;
  } catch {
    display.textContent = "Exchange Error";
  }
};

const swapHandler = async (e) => {

  if (parseFloat(amount.value) < 0 || isNaN(parseFloat(amount.value))) {
    display.textContent = "Amount is invalid";
    return;
  }
  [fromCurrency.value, toCurrency.value] = [
    toCurrency.value,
    fromCurrency.value,
  ];
  try {
    let convertedAmount = await convert(
      fromCurrency.value,
      toCurrency.value,
      parseFloat(amount.value)
    );
    display.textContent = `${amount.value} ${fromCurrency.value} = ${convertedAmount} ${toCurrency.value}`;
  } catch {
    display.textContent = "Exchange Error";
  }
};

cvt.addEventListener("click", cvtHandler);
swap.addEventListener("click", swapHandler);
document.addEventListener("keydown",(e)=>{
    if(e.key == "Enter") cvtHandler();
    if(e.key == "`") swapHandler();
})