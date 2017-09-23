var questionnaireTrain = document.getElementsByClassName("questionnaire");
var arrowToggle = document.querySelectorAll('a');
function slide() {
  questionnaireTrain[0].style.transform += "translateX(316px)";
}
for (var i = 0; i < arrowToggle.length; i++){
  arrowToggle[i].addEventListener('click', slide);
}

function showCheckMark(e) {
  e.target.parentNode.lastChild.previousSibling.className += 'shown-check';
}

var checkedAnswers = document.querySelectorAll('.questionnaire label');
function showArrow(e) {
  console.log("im here")
  e.target.parentNode.lastChild.previousSibling.className += "shown";
}
for (var i = 0; i < checkedAnswers.length; i++){
  checkedAnswers[i].addEventListener('click', showArrow);
}
