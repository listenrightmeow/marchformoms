import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from 'actions/modal';

import 'stylesheets/modal/global.css';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.props = props;
    this.close = this.close.bind(this);
  }

  close(event) {
    if (!!/(close)/.test(event.currentTarget.id) || event.currentTarget === event.target) {
      this.props.actions.trigger('EVENT::MODAL::ACTION', { active: false });
    } else {
      return false;
    }
  }

  lock(active) {
    const body = document.querySelector('body');
    body.style.overflow = !!active ? 'hidden' : 'scroll';
  }

  render() {
    const action = !this.props.active ? 'close' : 'open';
    this.lock(this.props.active);

    return (
      <section id="modal" className={action} onClick={this.close}>
        <article>
          asdfadsf
        </article>
      </section>
    )
  }
}

Modal.propTypes = {};

const mapStateToProps = (state) => {
  return {
    action: state.modal.data.action,
    active: state.modal.data.active,
    bulk: state.modal.data.bulk,
    confirm: state.modal.data.confirm,
    id: state.modal.data.id,
    title: state.modal.data.title
  }
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
