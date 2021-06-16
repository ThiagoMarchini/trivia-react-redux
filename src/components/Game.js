import React, { Component } from 'react';
import Header from './Header';
import Quiz from './Quiz';
import Timer from './Timer';

class Game extends Component {
  render() {
    return (
      <div>
        <Header />
        <Quiz />
        <Timer />
      </div>
    );
  }
}

export default Game;
