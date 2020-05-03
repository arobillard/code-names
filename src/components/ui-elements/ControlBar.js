import React from 'react';

class ControlBar extends React.Component {

  render() {
    return (
      <div className="control-bar">
        <div className="basic-card island">
          <h2 className="headline-6">Game Settings</h2>
          <p><span className="bold">Gamecode:</span> <em className="gamecode">{this.props.gamecode}</em></p>
          <div className="switch push">
            <label>
              <strong>Simple Cards:</strong>
              <input onChange={this.props.simpleCardsSwitch} type="checkbox" checked={this.props.simpleCards} />
              <span className="lever"></span>
            </label>
          </div>
          <button className="btn" onClick={this.props.handleNewGame}>New Game</button>
        </div>
      </div>
    )
  }

}

export default ControlBar;