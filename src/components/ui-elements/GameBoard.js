import React from 'react';
import Card from './Card';
import ControlBar from './ControlBar';
import UserTeam from './UserTeam';
import UserListItem from './UserListItem';

class GameBoard extends React.Component {

  state = {
    localUser: null
  }

  getUser = () => {
    if (this.state.localUser !== null && this.props.appState.gameData.users !== undefined) {
      const checkLocalUser = this.state.localUser.userName;
      const checkUsers = Object.keys(this.props.appState.gameData.users);
      var userNameInUsers = checkUsers.includes(checkLocalUser);
      console.log(userNameInUsers)
    }
    if ((this.state.localUser === null || this.props.appState.gameData.users === undefined) && userNameInUsers !== true ) {
      return (
        <UserTeam
          addUserName={this.props.addUserName}
          teamAssign={this.props.teamAssign}
          localUser={this.localUser}
          localUserDefault={this.state.localUser}
        />
      )
    }
  }

  localUser = (user) => {
    this.setState({ localUser: user })
  }

  teamRender = (color) => {
    const users = this.props.appState.gameData.users;
    if (users !== undefined) {
      const userKeys = Object.keys(users);
      let team = {};
      userKeys.forEach(key => {
        if (users[key].team === color) {
          team[key] = users[key]
        }
      })
      return (
        Object.keys(team).map(key => (
          <UserListItem
            key={key}
            user={team[key]}
            localUser={this.state.localUser.userName === key}
            deleteUser={this.props.deleteUser}
            switchTeam={this.props.switchTeam}
          />
        ))
      )
    }
  }

  renderCards = () => {
    const appState = this.props.appState;
    if (appState.gameData.cards !== undefined) {
      return (
        Object.keys(appState.gameData.cards).map(key => (
          <Card
            key={key}
            index={key}
            data={appState.gameData.cards[key]}
            cardReveal={this.props.cardReveal}
            spymaster={appState.spymaster}
          />
        ))
      )
    }
  }

  componentDidMount() {
    const localStorageRef = localStorage.getItem('localUser'); //first reinstate localstorage
    if (localStorageRef) {
      const savedState = JSON.parse(localStorageRef);
      this.setState({ localUser: savedState });
    }

  }

  componentDidUpdate() {
    localStorage.setItem('localUser', JSON.stringify(this.state.localUser))
  }

  render() {
    const appState = this.props.appState;
    return (
      <>
      <div className="wrapper relative">
        <div className="gameboard gutter spread-top spread-bottom">
          <section className={`cards${appState.spymaster ? ' spymaster' : ''}`}>
            {this.renderCards()}
          </section>
          <aside className="info">
            <div className="team-card team-red island push">
              <h3 className="headline-6">Team Red</h3>
              {this.teamRender('red')}
            </div>
            <div className="team-card team-blue island push">
              <h3 className="headline-6">Team Blue</h3>
              {this.teamRender('blue')}
            </div>
            <ControlBar
              gamecode={this.props.gamecode}
              spymasterSwitch={this.props.spymasterSwitch}
              generateCards={this.props.generateCards}
              spymaster={appState.spymaster}
            />
          </aside>
        </div>
      </div>
      {this.getUser()}
      </>
    )
  }

}

export default GameBoard;