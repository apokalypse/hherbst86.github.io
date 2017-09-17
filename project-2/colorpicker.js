//BACKUP: https://jsbin.com/jikovev/edit?html,css,js,console,output

var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
var alpha = document.getElementById("alpha");

var redNum = document.getElementById("redNum");
var greenNum = document.getElementById("greenNum");
var blueNum = document.getElementById("blueNum");
var alphaNum = document.getElementById("alphaNum");

var colorbuilder = document.getElementById("colorbuilder");
var box = document.getElementById("square");


function changeRedText(){
  redNum.textContent = "(" + red.value + ")";
}

function changeGreenText(){
  greenNum.textContent = "(" + green.value + ")";
}

function changeBlueText(){
  blueNum.textContent = "(" + blue.value + ")";
}

function changeAlphaText(){
  alphaNum.textContent = "(" + alpha.value + ")";
}

function changeBoxColor(){
  var boxColor = ("rgba(" + red.value + ", " + green.value + ", " + blue.value + ", " + alpha.value + ")");
  box.style.backgroundColor = boxColor;
}

red.addEventListener('change', changeRedText);
green.addEventListener('change', changeGreenText);
blue.addEventListener('change', changeBlueText);
alpha.addEventListener('change', changeAlphaText);
colorbuilder.addEventListener('change', changeBoxColor);
