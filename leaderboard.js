PlayersList = new Mongo.Collection('players');

console.log('Hello, world!');

if(Meteor.isClient) {
  console.log('Hello client.');
  Template.leaderboard.helpers({
    'player': function(){
      return PlayersList.find()
    }
  });

  Template.leaderboard.events({
    'click .player': function() {
      var playerId = this._id;
      Session.set('selectedPlayer', playerId);
    }
  });

};

if(Meteor.isServer) {
  console.log('Hello server.')
};

