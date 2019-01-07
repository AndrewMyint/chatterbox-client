var Rooms = {
  initialize: function(callback) {
    Parse.readAll(data => {
    var currentName = ""
    var tempRoomName = data.results.map(element => {
        if (element.roomname !== "" && element.roomname !== undefined){
          return element.roomname.trim();
        }
      });
       console.log(_.uniq(tempRoomName));
    _.uniq(tempRoomName).forEach(element => {callback(element);});
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
  renderSelectedRoom: function() {
    RoomsView.$select.on('change', function(){
      var selectedRoom = this.value;
      Parse.readAll(data => {
        var filterSelectedRoom = data.results.filter(function(element){
          return element.roomname.trim() === selectedRoom;
        })
        MessagesView.$chats.html(" ");
        filterSelectedRoom.forEach(element => {
          MessagesView.renderMessage(element);
        })
      })
    })
  },
  roomData: function(){
    return {
      username: App.username,
      text: undefined,
      roomname: $('.newRoom').val()
    }
  }
};