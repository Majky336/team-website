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
  {
    label: 'Odkaz',
  },
];

const zapisniceItems = [
  {
    index: 1,
    name: '1. stretnutie',
    date: '28.09.2018',
    link: require('../assets/pdf/z1.pdf'),
  },
  {
    index: 2,
    name: '2. stretnutie',
    date: '05.10.2018',
    link: require('../assets/pdf/z2.pdf'),
  },
];

const dokumentyItems = [];

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
