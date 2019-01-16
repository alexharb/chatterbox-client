var MessagesView = {
  
  $chats: $('#chats'),

  initialize: function() {
    MessagesView.render();
  },
  
  
  render: function() {
    for(var i = 0; i < Messages.results.length; i++) {
      MessagesView.$chats.append(Messages.makeDiv(Messages.results[i]));
    } 
  },
  
  renderMessage: function(message) {
    var newDiv = MessageView.render({username: message.username, text: message.text});
    MessagesView.$chats.append(newDiv);
  },
  
  
};