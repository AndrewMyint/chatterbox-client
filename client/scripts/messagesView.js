var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //should load all current messages
    Messages.initialize(MessagesView.renderMessage);
  },

  renderMessage: function(message) {
    var html = MessageView.render(message);
    MessagesView.$chats.append(html);
  }

};