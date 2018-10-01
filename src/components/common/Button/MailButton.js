import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const MailButton = ({ label, href }) => (
  <a className="button-container" href={href}>
    {label}
  </a>
);

MailButton.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default MailButton;
