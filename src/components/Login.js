import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import action, { fetchToken } from '../actions/index';
import ButtonSettings from './ButtonSettings';
import logo from '../trivia.png';
import '../css/Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handlechange = this.handlechange.bind(this);

    this.state = {
      name: '',
      email: '',
    };
  }

  componentDidMount() {
    const { resetScore } = this.props;
    resetScore({ type: 'RESET_SCORE' });
  }

  handlechange({ target: { value, name } }) {
    const format = RegExp(/[a-z0-9]+@[a-z0-9]+\.[a-z0-9]{2,3}(\.[a-z0-9]+)?$/);
    if (name === 'email' && format.test(value)) {
      this.setState({
        email: value,
      });
    } else if (name === 'name') {
      this.setState({
        name: value,
      });
    }
  }

  render() {
    const { name, email } = this.state;
    const { username, userToken } = this.props;
    return (
      <div className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <h2>The Game</h2>
        <form className="login-form">
          <label htmlFor="name">
            <span>Nome:</span>
            &nbsp;
            <input
              type="text"
              id="name"
              name="name"
              data-testid="input-player-name"
              onChange={ this.handlechange }
            />
          </label>
          <label htmlFor="email">
            <span>E-mail:</span>
            &nbsp;
            <input
              type="email"
              name="email"
              id="email"
              data-testid="input-gravatar-email"
              onChange={ this.handlechange }
            />
          </label>
          <nav>
            <Link
              to="/game"
              onClick={ () => username({ type: 'LOGIN', payload: { name, email } }) }
            >
              <button
                onClick={ userToken }
                disabled={ !(email && name) }
                type="submit"
                data-testid="btn-play"
              >
                Jogar
              </button>
            </Link>
            <ButtonSettings />
          </nav>
        </form>
      </div>
    );
  }
}

const MapDispatchToProps = (dispatch) => ({
  userToken: () => dispatch(fetchToken()),
  username: (values) => dispatch(action(values)),
  resetScore: (value) => dispatch(action(value)),
});

Login.propTypes = ({
  username: PropTypes.function,
}).isRequired;

export default connect(null, MapDispatchToProps)(Login);
