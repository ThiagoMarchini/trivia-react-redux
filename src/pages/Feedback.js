import React, { Component } from 'react';
import Header from '../components/Header';
import MsgFeedback from '../components/MsgFeedback';

class Feedback extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Feedback</h1>
        <MsgFeedback />
      </div>
    );
  }
}

export default Feedback;
