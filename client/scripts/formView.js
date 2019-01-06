var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);

  },
  handleSubmit: function(event) {
    var $message = $('#message');
    event.preventDefault();

    var message = {
      username: App.username,
      text: $message.val(),
      roomname: 'AndrewNewRoom'
    };
    var successCB = function() {
      console.log('successful! :) ')
    };
    Parse.create(message, successCB);
    MessagesView.$chats.html(" ");
    MessagesView.initialize();
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};