import React from 'react';
import { gameCode } from '../../helpers';

class Welcome extends React.Component {
  gcInput = React.createRef();
  goToGame = (e) => {
    // stop form from submiting
    e.preventDefault();
    // get gamecode from input
    const gamecode = this.gcInput.current.value;
    //change page to the gamecode
    this.props.history.push(`/${gamecode}`);
  }

  render() {
    return (
      <div className="wrapper pad-t-b-2 gutter">
        <form className="welcome-form island-2" onSubmit={this.goToGame}>
          <h2 className="headline-4">Join or host a game!</h2>
          <p>To start a new game, simply enter a new unique <strong>Gamecode</strong> in the form below and hit <em>Start Playing</em>! If you wish to join a game someone else created, enter their <strong>Gamecode</strong> and hit <em>Start Playing</em>!</p>
          <div className="grid-input-btn">
            <input
              type="text"
              ref={this.gcInput}
              required
              placeholder="Enter Gamecode"
              defaultValue={gameCode()}
            />
            <button className="btn" type="submit">Start Playing!</button>
          </div>
        </form>
      </div>
    )
  }

}

export default Welcome;