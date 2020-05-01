import React from 'react';

class UserListItem extends React.Component {

  handleDeleteUser = () => {
    const userName = this.props.user.userName;
    this.props.deleteUser(userName);
  }
  
  handleSwitchTeam = () => {
    const userName = this.props.user.userName;
    const team = this.props.user.team;
    this.props.switchTeam(userName, team);
  }

  render() {
    return (
      <div className={`user${this.props.localUser ? ' local-user' : ''} push-1-2`}>
        <span className="profile-picture inline-block push-r-1-2"></span>
        <strong className="username spread-right">{this.props.user.userName}</strong>
        <button className="push-r-1-2" onClick={this.handleSwitchTeam}>
          <i className="material-icons">cached</i>
        </button>
        <button onClick={this.handleDeleteUser}>
          <i className="material-icons">clear</i>
        </button>
      </div>
    )
  }

}

export default UserListItem;