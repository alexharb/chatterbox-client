var MessagesView = {
  
  $chats: $('#chats'),

  initialize: function() {
    MessagesView.render();
    $('.username').on('click', function() {
      console.log(this);
      Friends.friendsList.push(this);
      $(this).addClass('friend'); 
      Friends.toggleStatus($(this).text());
    });
  },
  
  
  render: function() {
    for(var i = 0; i < Messages.results.length; i++) {
      MessagesView.$chats.append(Messages.makeDiv(Messages.results[i]));
    } 
  },
  
  renderMessage: function(message) {
    var newDiv = MessageView.render({username: message.username, text: message.text});
    MessagesView.$chats.append(newDiv);
    $('.username').on('click', function() {
      console.log(this);
      Friends.friendsList.push(this);
      $(this).addClass('friend'); 
    });
  },
  
  filterMessage: function(value) {
    var roomData = $(`*[data-room="${value}"]`);
    MessagesView.$chats.empty();
    MessagesView.$chats.prepend(roomData);
  },
};