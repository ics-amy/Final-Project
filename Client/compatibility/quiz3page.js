/**
 * Created by amyli on 11/25/15.
 */

/**
 * Created by amyli on 11/24/15.
 */

grader3 = function () {
  var questions = 10;
  var correct = 0;
  var alertText;
  var i;

  var a1 = document.getElementsByName('q1');
  for(i = 0; i < a1.length; i++) {
    if(a1[i].checked) {
      if(a1[i].value == 'triskaidekaphobia') {
        correct++;
        break;
      }
    }
  }

  var a2 = document.getElementsByName('q2');
  for(i = 0; i < a2.length; i++) {
    if(a2[i].checked) {
      if(a2[i].value == 'Ancient Greek') {
        correct++;
        break;
      }
    }
  }

  var a3 = document.getElementsByName('q3');
  for(i = 0; i < a3.length; i++) {
    if(a3[i].checked) {
      if(a3[i].value == 'Crowds, public places, or open areas') {
        correct++;
        break;
      }
    }
  }

  var a4 = document.getElementsByName('q4');
  for(i = 0; i < a4.length; i++) {
    if(a4[i].checked) {
      if(a4[i].value == 'The sea') {
        correct++;
        break;
      }
    }
  }

  var a5 = document.getElementsByName('q5');
  for(i = 0; i < a5.length; i++) {
    if(a5[i].checked) {
      if(a5[i].value == 'Wooden objects or forests') {
        correct++;
        break;
      }
    }
  }

  var a6 = document.getElementsByName('q6');
  for(i = 0; i < a6.length; i++) {
    if(a6[i].checked) {
      if(a6[i].value == 'Cats') {
        correct++;
        break;
      }
    }
  }

  var a7 = document.getElementsByName('q7');
  for(i = 0; i < a7.length; i++) {
    if(a7[i].checked) {
      if(a7[i].value == 'England or anything English') {
        correct++;
        break;
      }
    }
  }

  var a8 = document.getElementsByName('q8');
  for(i = 0; i < a8.length; i++) {
    if(a8[i].checked) {
      if(a8[i].value == 'Missiles or bullets') {
        correct++;
        break;
      }
    }
  }

  var a9 = document.getElementsByName('q9');
  for(i = 0; i < a9.length; i++) {
    if(a9[i].checked) {
      if(a9[i].value == 'Airplanes') {
        correct++;
        break;
      }
    }
  }

  var a10 = document.getElementsByName('q10');
  for(i = 0; i < a10.length; i++) {
    if(a10[i].checked) {
      if(a10[i].value == 'Being or falling in love') {
        correct++;
        break;
      }
    }
  }
  return correct;
}

if(Meteor.isClient) {
  Template.quiz3page.events({
    "submit .quiz3": function (event) {
      //Prevent default browser form submit
      event.preventDefault();
      
      var score = grader3();
      if (!Meteor.userId()) {
        alert("You got " + score+ " out of 10 correct!");
        throw new Meteor.Error("not-authorized");
      }

      var currentuser = Meteor.user().username;
      var taken = Scores.find({username: currentuser, quiz3:1}).fetch();
      var userquery = Scores.find({username: currentuser}).fetch();
      if(userquery.length == 0) {
        alert("You got " + score+ " out of 10 correct!");
        Scores.insert({
          username: Meteor.user().username,
          quiz3: 1,
          score: score,
        });
      }
      else if(taken.length == 0) {
        alert("You got " + score+ " out of 10 correct! Your total score will be updated.");
        Scores.update({_id:Scores.findOne({username:currentuser})['_id']}, {$inc: {score: score}});
        Scores.update({_id:Scores.findOne({username:currentuser})['_id']}, {$set: {quiz3: 1}});
      }
      else {
        alert("You have already taken this quiz before. Only your first score will be added to your total score.");
      }
    },
  });
}


function reset() {
  document.getElementsByName("submit").reset();
}