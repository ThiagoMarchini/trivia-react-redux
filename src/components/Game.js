import React, { Component } from 'react';
import Header from './Header';
import Quiz from './Quiz';
import '../css/Game.css';

class Game extends Component {
  render() {
    return (
      <div>
        <Header />
        <Quiz />
      </div>
    );
  }
}

export default Game;
