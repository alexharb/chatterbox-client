var MessagesView = {
  oldMessages: [],
  $chats: $('#chats'),

  initialize: function() {
    MessagesView.render();
  },
  
  
  render: function() {
    // function escapeHtml(text) {
    // 'use strict';
    // return text.replace(/[\"&'\/<>]/g, function (a) {
    //   return {
    //         '"': '&quot;', '&': '&amp;', "'": '&#39;',
    //         '/': '&#47;',  '<': '&lt;',  '>': '&gt;'
    //       }[a];
    //   });
    // }
    for(var i = 0; i < Messages.results.length; i++) {
      var text = Messages.results[i].text;
      var user = Messages.results[i].username;
      var room = Messages.results[i].roomname;
      var newDiv = MessageView.render({username: user, text: text});
      MessagesView.$chats.append(newDiv);
      MessagesView.oldMessages.push(Messages.results[i].objectId);
      
    } 
  },
  
  renderMessage: function(message) {
    var newDiv = MessageView.render({username: message.username, text: message.text});
    MessagesView.$chats.append(newDiv);
  },
  
  updateRender: function() { 
    var oldReverse = MessagesView.oldMessages.reverse();
    Messages.results.forEach(function(obj) {
      if(!oldReverse.includes(obj.objectId)) {
        var text = obj.text;
        var user = obj.username;
        var room = obj.roomname;
        var newDiv = MessageView.render({username: user, text: text});
        console.log(newDiv);
        MessagesView.$chats.prepend(newDiv);
        MessagesView.oldMessages.push(obj.objectId);
        
      }
    }); 
  }
};