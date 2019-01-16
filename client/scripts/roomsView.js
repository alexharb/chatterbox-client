var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  values: [],
  initialize: function() {
    RoomsView.render();
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
  
  make: _.template(`<option value="<%=_.escape(value)%>">
    <%=_.escape(text)%>
    </option>`)
};
