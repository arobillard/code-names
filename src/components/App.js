import React from 'react';
import { words } from '../helpers';
import base from '../base';
import Card from './ui-elements/Card';
import ControlBar from './ui-elements/ControlBar';
import UserListItem from './ui-elements/UserListItem';
import UserTeam from './ui-elements/UserTeam';
import ConfirmNewGame from './ui-elements/ConfirmNewGame';

class App extends React.Component {

  state = {
    cards: {},
    users: {},
    localUser: {},
    spymaster: false,
    confirmNewGame: false
  }

  wrapperRef = React.createRef();

  componentDidMount() {
    const localStorageRef = localStorage.getItem(this.props.match.params.gamecode); //first reinstate localstorage
    if (localStorageRef) {
      const savedState = JSON.parse(localStorageRef);
      this.setState({
        cards: savedState.cards,
        users: savedState.users,
        spymaster: savedState.spymaster
      });
      this.ref = base.syncState(`${this.props.match.params.gamecode}/cards`, {
        context: this,
        state: 'cards'
      });
      this.ref = base.syncState(`${this.props.match.params.gamecode}/users`, {
        context: this,
        state: 'users'
      });
    } else {
      this.ref = base.syncState(`${this.props.match.params.gamecode}/cards`, {
        context: this,
        state: 'cards'
      });
      this.ref = base.syncState(`${this.props.match.params.gamecode}/users`, {
        context: this,
        state: 'users'
      });
      // this.generateCards();
    }
    const localUser = JSON.parse(localStorage.getItem('localUser'));
    this.setState({ localUser })
  }

  componentDidUpdate() {
    localStorage.setItem(this.props.match.params.gamecode, JSON.stringify(this.state))
    localStorage.setItem('localUser', JSON.stringify(this.state.localUser))

  }

  generateCards = () => {
    const wordList = words();
    const newWordListObject = {};
    // Assign word to object
    let index = 1;
    wordList.forEach(word => {
      const wordObject = {
        word: word,
        team: 'civilian',
        revealed: false
      }
      newWordListObject[`word${index}`] = wordObject;
      index++;
    })
    // Assign team to word in object
    let redAmount = 9;
    let blueAmount = 8;
    let randoNums = [];

    let numberGenerator = function (arr) {
      if (arr.length >= 18) return;
      let newNumber = Math.floor(Math.random() * 25 + 1);
      if (arr.indexOf(newNumber) < 0) {
        arr.push(newNumber);
      }
      numberGenerator(arr);
    };
    numberGenerator(randoNums);
    for (let i = 0; i < redAmount; i++) {
      newWordListObject[`word${randoNums[i]}`].team = 'red';
    }
    randoNums.splice(0, 9)
    for (let i = 0; i < blueAmount; i++) {
      newWordListObject[`word${randoNums[i]}`].team = 'blue';
    }
    randoNums.splice(0, 8)
    newWordListObject[`word${randoNums[0]}`].team = 'assassin';
    this.setState({
      cards: newWordListObject
    });
  }

  handleNewGame = () => {
    this.setState({ confirmNewGame: true });
  }
  
  confirmNewGame = () => {
    const mainThis = this;
    if (this.state.confirmNewGame === true) {
      function handleConfirm() {
        mainThis.setState({ confirmNewGame: false });
      }
      return (
        <ConfirmNewGame
          handleConfirm={handleConfirm}
          generateCards={this.generateCards}
          fullTeamSwap={this.fullTeamSwap}
          cards={this.state.cards}
        />
        // <button onClick={handleConfirm}>Confirm</button>
      )
    }
  }

  cardReveal = (key) => {
    // Get current target
    const target = key.currentTarget.getAttribute('index');
    // Grab the current list of cards
    const cards = {...this.state.cards}
    // update the selected 
    cards[target].revealed = true;
    // update state
    this.setState({
      cards: cards
    });
    console.log(cards[target].team === 'assassin')
  }

  spymasterSwitch = (e) => {
    if(e.currentTarget.checked) {
      this.setState({ spymaster: true });
    } else {
      this.setState({ spymaster: false });
    }
  }

  userSpymasterSwitch = (userName) => {
    const spymaster = this.state.users[userName].spymaster;
    if (spymaster) {
      const users = { ...this.state.users }
      // update the selected 
      users[userName].spymaster = false;
      // update state
      this.setState({
        users: users
      });
      if (this.state.localUser.userName === userName) {
        this.setState({ spymaster: false })
      }
    } else {
      const users = { ...this.state.users }
      // update the selected 
      users[userName].spymaster = true;
      // update state
      this.setState({
        users: users
      });
      if (this.state.localUser.userName === userName) {
        this.setState({ spymaster: true })
      }
    }
  }

