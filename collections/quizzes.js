/**
 * Created by amyli on 11/15/15.
 */

Scores = new Mongo.Collection('scores');
Quiz = new Mongo.Collection('quiz');

Router.route('/quiz1page');
Router.route('/quiz2page');
Router.route('/quiz3page');
Router.route('/scorespage');
Router.route('/aboutspage');

Router.route('/', {
  template: 'home'
});

if(Meteor.isClient) {
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}


if(Meteor.isServer){

}


