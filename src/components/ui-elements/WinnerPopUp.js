import React from 'react';

class WinnerPopUp extends React.Component {

  capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);;
  }

  teamName = () => {
    const teamName = this.capitalize(this.props.team);
    console.log(teamName)
    if (teamName === 'Assassin') {
      return (
        <>
          <h2 className="headline-4">Oh no! You picked the Assassin!</h2>
          <p>Unfortunately, this means your team has lost the game. Would you like to start a new game?</p>
        </>
      )
    } else {
      return (
        <>
          <h2 className="headline-4">{teamName} Team Wins!</h2>
          <p>Congratulations! Would you like to start a new game?</p>
        </>
      )
    }
  }

  newGame = () => {
    this.props.clearSpymasters()
    this.props.generateCards();
    this.props.handleConfirm();
    if (this.props.cards.word1 !== undefined) {
      this.props.fullTeamSwap();
    }
  }

  cancel = () => {
    this.props.handleConfirm();
  }

  render() {
    return (
      <div className="user-team-pop-up-overlay">
        <div className="user-team-pop-up island-2 text-center">
          {this.teamName()}
          <button
            className="btn btn-blue push-r-1-2"
            onClick={this.newGame}
          >
            New Game
          </button>
          <button
            className="btn btn-red"
            onClick={this.cancel}
          >
            View Board
          </button>
        </div>
      </div>
    )
  }

}

export default WinnerPopUp;