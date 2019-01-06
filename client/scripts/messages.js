var Messages = {
  initialize: function(callback) {
    //should load all current messages
   // var html = '';
    Parse.readAll((data) => {
      var filterData = data.results.map((el) => {
        return {username: el.username,
                message: _.escape(el.text)};
      }).forEach(element => {
        callback(element);
      });
    })
  },
  refresh: function() {

  }
};


