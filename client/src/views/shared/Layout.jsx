import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from '../../components/sidebar/Sidebar';
import Modal from '../../components/modal/Modal';

import classes from './Layout.scss';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectDatabase: false,
    };
  }
  showSelectDatabaseModal() {
    this.setState({
      selectDatabase: true,
    });
  }
  hideSelectDatabaseModal() {
    this.setState({
      selectDatabase: false,
    });
  }
  render() {
    return (
      <div className={classes.layout}>
        <Sidebar showSelectDatabaseModal={() => this.showSelectDatabaseModal()} />
        <Modal hidden={!this.state.selectDatabase} hide={() => this.hideSelectDatabaseModal()}>
          test
        </Modal>
        <div className={classes.view}>{this.props.children}</div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Layout;
