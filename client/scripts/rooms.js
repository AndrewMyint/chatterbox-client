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
    RoomsView.$button.on("click", function() {

    })
  }
};