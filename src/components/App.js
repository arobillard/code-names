import React from 'react';
import GameBoard from './ui-elements/GameBoard';
import { words } from '../helpers';
import base from '../base';

class App extends React.Component {

  state = {
    gameData: {
      cards: {},
      users: {}
    },
    spymaster: false
  }

  componentDidMount() {
    const localStorageRef = localStorage.getItem(this.props.match.params.gamecode); //first reinstate localstorage
    if (localStorageRef) {
      const savedState = JSON.parse(localStorageRef);
      this.setState({
        gameData: savedState.gameData,
        spymaster: savedState.spymaster
      });
      this.ref = base.syncState(this.props.match.params.gamecode, {
        context: this,
        state: 'gameData'
      });
    } else {
      this.ref = base.syncState(this.props.match.params.gamecode, {
        context: this,
        state: 'gameData'
      });
      // this.generateCards();
    }
    
  }

  componentDidUpdate() {
    localStorage.setItem(this.props.match.params.gamecode, JSON.stringify(this.state))
  }

  addUserName = (e) => {
    e.preventDefault();
    console.log(e)
    console.log('sweet username!')
  }

  teamAssign = (user) => {
    console.log(user);
    // take a copy of state
    const users = { ...this.state.gameData.users }
    // create a new user
    users[user.userName] = user;
    // set state
    this.setState({ gameData: { users } })
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
      gameData: {
        cards: newWordListObject
      }
    });
  }

  cardReveal = (key) => {
    // Get current target
    const target = key.currentTarget.getAttribute('index');
    // Grab the current list of cards
    const cards = {...this.state.gameData.cards}
    // update the selected 
    cards[target].revealed = true;
    // update state
    this.setState({ gameData: { cards } })
  }

  spymasterSwitch = (e) => {
    if(e.currentTarget.checked) {
      this.setState({ spymaster: true });
    } else {
      this.setState({ spymaster: false });
    }
  }

  render() {
    return (
      <GameBoard
        appState={this.state}
        cardReveal={this.cardReveal}
        spymasterSwitch={this.spymasterSwitch}
        gamecode={this.props.match.params.gamecode}
        generateCards={this.generateCards}
        addUserName={this.addUserName}
        teamAssign={this.teamAssign}
      />
    )
  }

}

export default App;