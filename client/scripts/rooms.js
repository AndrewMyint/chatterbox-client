var Rooms = {
  initialize: function(callback) {
    Parse.readAll(data => {
    var currentName = ""
    var tempRoomName = data.results.map(element => {
       return element.roomname;
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