  getUser = () => {
    if (this.state.localUser !== null) {
      const checkLocalUser = this.state.localUser.userName;
      const checkUsers = Object.keys(this.state.users);
      var userNameInUsers = checkUsers.includes(checkLocalUser);
    }
    if (this.state.localUser === null || userNameInUsers !== true) {
      return (
        <UserTeam
          addUser={this.addUser}
          localUser={this.localUser}
          localUserDefault={this.state.localUser}
        />
      )
    }
  }

  teamRender = (color) => {
    const users = this.state.users;
    const userKeys = Object.keys(users);
    let team = {};
    userKeys.forEach(key => {
      if (users[key].team === color) {
        team[key] = users[key]
      }
    })
    if (this.state.localUser === null) {
      return (
        Object.keys(team).map(key => (
          <UserListItem
            key={key}
            user={team[key]}
            localUser={false}
            deleteUser={this.deleteUser}
            switchTeam={this.switchTeam}
            spymaster={this.state.users[key].spymaster}
            userSpymasterSwitch={this.userSpymasterSwitch}
          />
        ))
      )
    } else {
        return (
          Object.keys(team).map(key => (
            <UserListItem
              key={key}
              user={team[key]}
              localUser={this.state.localUser.userName === key}
              deleteUser={this.deleteUser}
              switchTeam={this.switchTeam}
              spymaster={this.state.users[key].spymaster}
              userSpymasterSwitch={this.userSpymasterSwitch}
            />
          ))
        )
    }
  }

  teamScore = (team) => {
    const cards = this.state.cards;
    const cardKeys = Object.keys(cards);
    let count = 0;
    cardKeys.forEach(key => {
      if (cards[key].team === team && cards[key].revealed === false) {
        
        count++;
      }
    })
    // if (count === 0) {
    //   console.log(`${team} wins!`)
    // }
    return (
      <span className="score">{count}</span>
    )
  }

  addUser = (user) => {
    // localUser
    this.setState({ localUser: user });
    // users
    const users = { ...this.state.users }
    users[user.userName] = user;
    this.setState({
      users: users
    });
  }

  deleteUser = (userName) => {
    const users = { ...this.state.users }
    users[userName] = null;
    this.setState({
      users: users
    });
  }

  fullTeamSwap = () => {
    const userKeys = Object.keys(this.state.users);
    let teamRedKeys = [];
    let teamBlueKeys = [];
    userKeys.forEach(key => {
      if (this.state.users[key].team === 'red') {
        teamRedKeys.push(key)
      } else if (this.state.users[key].team === 'blue') {
        teamBlueKeys.push(key)
      }
    })
    teamRedKeys.forEach(key => {
      this.switchTeam(key, 'red');
    })
    teamBlueKeys.forEach(key => {
      this.switchTeam(key, 'blue');
    })
  }

  switchTeam = (userName, team) => {
    // Grab the current list of cards
    const users = { ...this.state.users }
    if (team === 'red') {
      // update the selected 
      users[userName].team = 'blue';
      // update state
      this.setState({
        users: users
      });
    } else {
      // update the selected 
      users[userName].team = 'red';
      // update state
      this.setState({
        users: users
      });
    }
  }

  render() {
    return (
      <>
      <div ref={this.wrapperRef} className="gameboard wrapper gutter spread-top spread-bottom">
        <section className={`cards${this.state.spymaster ? ' spymaster' : ''}`}>
          {Object.keys(this.state.cards).map(key => (
            <Card
              key={key}
              index={key}
              data={this.state.cards[key]}
              cardReveal={this.cardReveal}
              spymaster={this.state.spymaster}
            />
          ))}
        </section>
        <aside className="info">
          <div className="team-card team-red island push">
            <div className="team-header">
              <h2 className="headline-6">Team Red</h2>
              {this.teamScore('red')}
            </div>
            {this.teamRender('red')}
          </div>
          <div className="team-card team-blue island push">
            <div className="team-header">
              <h2 className="headline-6">Team Blue</h2>
              {this.teamScore('blue')}
            </div>
            {this.teamRender('blue')}
          </div>
          <ControlBar
            gamecode={this.props.match.params.gamecode}
            spymasterSwitch={this.spymasterSwitch}
            handleNewGame={this.handleNewGame}
            spymaster={this.state.spymaster}
          />
        </aside>
      </div>
      {this.getUser()}
      {this.confirmNewGame()}
      </>
    )
  }

}

export default App;