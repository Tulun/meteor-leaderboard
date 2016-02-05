Meteor.subscribe('thePlayers');

Template.leaderboard.helpers({
  'player': function(){
    var currentUserId = Meteor.userId();
    return PlayersList.find({}, {sort: {score: -1, name: 1} });
  },

  'selectedClass': function() {
    var playerId = this._id;
    var selectedPlayer = Session.get('selectedPlayer');
    if (playerId == selectedPlayer) {
      return 'selected'
    }
  },

  'showSelectedPlayer': function() {
    var selectedPlayer = Session.get('selectedPlayer');
    return PlayersList.findOne(selectedPlayer)
  }
});

Template.leaderboard.events({
  'click .player': function() {
    var playerId = this._id;
    Session.set('selectedPlayer', playerId);
  },

  'click .increment': function() {
    var selectedPlayer = Session.get('selectedPlayer');
    Meteor.call('modifyPlayerScore', selectedPlayer, 5);
  },

  'click .decrement': function() {
    var selectedPlayer = Session.get('selectedPlayer');
    Meteor.call('modifyPlayerScore', selectedPlayer, -5);
  },


  'click .remove': function() {
    var selectedPlayer = Session.get('selectedPlayer');
    Meteor.call('removePlayerData', selectedPlayer);
  }
});

Template.addPlayerForm.events({

  'submit form': function(event) {
    event.preventDefault();
    var playerName = event.target.playerName.value;
    var currentUserId = Meteor.userId();
    Meteor.call('insertPlayerData', playerName);
  }

});