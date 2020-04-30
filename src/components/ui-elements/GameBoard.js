import React from 'react';
import Card from './Card';
import ControlBar from './ControlBar';

class GameBoard extends React.Component {

  render() {
    const appState = this.props.appState;
    return (
      <div className="gameboard wrapper gutter spread-top spread-bottom">
        <section className={`cards${appState.spymaster ? ' spymaster' : ''}`}>
          {/* {Object.keys(appState.cards).map(key => (
            <Card
              key={key}
              index={key}
              data={appState.cards[key]}
              cardReveal={this.props.cardReveal}
              spymaster={appState.spymaster}
            />
          ))} */}
        </section>
        <aside className="info">
          <ControlBar
            gamecode={this.props.gamecode}
            spymasterSwitch={this.props.spymasterSwitch}
            generateCards={this.props.generateCards}
            spymaster={appState.spymaster}
          />
        </aside>
      </div>
    )
  }

}

export default GameBoard;