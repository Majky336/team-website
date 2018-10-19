import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { scroller } from 'react-scroll';
import { withRouter } from 'react-router';

import NavButton from './NavButton';
import NavItem from './NaviItem';
import './Header.css';

import logo from '../../assets/logo.png';

class Header extends Component {
  scrollToZapisnice = () =>
    scroller.scrollTo('zapisnice-table', {
      duration: 1000,
      smooth: 'easeInOutQuart',
    });

  scrollToDokumenty = () =>
    scroller.scrollTo('dokumenty-table', {
      duration: 1000,
      smooth: 'easeInOutQuart',
    });

  scrollToPrirucky = () =>
    scroller.scrollTo('prirucky-table', {
      duration: 1000,
      smooth: 'easeInOutQuart',
    });

  renderNavItems = () => {
    const { location } = this.props;
    const { pathname } = location || {};

    if (pathname === '/documents') {
      return (
        <Fragment>
          <NavButton label="Zápisnice" onClick={this.scrollToZapisnice} />
          <NavButton label="Dokumenty" onClick={this.scrollToDokumenty} />
          <NavButton label="Príručky" onClick={this.scrollToPrirucky} />
          <NavItem pathname={pathname} to="/" label="Domov" id="about" />
        </Fragment>
      );
    }

    return (
      <Fragment>
        <NavItem
          pathname={pathname}
          to="/about"
          label="O projekte"
          id="about"
        />
        <NavItem pathname={pathname} to="/team" label="Členovia" id="team" />
        <NavItem
          pathname={pathname}
          to="/contact"
          label="Kontakt"
          id="contact"
        />
        <NavItem
          pathname={pathname}
          to="/documents"
          label="Dokumenty"
          id="documents"
        />
      </Fragment>
    );
  };

  render() {
    return (
      <header className="header-container">
        <div>
          <img className="header-logo" src={logo} alt="logo" />
        </div>
        <div className="navigation-container">{this.renderNavItems()}</div>
      </header>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(Header);
