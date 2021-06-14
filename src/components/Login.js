import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();

    this.handlechange = this.handlechange.bind(this);

    this.state = {
      name: '',
      email: '',
    };
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
    return (
      <form>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            id="name"
            name="name"
            data-testid="input-player-name"
            onChange={ this.handlechange }
          />
        </label>
        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            name="email"
            id="email"
            data-testid="input-gravatar-email"
            onChange={ this.handlechange }
          />
        </label>
        <button
          disabled={ !(email && name) }
          type="submit"
          data-testid="btn-play"
        >
          Jogar
        </button>
      </form>
    );
  }
}

export default Login;
