var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    var $message = $('#message');
    event.preventDefault();

    // How can we check for the structure of what the server is expecting in the body??
    // Server needs roomname, message?
    // Data sent to server should be an object


    var newMessage = {message: $message.val()};
    console.log(newMessage)
    console.log('click!');
    var successCB = function() {
      console.log('successful! :) ')
    };

    Parse.create(newMessage, successCB);
    // FormView.setStatus();

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};