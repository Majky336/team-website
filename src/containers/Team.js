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
    position: 'Lead Tester',
    email: 'xbende@stuba.sk',
    photo: require('../assets/tomas_fotka.jpg'),
  },
  {
    firstName: 'Veronika',
    lastName: 'Búcsiová',
    position: 'Scrum Master',
    email: 'xbucsiova@stuba.sk',
    photo: require('../assets/veronikaB_fotka.jpg'),
  },
  {
    firstName: 'Veronika',
    lastName: 'Horniczká',
    position: 'Lead Designer',
    email: 'xhorniczka@stuba.sk',
    photo: require('../assets/boris_fotka.jpg'),
  },
  {
    firstName: 'Jozef',
    lastName: 'Melicherčík',
    position: 'Lead Architect',
    email: ' xmelichercik@stuba.sk',
    photo: require('../assets/jozef_fotka.jpg'),
  },
  {
    firstName: 'Marek',
    lastName: 'Pacher',
    position: 'Lead Backend Developer',
    email: 'xpacherm@stuba.sk',
    photo: require('../assets/marek_fotka.jpg'),
  },
  {
    firstName: 'Filip',
    lastName: 'Pavkovček',
    position: 'Lead Git Manager',
    email: 'xpavkovcek@stuba.sk',
    photo: require('../assets/filip_fotka.jpg'),
  },
  {
    firstName: 'Boris',
    lastName: 'Slíž',
    position: 'Lead Database Specialist',
    email: 'xsliz@stuba.sk',
    photo: require('../assets/boris_fotka.jpg'),
  },
  {
    firstName: 'Michal',
    lastName: 'Sojka',
    position: 'Lead Frontend Developer',
    email: 'xsojkam@stuba.sk',
    photo: require('../assets/michal_fotka.jpg'),
  },
  {
    firstName: 'Ján',
    lastName: 'Lang',
    position: 'Team Leader',
    email: 'xlang@stuba.sk',
    photo: require('../assets/lang_fotka.jpeg'),
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
              const { firstName, lastName, position, email, photo } =
                member || {};

              return (
                <Teaser
                  key={index}
                  firstName={firstName}
                  lastName={lastName}
                  position={position}
                  email={email}
                  photo={photo}
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
