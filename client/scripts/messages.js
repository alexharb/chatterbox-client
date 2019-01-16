var Messages = {
      
  results: [],
  oldMessages: [],
  
  makeDiv: function(message) {
    var text = message.text;
    var user = message.username;
    var room = message.roomname;
    var newDiv = MessageView.render({username: user, text: text});
    Messages.oldMessages.push(message.objectId);
    return newDiv;
  }, 
  
  updateMessage: function() { 
    var oldReverse = Messages.oldMessages.reverse();
    Messages.results.forEach(function(obj) {
      if(!oldReverse.includes(obj.objectId)) {
        var text = obj.text;
        var user = obj.username;
        var room = obj.roomname;
        var newDiv = MessageView.render({username: user, text: text});
        MessagesView.$chats.prepend(newDiv);
        Messages.oldMessages.push(obj.objectId);
        
      }
    }); 
  }
};