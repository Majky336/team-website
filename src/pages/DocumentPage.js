import React, { Component } from 'react';
import { Element } from 'react-scroll';

import SectionHeader from '../components/common/SectionHeader/SectionHeader';
import Table from '../components/common/Table/Table';

const headers = [
  {
    label: '#',
  },
  {
    label: 'Názov',
  },
  {
    label: 'Dátum vzniku',
  },
];

const zapisniceItems = [
  {
    index: 1,
    name: '1. stretnutie',
    date: '11.11.2012',
    link: 'faggit',
  },
  {
    index: 2,
    name: '2. stretnutie',
    date: '11.11.2012',
    link: 'faggit',
  },
  {
    index: 3,
    name: '3. stretnutie',
    date: '11.11.2012',
    link: 'faggit',
  },
];

const dokumentyItems = [
  {
    index: 1,
    name: 'Technická dokumentácia',
    date: '11.11.2012',
    link: 'faggit',
  },
  {
    index: 2,
    name: 'Metodiky',
    date: '11.11.2012',
    link: 'faggit',
  },
  {
    index: 3,
    name: 'SCRUM',
    date: '11.11.2012',
    link: 'faggit',
  },
];

class DocumentPage extends Component {
  render() {
    return (
      <div style={{ padding: '130px 180px' }}>
        <Element name="zapisnice-table">
          <SectionHeader label="Zápisnice" />
          <Table headers={headers} items={zapisniceItems} />
        </Element>
        <Element name="dokumenty-table">
          <SectionHeader label="Dokumenty" />
          <Table headers={headers} items={dokumentyItems} />
        </Element>
      </div>
    );
  }
}

export default DocumentPage;
