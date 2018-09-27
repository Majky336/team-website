import React, { Component } from 'react';
import { withRouter } from 'react-router';

import About from '../containers/About';
import Contact from '../containers/Contact';
import Team from '../containers/Team';

class MainPage extends Component {
  state = {};

  static getDerivedStateFromProps(nextProps) {
    const { location } = nextProps;
    const { pathname } = location || {};

    if (pathname === '/') {
      window.scrollTo(0, 0);
    }

    return null;
  }

  render() {
    return (
      <div id="main-cnt">
        <About />
        <Team />
        <Contact />
      </div>
    );
  }
}

export default withRouter(MainPage);
