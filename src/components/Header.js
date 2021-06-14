import React, { Component } from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';

class Header extends Component {
  constructor(props) {
    super(props);

    this.gravatar = this.gravatar.bind(this);
  }

  //   A Implementação é feita baseada no e-mail. Esse email deve ser transformado em uma hash MD5 (https://br.gravatar.com/site/implement/hash/). Para gerar tal hash, recomendamos utilizar o CryptoJs.
  //  importe o MD5: import md5 from 'crypto-js/md5';
  // Converta o email do usuário: md5(emailDoUsuário).toString();
  //  basta adicionar o valor gerado no final da URL:
  // // Formato de URL necessário:
  // https://www.gravatar.com/avatar/${hash-gerada}

  gravatar() {
    const { email, name } = this.props;
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

export default connect(MapStateToProps)(Header);
