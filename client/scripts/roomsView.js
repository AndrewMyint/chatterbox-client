var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),


  initialize: function() {
   Rooms.initialize(RoomsView.renderRoom);
   Rooms.add();
   Rooms.renderSelectedRoom();
  },
  renderRoom: function(room) {
    var option = '<option>' + room + '</option>';
    // <option>room name</option>
    RoomsView.$select.append(option);
  }

};
//RoomsView.renderRoom(element.roomname);