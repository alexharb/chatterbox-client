var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $option: $('option'),
  
  values: [],
  initialize: function() {
    RoomsView.render();
    RoomsView.$button.on('click', function() {
      var roomName = prompt("Please enter your name", "");
      if(roomName !== '') {
        RoomsView.renderRoom(roomName);
      }
    });
    RoomsView.$select.change(function() {
      var value = $(this).val();
      MessagesView.filterMessage(value);
    });
  },

  render: function() {
    Rooms.updateRooms();
    for(var i = 0; i < Rooms.roomList.length; i++) {
      var option = RoomsView.make({value: Rooms.roomList[i],
      text: Rooms.roomList[i]});
      if(!RoomsView.values.includes(_.escape(Rooms.roomList[i]))) {
        RoomsView.$select.append(option);
        RoomsView.values.push(_.escape(Rooms.roomList[i]))
      }
    }
  },
  
  renderRoom: function(roomName) {
    Rooms.roomList.push(_.escape(roomName));
    RoomsView.render();
  },
  
  make: _.template(`<option value="<%=_.escape(value)%>">
    <%=_.escape(text)%>
    </option>`)
};
