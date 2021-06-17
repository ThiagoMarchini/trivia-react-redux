import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MsgFeedback extends Component {
  render() {
    // const { feedback } = this.props;
    const numberMax = 10;
    const feedback = Math.floor(Math.random() * numberMax);
    const numberOfHits = 3;
    return (
      <>
        <section data-testid="feedback-text">
          {feedback < numberOfHits
          && <p data-testid="feedback-text">Podia ser melhor...</p>}
          {feedback >= numberOfHits
          && <p data-testid="feedback-text">Mandou bem!</p>}
        </section>
        <Link to="/" data-testid="btn-play-again">
          {' '}
          <button type="button">Jogar novamente</button>
        </Link>
        <Link to="/ranking" data-testid="btn-ranking">
          {' '}
          <button type="button">Ver Ranking</button>
        </Link>
      </>
    );
  }
}

export default MsgFeedback;
