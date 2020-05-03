import React from 'react';
import { words } from '../helpers';
import base from '../base';
import Card from './ui-elements/Card';
import ControlBar from './ui-elements/ControlBar';
import UserListItem from './ui-elements/UserListItem';
import UserTeam from './ui-elements/UserTeam';
import ConfirmNewGame from './ui-elements/ConfirmNewGame';
import ChatFeed from './ui-elements/ChatFeed';
import WinnerPopUp from './ui-elements/WinnerPopUp';

class App extends React.Component {

  state = {
    cards: {},
    // teams: {
    //   red: {
    //     score: 9
    //   },
    //   blue: {
    //     score: 8
    //   }
    // },
    users: {},
    localUser: {},
    spymasters: {},
    chat: [],
    confirmNewGame: false,
    winner: {},
    simpleCards: false
  }

  wrapperRef = React.createRef();
  cardsSectionRef = React.createRef();

  componentDidMount() {
    const localStorageRef = localStorage.getItem(this.props.match.params.gamecode); //first reinstate localstorage
    if (localStorageRef) {
      const savedState = JSON.parse(localStorageRef);
      this.setState({
        cards: savedState.cards,
        users: savedState.users,
        spymasters: savedState.spymasters,
        simpleCards: savedState.simpleCards
      });
      this.ref = base.syncState(`${this.props.match.params.gamecode}/cards`, {
        context: this,
        state: 'cards'
      });
      this.ref = base.syncState(`${this.props.match.params.gamecode}/users`, {
        context: this,
        state: 'users'
      });
      this.ref = base.syncState(`${this.props.match.params.gamecode}/spymasters`, {
        context: this,
        state: 'spymasters'
      });
      this.ref = base.syncState(`${this.props.match.params.gamecode}/chat`, {
        context: this,
        state: 'chat'
      });
      this.ref = base.syncState(`${this.props.match.params.gamecode}/winner`, {
        context: this,
        state: 'winner'
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
      this.ref = base.syncState(`${this.props.match.params.gamecode}/spymasters`, {
        context: this,
        state: 'spymasters'
      });
      this.ref = base.syncState(`${this.props.match.params.gamecode}/chat`, {
        context: this,
        state: 'chat'
      });
      this.ref = base.syncState(`${this.props.match.params.gamecode}/winner`, {
        context: this,
        state: 'winner'
      });
      // this.generateCards();
    }
    const localUser = JSON.parse(localStorage.getItem('localUser'));
    this.setState({ localUser })
  }

  componentDidUpdate() {
    localStorage.setItem(this.props.match.params.gamecode, JSON.stringify(this.state))
    localStorage.setItem('localUser', JSON.stringify(this.state.localUser))
    localStorage.setItem('simplecards', JSON.stringify(this.state.simpleCards))
    this.spymasterCompare();
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
    if(this.state.cards.word1 === undefined) {
      this.generateCards();
    } else {
      this.setState({ confirmNewGame: true });
    }
  }
  
  confirmNewGame = () => {
    const mainThis = this;
    if (this.state.confirmNewGame === true) {
      function handleConfirm() {
        mainThis.setState({
          confirmNewGame: false,
          winner: null
        });
      }
      return (
        <ConfirmNewGame
          handleConfirm={handleConfirm}
          generateCards={this.generateCards}
          fullTeamSwap={this.fullTeamSwap}
          clearSpymasters={this.clearSpymasters}
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
    this.checkForWinner(cards[target].team);
    // console.log(cards[target].team === 'assassin')
  }

  clearSpymasters = () => {
    this.setState({ spymasters: null })
  }
  
  clearTeamSpymasters = (team) => {
    const spymasters = this.state.spymasters;
    const spymastersKeys = Object.keys(spymasters);
    spymastersKeys.forEach(keys => {
      if(spymasters[keys].team === team) {
        spymasters[keys] = null;
        this.setState({ spymasters })
      }
    })
  }

  clearMySpymaster = (userName) => {
    const spymasters = {...this.state.spymasters};
    spymasters[userName] = null;
    this.setState({ spymasters })
  }

  setAsSpymaster = (user) => {
    const userName = user.userName;
    const spymasters = {...this.state.spymaster};
    spymasters[userName] = user;
    this.setState({ spymasters });
  }

  spymasterCompare = () => {
    const localUser = this.state.localUser;
    const spymasters = this.state.spymasters;
    if (localUser !== null) {
      const userName = localUser.userName;
      if (Object.keys(spymasters).includes(userName)) {
        this.cardsSectionRef.current.classList.add('spymaster')
      } else {
        this.cardsSectionRef.current.classList.remove('spymaster')
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
            currentSpymasters={this.state.spymasters}
            clearSpymasters={this.clearSpymasters}
            clearTeamSpymasters={this.clearTeamSpymasters}
            clearMySpymaster={this.clearMySpymaster}
            setAsSpymaster={this.setAsSpymaster}
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
              currentSpymasters={this.state.spymasters}
              clearSpymasters={this.clearSpymasters}
              clearTeamSpymasters={this.clearTeamSpymasters}
              clearMySpymaster={this.clearMySpymaster}
              setAsSpymaster={this.setAsSpymaster}
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
    // if (count === 0 && cards.word1 !== undefined && this.state.winner !== team) {
    //   // this.setState({ winner: team })
    //   console.count(`${team} wins!`)
    // }
    return (
      <span className="score">{count}</span>
    )
  }

  checkForWinner = (team) => {
    const cards = this.state.cards;
    const cardKeys = Object.keys(cards);
    let count = 0;
    cardKeys.forEach(key => {
      if (cards[key].team === team && cards[key].revealed === false) {
        count++;
      }
    })
    if (count === 0) {
      this.setState({ winner: team })
    }
  }

  showWinner = () => {
    const mainThis = this;
    if (typeof this.state.winner !== 'object' && this.state.winner !== "civilian") {
      function handleConfirm() {
        mainThis.setState({ winner: null });
      }
      return (
        <WinnerPopUp
          team={this.state.winner}
          handleConfirm={handleConfirm}
          generateCards={this.generateCards}
          fullTeamSwap={this.fullTeamSwap}
          clearSpymasters={this.clearSpymasters}
          cards={this.state.cards}
        />
      )
    }
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

  simpleCardsSwitch = () => {
    if (this.state.simpleCards === true) {
      this.setState({ simpleCards: false })
    } else {
      this.setState({ simpleCards: true })
    }
  }

  addChat = (newChat) => {
    console.log(this.state.chat[0]);
    if (this.state.chat[0] === undefined) {
      const chat = [];
      chat.push(newChat);
      this.setState({ chat })
    } else {
      const chat = this.state.chat;
      chat.push(newChat);
      this.setState({ chat })
    }
  }

  render() {
    return (
      <>
      <div ref={this.wrapperRef} className="gameboard wrapper gutter spread-top spread-bottom">
        <section className="team-info grid grid-s-1 grid-m-1-2 grid-l-1-3 grid-c-gap-2">
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
          <div className="legend basic-card push island">
            <h2 className="headline-6">Legend</h2>
            <dl className="push-0">
              <div className="grid-flex-v-middle grid-flex-h-flip push-1-2">
                <dt>Spymaster Switch</dt>
                <dd className="push-0 push-r"><i className="material-icons">visibility_off</i></dd>
              </div>
              <div className="grid-flex-v-middle grid-flex-h-flip push-1-2">
                <dt>Switch Teams</dt>
                <dd className="push-0 push-r"><i className="material-icons">cached</i></dd>
              </div>
              <div className="grid-flex-v-middle grid-flex-h-flip">
                <dt>Remove User</dt>
                <dd className="push-0 push-r"><i className="material-icons">clear</i></dd>
              </div>
            </dl>
          </div>
        </section>
        <ControlBar
          gamecode={this.props.match.params.gamecode}
          handleNewGame={this.handleNewGame}
          simpleCards={this.state.simpleCards}
          simpleCardsSwitch={this.simpleCardsSwitch}
        />
        <section ref={this.cardsSectionRef} className={`cards${this.state.simpleCards ? ' simple-cards' : ''} push`}>
          {Object.keys(this.state.cards).map(key => (
            <Card
              key={key}
              index={key}
              data={this.state.cards[key]}
              cardReveal={this.cardReveal}
              currentSpymasters={this.state.spymasters}
              localUser={this.state.localUser}
              simpleCards={this.state.simpleCards}
            />
          ))}
        </section>
        <ChatFeed
          chat={this.state.chat}
          localUser={this.state.localUser}
          users={this.state.users}
          addChat={this.addChat}
        />
      </div>
      {this.getUser()}
      {this.confirmNewGame()}
      {this.showWinner()}
      </>
    )
  }

}

export default App;