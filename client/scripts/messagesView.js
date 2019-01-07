var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //should load all current messages
    Messages.initialize(MessagesView.renderMessage);
    Friends.toggleStatus();
  },
  //append message to the DOM
  renderMessage: function(message) {
    if (message.text){
      var html = MessageView.render(message);
      MessagesView.$chats.append(html);
    }
  }
};