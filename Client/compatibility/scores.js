/**
 * Created by noelle_123 on 11/28/15.
 */
if(Meteor.isClient) {

  Template.scores.helpers({
    'user': function () {
      return Quiz.find({}, {sort: {score: -1}});
    }
  });
}