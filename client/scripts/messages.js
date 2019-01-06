var Messages = {
  initialize: function(callback) {
    //should load all current messages
   // var html = '';
    Parse.readAll((data) => {
      var filterData = data.results.map((el) => {
        return {username: el.username,
                message: el.text};
      }).forEach(element => {
        //concating template
        // html += MessageView.render(element);
        callback(element);
      });
      //appending the template to the DOM
    //  callback(html);
    })
  }
};


