import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import '../css/Header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.gravatar = this.gravatar.bind(this);
    this.saveScore = this.saveScore.bind(this);
  }

  gravatar() {
    const { email } = this.props;
    const userEmail = md5(email).toString();
    return (
      <img
        alt="user"
        data-testid="header-profile-picture"
        src={ `https://www.gravatar.com/avatar/${userEmail}` }
      />);
  }

  saveScore() {
    const { username, score, email, assertions } = this.props;
    const player = `{
      "player" : {
        "name" : "${username}",
        "assertions" : ${assertions},
        "score" : ${score},
        "email" : "${email}"
      }
    }`;
    localStorage.setItem('state', player);
    // console.log(JSON.parse(player));
  }

  render() {
    this.saveScore();
    const { username, score } = this.props;
    // const scoreString = `Placar: ${score}`;
    return (
      <header>
        {this.gravatar()}
        <div>
          <h3 data-testid="header-player-name">{username}</h3>
          <h3>
            Pontuação:
            &nbsp;
            <span data-testid="header-score">
              { String(score) }
            </span>
          </h3>
        </div>
      </header>
    );
  }
}

const MapStateToProps = (state) => ({
  assertions: state.timeout.assertions,
  score: state.timeout.score,
  email: state.login.email,
  username: state.login.name,
});

Header.propTypes = ({
  assertions: PropTypes.number,
  score: PropTypes.number,
  email: PropTypes.string,
  username: PropTypes.string,
}).isRequired;

export default connect(MapStateToProps)(Header);
