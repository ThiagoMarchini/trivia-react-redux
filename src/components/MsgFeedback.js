import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MsgFeedback extends Component {
  render() {
    const { assertions, score } = this.props;
    const numberOfHits = 3;
    return (
      <div>
        <section data-testid="feedback-text">
          {assertions < numberOfHits
          && <p data-testid="feedback-text">Podia ser melhor...</p>}
          {assertions >= numberOfHits
          && <p data-testid="feedback-text">Mandou bem!</p>}
          <h3>Placar:</h3>
          <p data-testid="feedback-total-score">{ String(score) }</p>
          <h3>Acertos:</h3>
          <p data-testid="feedback-total-question">{ assertions }</p>
        </section>
        <Link to="/" data-testid="btn-play-again">
          <button type="button">Jogar novamente</button>
        </Link>
        &nbsp;
        <Link to="/ranking" data-testid="btn-ranking">
          <button type="button">Ver Ranking</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  assertions: state.timeout.assertions,
  score: state.timeout.score,
});

MsgFeedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(MsgFeedback);
