import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';

class MsgFeedback extends Component {
  saveRanking() {
    const { email, name, score } = this.props;
    const userEmail = md5(email).toString();
    const userImage = `https://www.gravatar.com/avatar/${userEmail}`;
    const ranking = localStorage.getItem('ranking');
    const oldRanking = JSON.parse(ranking);
    console.log(oldRanking);
    const newPlay = {
      name,
      score,
      picture: userImage,
    };
    if (oldRanking) {
      const newRanking = [...oldRanking, newPlay];
      localStorage.removeItem('ranking');
      localStorage.setItem('ranking', JSON.stringify(newRanking));
    }
    if (!oldRanking) {
      localStorage.setItem('ranking', JSON.stringify([newPlay]));
    }
  }

  render() {
    this.saveRanking();
    const { assertions, score } = this.props;
    const numberOfHits = 3;
    return (
      <div>
        <section data-testid="feedback-text">
          {assertions < numberOfHits
          && <h3 data-testid="feedback-text">Podia ser melhor...</h3>}
          {assertions >= numberOfHits
          && <p data-testid="feedback-text">Mandou bem!</p>}
          <h2>
            Placar:
            &nbsp;
            <span data-testid="feedback-total-score">
              { String(score) }
            </span>
          </h2>
          <h2>
            Acertos:
            &nbsp;
            <span data-testid="feedback-total-question">
              { assertions }
            </span>
          </h2>
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
  email: state.login.email,
  name: state.login.name,
  score: state.timeout.score,
});

MsgFeedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(MsgFeedback);
