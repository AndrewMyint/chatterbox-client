
var Friends = {

  toggleStatus: function() {
      var selectedUsername = this.textContent;
      Friends.friendCollection[selectedUsername] = true;
      var usernameDiv = document.getElementsByClassName("username");
      var messageDiv = document.getElementsByClassName("message");

      for (let i = 0; i < usernameDiv.length; i++) {
        if (selectedUsername !== App.username &&
            selectedUsername === usernameDiv[i].textContent){
             usernameDiv[i].style.color = "green";
             messageDiv[i].style.color = 'green'
            }
      }
      // if (!_.contains(Friends.friendCollection, selectedUsername)) {
      //   Friends.friendCollection.push(selectedUsername);
      // }
    },
  renderFriendData: function(selectedUsername){
    Parse.readAll(data => {
      data.results.array.forEach(element => {
      });
    })
  }
};


