import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import action from '../actions';

class Timer extends Component {
  constructor(props) {
    super(props);

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
    const { timeout } = this.props;
    if (prevState.seconds === 1) {
      clearInterval(this.chronometerInterval);
      timeout({ type: 'TIMEOUT' });
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

const mapDispatchToProps = (dispatch) => ({
  timeout: (state) => dispatch(action(state)),
});

Timer.propTypes = {
  timeout: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Timer);
