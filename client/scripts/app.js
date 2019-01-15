var App = {
  $spinner: $('.spinner img'),

  username: 'anonymous',
  
  count: 0,

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    
    
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      Messages = data;
      if (App.count < 1) {
        _.once(MessagesView.initialize());
        App.count++
      }
    
      callback();
      MessagesView.updateRender();
      
      setInterval(App.fetch, 3000)
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
