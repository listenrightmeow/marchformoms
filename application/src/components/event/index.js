import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from 'actions/event';

const env = process.env;

class FbEvent extends Component {
  componentWillMount() {
    this.props.actions.event('APP::PAGE::LOAD');
  }

  render() {
    const { component: Component, pending, ...rest } = this.props;

    return (
      <Route {...rest} render={props => {
        if (!!pending) {
          // TODO: SVG loading animation herrrre
          return (
            <section>loading...</section>
          )
        } else {
          return (
            <Component {...props} />
          )
        }
      }} />
    )
  }
}

const mapStateToProps = (state) => ({
  pending: state.event.pending
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FbEvent);
