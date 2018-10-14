import React from 'react';
import PropTypes from 'prop-types';

import './SectionHeader.css';

const SectionHeader = ({ label, white, wrapText }) => {
  const color = white ? 'white' : 'black';

  return <div className={`section-container ${color}`}>{label}</div>;
};

SectionHeader.propTypes = {
  label: PropTypes.string.isRequired,
  white: PropTypes.bool,
  wrapText: PropTypes.bool,
};

export default SectionHeader;
