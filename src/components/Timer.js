import React, { Component } from 'react';

class Timer extends Component {
  constructor() {
    super();

    this.state = {
      seconds: 30,
    };
  }

  componentDidMount() {
    const ONE_SECOND = 1000; // 1 second in milliseconds
    this.chronometerInterval = setInterval(() => {
      console.log('interval rodando');
      this.setState((state) => ({ seconds: state.seconds - 1 }));
    }, ONE_SECOND);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.seconds === 1) {
      clearInterval(this.chronometerInterval);
      // lógica após o fim do tempo
    }
  }

  componentWillUnmount() {
    console.log('UNMOUNT');
    clearInterval(this.chronometerInterval);
  }

  render() {
    const { seconds } = this.state;

    return (
      <div className="chronometer">
        <h2>
          {seconds}
        </h2>
        <br />
        <br />
      </div>
    );
  }
}

export default Timer;
