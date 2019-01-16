var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
 
  initialize: function() {
    RoomsView.render();
  },

  render: function() {
    Rooms.updateRooms();
    console.log(RoomsView.$select)
    for(var i = 0; i < Rooms.roomList.length; i++) {
      var option = Rooms.render({value: Rooms.roomList.length[i],
       text: Rooms.roomList.length[i]});
      console.log(option);
      RoomsView.$select.add(option);
    }
  }

};
