import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Ranking extends Component {
  render() {
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    const orderedRanking = ranking.sort((a, b) => b.score - a.score);
    console.log(orderedRanking);
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        {orderedRanking.map((entry, index) => (
          <div className="ranking-player" key={ index }>
            <img src={ entry.picture } alt="player" />
            <p data-testid={ `player-name-${index}` }>{entry.name}</p>
            <p data-testid={ `player-score-${index}` }>{entry.score}</p>
          </div>
        ))}
        <Link to="/" data-testid="btn-go-home">
          <button type="button">Jogar novamente</button>
        </Link>
      </div>
    );
  }
}
