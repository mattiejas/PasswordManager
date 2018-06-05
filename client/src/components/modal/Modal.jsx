import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import classes from './Modal.scss';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animateHide: false,
      animateShow: true,
    };
  }
  componentDidMount() {
    setTimeout(() => this.setState({
      animateShow: false,
    }), 1000);
  }
  hideModal() {
    this.setState({
      animateHide: true,
    }, () => {
      setTimeout(() => {
        this.setState({
          animateHide: false,
          animateShow: true,
        });
        this.props.hide();
      }, 300);
    });
  }
  render() {
    if (this.props.hidden) {
      return null;
    }

    return (
      <div
        className={cn(classes.modal, this.state.animateHide ? classes.hidden : null, this.state.animateShow ? classes.hidden : classes.show)}
        onClick={() => this.hideModal()}
        onKeyPress={() => this.hideModal()}
        tabIndex="-1"
        role="button"
      >
        <div className={classes.modal__content}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  hidden: PropTypes.bool,
  hide: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  hidden: false,
};

export default Modal;
