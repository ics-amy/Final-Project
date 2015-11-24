/**
 * Created by amyli on 11/15/15.
 */

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
  Template.scores.helpers({
    'user': function () {
      return Quiz.find({}, {score: -1, name: 1});
    }
  });
}


if(Meteor.isServer){

}


