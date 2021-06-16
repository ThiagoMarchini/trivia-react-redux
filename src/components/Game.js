import React, { Component } from 'react';
import Header from './Header';
import Timer from './Timer';

class Game extends Component {
  render() {
    return (
      <div>
        <Header />
        board game
        <Timer />
      </div>
    );
  }
}

export default Game;
