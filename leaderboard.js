PlayersList = new Mongo.Collection('players');

console.log('Hello, world!');

if(Meteor.isClient) {
  console.log('Hello client.');
  Template.leaderboard.helpers({
    'player': function(){
      return 'Some text'
    }
  });
};

if(Meteor.isServer) {
  console.log('Hello server.')
};