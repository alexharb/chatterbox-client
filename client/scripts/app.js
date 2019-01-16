var App = {
  $spinner: $('.spinner img'),

  username: 'anonymous',
  
  count: 0,

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    
    

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    setInterval(App.fetch, 3000);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      Messages.results = data.results;
      RoomsView.initialize();
      if (App.count < 1) {
        MessagesView.initialize();
        App.count++
      }
    
      callback();
      Messages.updateMessage();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
