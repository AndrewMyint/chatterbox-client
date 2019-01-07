var Messages = {
  initialize: function(callback) {
    //should load all current messages
   // var html = '';
    Parse.readAll((data) => {
      var filterData = data.results.map((el) => {
        return {username: el.username,
                text: _.escape(el.text)};
      }).forEach(element => {
        callback(element);
      });
    })
  },
  refresh: function() {

  },
  messageData : function(){
    return {
      username: App.username,
      text: $('#message').val(),
      roomname: RoomsView.$select.val()
    }
  }
};


