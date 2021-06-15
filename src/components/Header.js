import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';

class Header extends Component {
  constructor(props) {
    super(props);

    this.gravatar = this.gravatar.bind(this);
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

  render() {
    const { username } = this.props;
    return (
      <header>
        <h3 data-testid="header-player-name">{username}</h3>
        <div>
          {this.gravatar()}
        </div>
        <div data-testid="header-score">0</div>
      </header>
    );
  }
}

const MapStateToProps = (state) => ({
  email: state.login.email,
  username: state.login.name,
});

Header.propTypes = ({
  email: PropTypes.string,
  username: PropTypes.string,
}).isRequired;

export default connect(MapStateToProps)(Header);
