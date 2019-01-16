var Rooms = {
  roomList: [],
  
  updateRooms: function() {
    Messages.results.forEach(function(message) {
      if (!Rooms.roomList.includes(message.roomname)) {
        Rooms.roomList.push(_.escape(message.roomname));
      }
    })
  },
  
};