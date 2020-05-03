import React from 'react';
import CardDesign from './CardDesign';

class Card extends React.Component {
  
  compareSpymasters = () => {
    const currentSpymastersList = Object.keys(this.props.currentSpymasters);
    if (this.props.localUser !== null) {
      if (currentSpymastersList.includes(this.props.localUser.userName)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  keyHandle = (e) => {
    if(e.keyCode === 13) {
      this.props.cardReveal(e)
    }
    if(e.keyCode === 32) {
      this.props.cardReveal(e)
    }
  }

  cardDesign = () => {
    if (this.props.simpleCards === false) {
      return (
        <>
          <CardDesign />
          <span className='card-word-flipped' aria-hidden="true">{this.props.data.word}</span>
        </>
      )
    }
  }
  
  render() {
    const data = this.props.data;
    return (
      <div role="button" tabIndex={data.revealed ? '-1' : '0'} onKeyDown={this.keyHandle} onClick={this.props.cardReveal} index={this.props.index} className={`card${data.revealed ? ` revealed ${data.team}` : ""}${this.compareSpymasters() ? ` ${data.team}` : ""}`}>
        <div className="card-design-embed">
          <CardDesign />
          <span className='card-word-flipped' aria-hidden="true">{this.props.data.word}</span>
          <p className='card-word'>{data.word}</p>
        </div>
      </div>
    )
  }

}

export default Card;