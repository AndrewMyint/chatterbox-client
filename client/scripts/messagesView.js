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
      message.text = _.escape(message.text);
      var html = MessageView.render(message);
      MessagesView.$chats.append(html);
    }
  }
};