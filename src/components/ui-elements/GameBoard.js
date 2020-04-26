import React from 'react';
import Card from './Card';
import ControlBar from './ControlBar';

class GameBoard extends React.Component {

  render() {
    const state = this.props.state;
    return (
      <div className="gameboard wrapper gutter spread-top spread-bottom">
        <section className={`cards${state.spymaster ? ' spymaster' : ''}`}>
          {Object.keys(state.cards).map(key => (
            <Card
              key={key}
              index={key}
              data={state.cards[key]}
              cardReveal={this.props.cardReveal}
              spymaster={state.spymaster}
            />
          ))}
        </section>
        <aside className="info">
          <ControlBar
            gamecode={this.props.gamecode}
            spymasterSwitch={this.props.spymasterSwitch}
            generateCards={this.props.generateCards}
            spymaster={state.spymaster}
          />
        </aside>
      </div>
    )
  }

}

export default GameBoard;