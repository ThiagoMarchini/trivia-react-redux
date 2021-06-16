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
    const { seconds } = this.state;
    this.chronometerInterval = setInterval(() => {
      console.log('interval rodando');
      if (seconds === 0) {
        this.setState((state) => ({
          seconds: 59,
          minutes: state.minutes - 1,
        }));
      } else {
        this.setState((state) => ({ seconds: state.seconds - 1 }));
      }
    }, ONE_SECOND);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.seconds === 0) {
      clearInterval(this.chronometerInterval);
      alert('ACABOU O TTEMPO');
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
