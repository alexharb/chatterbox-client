var MessageView = {

  render: _.template(`
      <div class="chat" data-room=<%=_.escape(roomname)%>>
        <div class="username"><%=_.escape(username)%></div>
        <div><%=_.escape(text)%></div>
      </div>`)
};