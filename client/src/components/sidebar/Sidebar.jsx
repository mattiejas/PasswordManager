import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Button from '../button/Button';

import classes from './Sidebar.scss';

const Sidebar = () => (
  <div className={classes.sidebar}>
    <Link to="/" href="/" className={classes.title}>
      Password Manager
    </Link>
    <NavLink to="/test" href="/test" activeClassName={classes.active}><span>Test</span></NavLink>
    <Button title="Open Database" />
  </div>
);

export default Sidebar;
