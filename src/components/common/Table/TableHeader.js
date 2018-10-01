import React from 'react';
import PropTypes from 'prop-types';

import './TableHeader.css';

const TableHeader = ({ label }) => {
  return <th>{label}</th>;
};

TableHeader.propTypes = {
  label: PropTypes.string.isRequired,
};

export default TableHeader;
