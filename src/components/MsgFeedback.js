import React, { Component } from 'react';

class MsgFeedback extends Component {
  render() {
    const { feedback } = this.state;
    const numberOfHits = 3;
    return (
      <section>
        {feedback < numberOfHits
          && <p data-testid="feedback-text">Podia ser melhor...</p>}
        {feedback >= numberOfHits
          && <p data-testid="feedback-text">Mandou bem!</p>}
      </section>
    );
  }
}

export default MsgFeedback;
