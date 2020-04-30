import React from 'react';
import { words } from '../helpers';
import base from '../base';
import Card from './ui-elements/Card';
import ControlBar from './ui-elements/ControlBar';

class App extends React.Component {

  state = {
    cards: {},
    users: {},
    spymaster: false
  }

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
  }

  componentDidUpdate() {
    localStorage.setItem(this.props.match.params.gamecode, JSON.stringify(this.state))
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
      <div className="gameboard wrapper gutter spread-top spread-bottom">
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
          <ControlBar
            gamecode={this.props.match.params.gamecode}
            spymasterSwitch={this.spymasterSwitch}
            generateCards={this.generateCards}
            spymaster={this.state.spymaster}
          />
        </aside>
      </div>
    )
  }

}

export default App;