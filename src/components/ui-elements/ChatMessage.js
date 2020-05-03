import React from 'react';

class ChatMessage extends React.Component {

  textRef = React.createRef();
  messageRef = React.createRef();

  componentDidMount() {
    // this.markdownifyText();
  }

  markdownifyText = () => {
    const initialText = this.props.text;
    const finalText = initialText
      .replace(" **", ' <b>')
      .replace("**", '</b>')
      .replace(" *", ' <em>')
      .replace("*", '</em>')
    this.messageRef.current.insertAdjacentHTML('beforeend', finalText)
  }

  localUserCompare = () => {
    if (this.props.localUser !== null) {
      if (this.props.localUser.userName === this.props.user) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  render() {
    return (
      <div className={`message ${this.props.team}${this.localUserCompare() ? ' local-user' : ''}`}>
        <p ref={this.messageRef} className="message-text push-0">
          <strong className="message-user">{this.props.user}: </strong>
          {this.props.text}
        </p>
        {/* <em className="message-time">18:25</em> */}
      </div>
    )
  }

}

export default ChatMessage;