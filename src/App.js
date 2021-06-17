import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import Login from './components/Login';
import Game from './components/Game';
import Ranking from './components/Ranking';
import Settings from './pages/Settings';
import Feedback from './pages/Feedback';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/game" component={ Game } />
        <Route exact path="/" component={ Login } />
        <Route exact path="/settings" component={ Settings } />
        <Route exact path="/feedback" component={ Feedback } />
        <Route exact path="/ranking" component={ Ranking } />
      </Switch>
    </div>
  );
}
