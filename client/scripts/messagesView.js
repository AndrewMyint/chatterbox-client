var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //should load all current messages

  },

  renderMessage: function(message) {
    //should add any new messages to the dom
    //render individual message
    MessagesView.$chats.append('<div>"This is a test"</div>');
    //append rendered message to the dom id chats
  }

};