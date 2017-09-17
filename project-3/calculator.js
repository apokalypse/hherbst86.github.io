var screen = document.getElementById("screen");

//should input a char on screen
function screenInput(num){ 
  if (num === 'C' || num === 'AC'){
    screen.value = '';
  }
  else {
    screen.value += num;
  }
}

//should make use of the equal sign
function calculate(equation) {
  var result = eval(equation);
  screen.value = result;
}
