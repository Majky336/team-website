import React, { Component } from 'react';
import { Element, scroller } from 'react-scroll';
import { withRouter } from 'react-router';

import MailButton from '../components/common/Button/MailButton';
import SectionHeader from '../components/common/SectionHeader/SectionHeader';

import './Contact.css';

class Contact extends Component {
  state = {};

  static getDerivedStateFromProps(nextProps) {
    const { location } = nextProps;
    const { pathname } = location || {};

    if (pathname === '/contact') {
      scroller.scrollTo('contact', {
        duration: 1000,
        smooth: 'easeInOutQuart',
      });
    }

    return null;
  }

  render() {
    return (
      <Element name="contact">
        <div className="contact-container">
          <SectionHeader label="Kontaktujte nás!" white />
          <div className="contact-button-container">
            <MailButton
              label="Poslať email"
              href="mailto:18.team.fiit@gmail.com"
            />
          </div>
        </div>
      </Element>
    );
  }
}

export default withRouter(Contact);
