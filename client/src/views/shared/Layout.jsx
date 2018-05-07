import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from '../../components/sidebar/Sidebar';

const Layout = ({ children }) => (
  <div>
    <Sidebar />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Layout;
