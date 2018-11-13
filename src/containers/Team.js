import React, { Component } from 'react';
import { Element, scroller } from 'react-scroll';
import { withRouter } from 'react-router';

import SectionHeader from '../components/common/SectionHeader/SectionHeader';
import Teaser from '../components/common/Teaser/Teaser';

import './Team.css';

import tomas from '../assets/tomas_fotka.jpg';
import veronikaB from '../assets/veronikaB_fotka.jpg';
import veronikaH from '../assets/veronikaH_fotka.jpg';
import dodo from '../assets/jozef_fotka.jpg';
import marek from '../assets/marek_fotka.jpg';
import filip from '../assets/filip_fotka.jpg';
import boris from '../assets/boris_fotka.jpg';
import michal from '../assets/michal_fotka.jpg';
import lang from '../assets/lang_fotka.jpeg';

const teamMembers = [
  {
    firstName: 'Tomáš',
    lastName: 'Bende',
    position: 'Lead Test Engineer',
    email: 'xbende@stuba.sk',
    photo: tomas,
  },
  {
    firstName: 'Veronika',
    lastName: 'Búcsiová',
    position: 'Scrum Master',
    email: 'xbucsiova@stuba.sk',
    photo: veronikaB,
  },
  {
    firstName: 'Veronika',
    lastName: 'Horniczká',
    position: 'Lead Designer',
    email: 'xhorniczka@stuba.sk',
    photo: veronikaH,
  },
  {
    firstName: 'Jozef',
    lastName: 'Melicherčík',
    position: 'Lead Architect',
    email: ' xmelichercik@stuba.sk',
    photo: dodo,
  },
  {
    firstName: 'Marek',
    lastName: 'Pacher',
    position: 'Lead Backend Developer',
    email: 'xpacherm@stuba.sk',
    photo: marek,
  },
  {
    firstName: 'Filip',
    lastName: 'Pavkovček',
    position: 'Lead Git Manager',
    email: 'xpavkovcek@stuba.sk',
    photo: filip,
  },
  {
    firstName: 'Boris',
    lastName: 'Slíž',
    position: 'Lead Database Specialist',
    email: 'xsliz@stuba.sk',
    photo: boris,
  },
  {
    firstName: 'Michal',
    lastName: 'Sojka',
    position: 'Lead Frontend Developer',
    email: 'xsojkam@stuba.sk',
    photo: michal,
  },
  {
    firstName: 'Ján',
    lastName: 'Lang',
    position: 'Team Leader',
    email: 'xlang@stuba.sk',
    photo: lang,
  },
];

class Team extends Component {
  state = {};

  static getDerivedStateFromProps(nextProps) {
    const { location } = nextProps;
    const { pathname } = location || {};

    if (pathname === '/team') {
      scroller.scrollTo('team', {
        duration: 999,
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
