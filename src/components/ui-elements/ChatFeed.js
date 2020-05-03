import React from 'react';
import ChatMessage from './ChatMessage';

class ChatFeed extends React.Component {

  chatRef = React.createRef();
  chatInputRef = React.createRef();

  componentDidUpdate() {
    this.scrollChat();
  }

  scrollChat = () => {
    const chatHeight = this.chatRef.current.scrollHeight;
    this.chatRef.current.scrollTop = chatHeight;
  }

  sendChat = (e) => {
    e.preventDefault();
    if (this.chatInputRef.current.value !== '') {
      const newChat = {
        user: this.props.localUser.userName,
        team: this.props.users[this.props.localUser.userName].team,
        text: this.chatInputRef.current.value
      }
      this.props.addChat(newChat)
      this.chatInputRef.current.value = "";
    }
  }

  render() {
    return (
      <div className="chat-feed basic-card push">
        <div className="title-wrap">
          <h2 className="headline-6">Chat Feed</h2>
        </div>
        <div ref={this.chatRef} className="chat">
          {Object.keys(this.props.chat).map(key => (
            <ChatMessage
              key={key}
              user={this.props.chat[key].user}
              text={this.props.chat[key].text}
              team={this.props.chat[key].team}
              localUser={this.props.localUser}
            />
          ))}
        </div>
        <form className="message-create relative" onSubmit={this.sendChat} autoComplete="off">
          <input 
            ref={this.chatInputRef}
            id="message-box"
            name="message-box"
            placeholder="Type a codeword"
          />
          <label className="hidden" htmlFor="message-box">Input Message</label>
          <button className="btn-send" type="submit">
            <i className="material-icons">send</i>
          </button>
        </form>
      </div>
    )
  }

}

export default ChatFeed;