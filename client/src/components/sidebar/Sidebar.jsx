import React from 'react';
import { PropTypes } from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import Icon from '@fortawesome/react-fontawesome';

import Button from '../button/Button';

import classes from './Sidebar.scss';

const Sidebar = ({ showSelectDatabaseModal }) => (
  <div className={classes.sidebar}>
    <Link to="/" href="/" className={classes.title}>
      <h1>Password Manager</h1>
    </Link>
    <NavLink to="/" href="/" exact activeClassName={classes.active}>
      <span className={classes['active-icon']}>
        <Icon icon="caret-right" />
      </span>
      <span>All items</span>
    </NavLink>
    <NavLink to="/fav" href="/fav" activeClassName={classes.active}>
      <span className={classes['active-icon']}>
        <Icon icon="caret-right" />
      </span>
      <span>Favorites</span>
    </NavLink>
    <span className={classes.header}>Categories</span>
    <hr />
    <NavLink to="/fdfs" href="/fdfs" exact activeClassName={classes.active}>
      <span className={classes['active-icon']}>
        <Icon icon="caret-right" />
      </span>
      <span>Some shit here</span>
    </NavLink>
    <span className={classes.header}>Tags</span>
    <hr />
    <Button className={classes.open} title="Open Database" onClick={() => showSelectDatabaseModal()} />
  </div>
);

Sidebar.propTypes = {
  showSelectDatabaseModal: PropTypes.func.isRequired,
};

export default Sidebar;
