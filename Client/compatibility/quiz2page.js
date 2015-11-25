/**
 * Created by amyli on 11/25/15.
 */

/**
 * Created by amyli on 11/24/15.
 */

var questions = 10;
var correct = 0;
var alertText;
var i;

grader2 = function () {

  var a1 = document.getElementsByName('q1');
  for(i = 0; i < a1.length; i++) {
    if(a1[i].checked) {
      if(a1[i].value == 'echidna') {
        correct++;
        break;
      }
    }
  }

  var a2 = document.getElementsByName('q2');
  for(i = 0; i < a2.length; i++) {
    if(a2[i].checked) {
      if(a2[i].value == 'Whale shark') {
        correct++;
        break;
      }
    }
  }

  var a3 = document.getElementsByName('q3');
  for(i = 0; i < a3.length; i++) {
    if(a3[i].checked) {
      if(a3[i].value == 'foal') {
        correct++;
        break;
      }
    }
  }

  var a4 = document.getElementsByName('q4');
  for(i = 0; i < a4.length; i++) {
    if(a4[i].checked) {
      if(a4[i].value == 'inland taipan') {
        correct++;
        break;
      }
    }
  }

  var a5 = document.getElementsByName('q5');
  for(i = 0; i < a5.length; i++) {
    if(a5[i].checked) {
      if(a5[i].value == 'The carry their young in an external pouch.') {
        correct++;
        break;
      }
    }
  }

  var a6 = document.getElementsByName('q6');
  for(i = 0; i < a6.length; i++) {
    if(a6[i].checked) {
      if(a6[i].value == 'capybara') {
        correct++;
        break;
      }
    }
  }

  var a7 = document.getElementsByName('q7');
  for(i = 0; i < a7.length; i++) {
    if(a7[i].checked) {
      if(a7[i].value == 'peregrine falcon') {
        correct++;
        break;
      }
    }
  }

  var a8 = document.getElementsByName('q8');
  for(i = 0; i < a8.length; i++) {
    if(a8[i].checked) {
      if(a8[i].value == 'wildcat') {
        correct++;
        break;
      }
    }
  }

  var a9 = document.getElementsByName('q9');
  for(i = 0; i < a9.length; i++) {
    if(a9[i].checked) {
      if(a9[i].value == 'They are warm-blooded.') {
        correct++;
        break;
      }
    }
  }

  var a10 = document.getElementsByName('q10');
  for(i = 0; i < a10.length; i++) {
    if(a10[i].checked) {
      if(a10[i].value == 'Stegosaurus') {
        correct++;
        break;
      }
    }
  }

  if(correct == questions) {
    alertText = "Congratulations";
  }
  else {
    alertText = "You got " + correct + " out of " + questions + " correct!";
  }
  alert(alertText);
}