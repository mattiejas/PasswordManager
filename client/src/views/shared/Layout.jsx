import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from '../../components/sidebar/Sidebar';

import classes from './Layout.scss';

const Layout = ({ children }) => (
  <div className={classes.layout}>
    <Sidebar />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Layout;
