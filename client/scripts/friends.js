var Friends = {
  friendsList: [],
  
  toggleStatus: function(name) {
    $(`div .username:contains('${name}')`).addClass('friend');
  }

};