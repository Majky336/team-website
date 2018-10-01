import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Header.css';

class NavItem extends Component {
  render() {
    const { onClick, label } = this.props;

    return (
      <button className="nav-button" onClick={onClick}>
        {label}
      </button>
    );
  }
}

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavItem;
