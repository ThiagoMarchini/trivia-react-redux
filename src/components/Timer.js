import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import action from '../actions';

class Timer extends Component {
  componentDidMount() {
    const { setTime } = this.props;
    const ONE_SECOND = 1000; // 1 second in milliseconds
    this.chronometerInterval = setInterval(() => {
      setTime({ type: 'DECREASE' });
    }, ONE_SECOND);
  }

  componentDidUpdate() {
    const maxTime = 30;
    const { setTime, time, show } = this.props;
    const ONE_SECOND = 1000; // 1 second in milliseconds
    if (time === 0 || show === false) {
      clearInterval(this.chronometerInterval);
      setTime({ type: 'TIMEOUT' });
    }
    if (time === maxTime && show === true) {
      this.chronometerInterval = setInterval(() => {
        setTime({ type: 'DECREASE' });
      }, ONE_SECOND);
    }
  }

  componentWillUnmount() {
    console.log('UNMOUNT');
    clearInterval(this.chronometerInterval);
  }

  render() {
    const { time, show } = this.props;

    return (
      <div className="chronometer">
        <h2 style={ { visibility: (show ? 'visible' : 'hidden') } }>
          {time}
        </h2>
        <br />
        <br />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setTime: (state) => dispatch(action(state)),
});

const mapStateToProps = (state) => ({
  time: state.timeout.time,
  show: state.timeout.show,
});

Timer.propTypes = {
  setTime: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
