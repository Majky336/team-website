import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Header.css';

class NavItem extends Component {
  render() {
    const { to, label } = this.props;

    return (
      <Link className="nav-item" to={to}>
        {label}
      </Link>
    );
  }
}

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavItem;
