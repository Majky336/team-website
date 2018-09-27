import React, { Component } from 'react';
import { Element, scroller } from 'react-scroll';
import { withRouter } from 'react-router';

import SectionHeader from '../components/common/SectionHeader/SectionHeader';
import Teaser from '../components/common/Teaser/Teaser';

import './Team.css';

const teamMembers = [
  {
    firstName: 'Tomáš',
    lastName: 'Bende',
    position: 'Backend developer',
    email: 'xbende@stuba.sk',
  },
  {
    firstName: 'Veronika',
    lastName: 'Búcsiová',
    position: 'Web designer',
    email: 'xbucsiova@stuba.sk',
  },
  {
    firstName: 'Veronika',
    lastName: 'Horniczká',
    position: 'Backend developer',
    email: 'xhorniczka@stuba.sk',
  },
  {
    firstName: 'Jozef',
    lastName: 'Melicherčík',
    position: 'Backend developer',
    email: ' xmelichercik@stuba.sk',
  },
  {
    firstName: 'Marek',
    lastName: 'Pacher',
    position: 'Backend developer',
    email: 'xpacherm@stuba.sk',
  },
  {
    firstName: 'Filip',
    lastName: 'Pavkovček',
    position: 'Backend developer',
    email: 'xpavkovcek@stuba.sk',
  },
  {
    firstName: 'Boris',
    lastName: 'Slíž',
    position: 'Backend developer',
    email: 'xsliz@stuba.sk',
  },
  {
    firstName: 'Michal',
    lastName: 'Sojka',
    position: 'Frontend developer',
    email: 'xsojkam@stuba.sk',
  },
  {
    firstName: 'Ján',
    lastName: 'Lang',
    position: 'Vedúci tímu',
    email: 'xlang@stuba.sk',
  },
];

class Team extends Component {
  state = {};

  static getDerivedStateFromProps(nextProps) {
    const { location } = nextProps;
    const { pathname } = location || {};

    if (pathname === '/team') {
      scroller.scrollTo('team', {
        duration: 1000,
        smooth: 'easeInOutQuart',
      });
    }

    return null;
  }

  render() {
    return (
      <Element name="team">
        <div className="team-container">
          <SectionHeader label="Členovia tímu" />
          <div className="member-section-container">
            {teamMembers.map((member, index) => {
              const { firstName, lastName, position, email } = member || {};

              return (
                <Teaser
                  key={index}
                  firstName={firstName}
                  lastName={lastName}
                  position={position}
                  email={email}
                />
              );
            })}
          </div>
        </div>
      </Element>
    );
  }
}

export default withRouter(Team);
