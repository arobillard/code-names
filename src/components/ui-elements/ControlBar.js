import React from 'react';

class ControlBar extends React.Component {

  render() {
    return (
      <div className="control-bar island">
        <h2 className="headline-6">Control Bar</h2>
        <p><span className="bold">Gamecode:</span> <em className="gamecode">{this.props.gamecode}</em></p>
        <div className="switch push">
          <label>
            <strong>Spymaster:</strong>
            <input onChange={this.props.spymasterSwitch} type="checkbox" checked={this.props.spymaster ? true : false} />
            <span className="lever"></span>
          </label>
        </div>
        <button className="btn" onClick={this.props.handleNewGame}>New Game</button>
      </div>
    )
  }

}

export default ControlBar;