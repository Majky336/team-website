import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Teaser.css';

class Teaser extends Component {
  render() {
    const { email, firstName, lastName, position, photo } = this.props;

    return (
      <div className="Teaser">
        <div className="Teaser-image">
          <div className="ImageWrap">
            <img
              className="TeaserImage"
              src={photo}
              alt={`${firstName} ${lastName}`}
            />
          </div>
        </div>
        <div className="Teaser-body">
          <div className="Teaser-body-title">
            {lastName} <div className="Teaser-body-subtitle">{firstName}</div>
          </div>
          <div className="Teaser-boby-position">{position}</div>
          <div className="Teaser-boby-email">{email}</div>
        </div>
      </div>
    );
  }
}

Teaser.propTypes = {
  email: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  photo: PropTypes.string,
};

export default Teaser;
