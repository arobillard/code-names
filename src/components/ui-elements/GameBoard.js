import React from 'react';
import Card from './Card';
import ControlBar from './ControlBar';
import UserTeam from './UserTeam';

class GameBoard extends React.Component {

  // teamRender = (color) => {
  //   const users = this.props.appState.gameData.users;
  //   const userKeys = Object.keys(users);
  //   let team = {};
  //   userKeys.forEach(key => {
  //     if (users[key].team === color) {
  //       team[key] = users[key]
  //     }
  //   })
    
  //   return (
  //     Object.keys(team).map(key => (
  //       <p key={key}>{key}</p>
  //     ))
  //   )
  // }

  renderCards = () => {
    const data = this.props.appState.gameData;
    console.log(data);
    // if (data) {
    //   console.log('cards exist!');
    // }
    // return (
    //   Object.keys(appState.gameData.cards).map(key => (
    //     <Card
    //       key={key}
    //       index={key}
    //       data={appState.gameData.cards[key]}
    //       cardReveal={this.props.cardReveal}
    //       spymaster={appState.spymaster}
    //     />
    //   ))
    // )
  }

  render() {
    const appState = this.props.appState;
    return (
      <>
      <div className="wrapper relative">
        <div className="gameboard gutter spread-top spread-bottom">
          <section className={`cards${appState.spymaster ? ' spymaster' : ''}`}>
              {Object.keys(appState.gameData.cards).map(key => (
                <Card
                  key={key}
                  index={key}
                  data={appState.gameData.cards[key]}
                  cardReveal={this.props.cardReveal}
                  spymaster={appState.spymaster}
                />
              ))}
          </section>
          <aside className="info">
            <ControlBar
              gamecode={this.props.gamecode}
              spymasterSwitch={this.props.spymasterSwitch}
              generateCards={this.props.generateCards}
              spymaster={appState.spymaster}
            />
            {/* <div>
              <h3 className="headline-6">Team Red</h3>
              {this.teamRender('red')}
            </div>
            <div>
              <h3 className="headline-6">Team Blue</h3>
              {this.teamRender('blue')}
            </div> */}
          </aside>
        </div>
      </div>
      {/* <UserTeam
        addUserName={this.props.addUserName}
        teamAssign={this.props.teamAssign}
      /> */}
      </>
    )
  }

}

export default GameBoard;