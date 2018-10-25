import React, { Component } from 'react';
import { Element } from 'react-scroll';

import SectionHeader from '../components/common/SectionHeader/SectionHeader';
import Table from '../components/common/Table/Table';

import './DocumentPage.css';

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
  {
    index: 3,
    name: '3. stretnutie',
    date: '12.10.2018',
    link: require('../assets/pdf/z3.pdf'),
  },
  {
    index: 4,
    name: '4. stretnutie',
    date: '19.10.2018',
    link: require('../assets/pdf/z4.pdf'),
  },
];

const priruckyItems = [
  {
    index: 1,
    name: 'Inštalačná príručka',
    date: '19 .10.2018',
    link: require('../assets/pdf/p1.pdf'),
  },
];

const dokumentyItems = [
  {
    index: 1,
    name: 'Metodika pre prácu na Frontende',
    date: '15.10.2018',
    link: require('../assets/pdf/m1.pdf'),
  },
  {
    index: 2,
    name: 'Metodika pre komunikáciu',
    date: 'ľť.10.2018',
    link: require('../assets/pdf/m2.pdf'),
  },
];

const retrospektivyItems = [
  {
    index: 1,
    name: 'Retrospektíva k šprintu č.1',
    date: '22.10.2018',
    link: require('../assets/pdf/r1.pdf'),
  },
];

class DocumentPage extends Component {
  render() {
    return (
      <div className="container">
        <Element name="zapisnice-table">
          <SectionHeader label="Zápisnice" />
          <Table headers={headers} items={zapisniceItems} />
        </Element>
        <Element name="retrospektivy-table">
          <SectionHeader label="Retrospektívy" />
          <Table headers={headers} items={retrospektivyItems} />
        </Element>
        <Element name="dokumenty-table">
          <SectionHeader label="Dokumenty" />
          <Table headers={headers} items={dokumentyItems} />
        </Element>
        <Element name="prirucky-table">
          <SectionHeader label="Príručky" />
          <Table headers={headers} items={priruckyItems} />
        </Element>
      </div>
    );
  }
}

export default DocumentPage;
