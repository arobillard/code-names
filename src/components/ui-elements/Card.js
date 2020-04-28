import React from 'react';
import CardDesign from './CardDesign';

class Card extends React.Component {
  keyHandle = (e) => {
    console.log(e.keyCode)
    if(e.keyCode === 13) {
      this.props.cardReveal(e)
    }
    if(e.keyCode === 32) {
      this.props.cardReveal(e)
    }
  }
  render() {
    const data = this.props.data;
    return (
      <div role="button" tabIndex={data.revealed ? '-1' : '0'} onKeyDown={this.keyHandle} onClick={this.props.cardReveal} index={this.props.index} className={`card${data.revealed ? ` revealed ${data.team}` : ""}${this.props.spymaster ? ` ${data.team}` : "" }`}>
        <div className="card-design-embed">
          <CardDesign />
          <p className='card-word'>{data.word}</p>
          <span className='card-word-flipped' aria-hidden="true">{data.word}</span>
        </div>
      </div>
    )
  }

}

export default Card;