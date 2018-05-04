import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../button/Button';

import classes from './Sidebar.scss';

const Sidebar = () => (
  <div className={classes.sidebar}>
    <Link to="/" href="/" className={classes.title}>
      Password Manager
    </Link>
    <Button title="Open Database" />
  </div>
);

export default Sidebar;
