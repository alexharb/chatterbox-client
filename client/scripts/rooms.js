var Rooms = {
  roomList: [],
  
  updateRooms: function() {
    Messages.results.forEach(function(message) {
      if (!Rooms.roomList.includes(_.escape(message.roomname))) {
        Rooms.roomList.push(_.escape(message.roomname));
      }
    })
  },
  
  filterRoom: function(value) {
    
  }
  
};