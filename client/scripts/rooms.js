var Rooms = {
  initialize: function(callback) {
    Parse.readAll(data => {
    var currentName = ""
    var tempRoomName = data.results.map(element => {
        if (element.roomname !== "" || element.roomname !== undefined){
          return element.roomname;
        }
      });
    console.log(tempRoomName);
    _.uniq(tempRoomName).forEach(element => {
        callback(element);
      });
    });
  },
  add: function() {
    RoomsView.$button.on("click", Rooms.createRoom);

  },
  createRoom: function() {
    var successCB = function() {
      console.log("created ROOM");
    }
    Parse.create(Rooms.roomData(), successCB);
    RoomsView.$select.html(" ");
    RoomsView.initialize();
    // MessagesView.$chats.html(" ");
    // MessagesView.initialize();
  },
  roomData: function(){
    return {
      username: App.username,
      text: undefined,
      roomname: $('.newRoom').val()
    }
  }
};