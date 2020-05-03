import React from 'react';

class UserListItem extends React.Component {

  state = {
    spymaster: false
  }

  compareSpymasters = () => {
    const currentSpymastersList = Object.keys(this.props.currentSpymasters);
    if (currentSpymastersList.includes(this.props.user.userName)) {
      return true;
    } else {
      return false;
    }
  }

  handleDeleteUser = () => {
    const userName = this.props.user.userName;
    this.props.deleteUser(userName);
    this.props.clearMySpymaster(userName);
  }
  
  handleSwitchTeam = () => {
    const userName = this.props.user.userName;
    const team = this.props.user.team;
    this.props.switchTeam(userName, team);
    const currentSpymastersList = Object.keys(this.props.currentSpymasters);
    if (currentSpymastersList.includes(this.props.user.userName)) {
      this.props.clearMySpymaster(this.props.user.userName);
    }
  }
  
  handleSpymaster = () => {
    const currentSpymastersList = Object.keys(this.props.currentSpymasters);
    if (currentSpymastersList.includes(this.props.user.userName)) {
      this.props.clearMySpymaster(this.props.user.userName);
    } else {
      this.props.clearTeamSpymasters(this.props.user.team);
      this.props.setAsSpymaster(this.props.user);
    }
  }

  render() {
    return (
      <div className={`user${this.props.localUser ? ' local-user' : ''}${this.compareSpymasters() ? ' spymaster' : ''} push-1-2`}>
        <span className="profile-picture inline-block push-r-1-2"></span>
        <strong className="username spread-right">{this.props.user.userName}</strong>
        <button className="push-r-1-2 btn-spymaster" onClick={this.handleSpymaster}>
          <i className="material-icons">{this.compareSpymasters() ? 'visibility' : 'visibility_off'}</i>
        </button>
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