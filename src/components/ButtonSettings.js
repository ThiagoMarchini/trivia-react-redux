import React from 'react';
import { Link } from 'react-router-dom';

class ButtonSettings extends React.Component {
  render() {
    return (
      <Link
        data-testid="btn-settings"
        to="/settings"
      >
        <button type="button">
          Configuração
        </button>
      </Link>
    );
  }
}

export default ButtonSettings;
