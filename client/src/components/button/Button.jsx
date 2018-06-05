import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import classes from './Button.scss';

const Button = ({ className, title, ...props }) => (
  <button className={cn(classes.button, className)} {...props}>{title}</button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: undefined,
};

export default Button;
