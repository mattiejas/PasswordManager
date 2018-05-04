import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.scss';

const Button = ({ title }) => (
  <button className={classes.button}>{title}</button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
