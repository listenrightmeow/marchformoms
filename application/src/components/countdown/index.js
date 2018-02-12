/*eslint no-undef: 0*/

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as modal from 'actions/modal';

import 'stylesheets/components/countdown.css';

const env = process.env;

class Countdown extends Component {
  constructor(props) {
    super(props);

    this.countdown = this.countdown.bind(this);
  }

  componentDidUpdate() {
    if (+new Date < +new Date(this.props.event.data.start_time)) {
      this.countdown();
    }
  }

  countdown() {
    setTimeout(() => {
      this.props.actions.tick([s = [86400000, 3600000, 60000, 1000]][0].map(function(t) {
        return ('0' + [(t===s[0] && (remaining = (future - ~~(+new Date()/1000))*1000)), left = ~~(remaining/t), remaining -= left*t][1]).slice(-2);
      }).join(':'));
    }, [1000, future = +new Date(this.props.event.data.start_time)/1000][0]);
  }

  render() {
    const ctx = !!this.props.countdown ? <h1>{this.props.countdown.remaining}</h1> : null;

    return ctx;
  }
}

const mapStateToProps = state => ({
  countdown: state.countdown,
  event: state.event
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    tick: (remaining) => {
      return dispatch({
        type: 'EVENT::COUNTDOWN::TICK',
        payload: {
          remaining: remaining
        }
      });
    }
  },
  modal: bindActionCreators(modal, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Countdown);
