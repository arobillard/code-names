import React from 'react';

class ConfirmNewGame extends React.Component {

  newGame = () => {
    this.props.generateCards();
    this.props.handleConfirm();
    this.props.fullTeamSwap();
  }

  cancel = () => {
    this.props.handleConfirm();
  }

  render() {
    return (
      <div className="user-team-pop-up-overlay">
        <div className="user-team-pop-up island-2 text-center">
          <h2 className="headline-4">Are you sure you want to start a new game?</h2>
          <button
            className="btn btn-blue push-r-1-2"
            onClick={this.newGame}
          >
            Confirm
          </button>
          <button
            className="btn btn-red"
            onClick={this.cancel}
          >
            Cancel
          </button>
        </div>
      </div>
    )
  }

}

export default ConfirmNewGame;