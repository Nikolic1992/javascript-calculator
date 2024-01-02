const display = document.getElementById("display");

function Display(input) {
  const lastChar = display.value.slice(-1);

  if (lastChar && "+-*/".includes(lastChar) && "+-*/".includes(input)) {
    display.value = display.value.slice(0, -1) + input;
  } else {
    display.value += input;
  }
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  display.value = eval(display.value);
}
