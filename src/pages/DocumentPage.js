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
  {
    index: 5,
    name: '5. stretnutie',
    date: '26.10.2018',
    link: require('../assets/pdf/z5.pdf'),
  },
  {
    index: 6,
    name: '6. stretnutie',
    date: '9.11.2018',
    link: require('../assets/pdf/z6.pdf'),
  },
];

const priruckyItems = [
  {
    index: 1,
    name: 'Inštalačná príručka',
    date: '19.10.2018',
    link: require('../assets/pdf/p1.pdf'),
  },
  {
    index: 2,
    name: 'Manuál pre úpravu prezentačného webu',
    date: '18.11.2018',
    link: require('../assets/pdf/p2.pdf'),
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
    date: '25.10.2018',
    link: require('../assets/pdf/m2.pdf'),
  },
  {
    index: 3,
    name: 'Metodika pre manažment úloh',
    date: '26.10.2018',
    link: require('../assets/pdf/m3.pdf'),
  },
  {
    index: 4,
    name: 'Metodika pre verziovanie kódu',
    date: '18.11.2018',
    link: require('../assets/pdf/m4.pdf'),
  },
  {
    index: 5,
    name: 'Metodika pre prácu s databázou',
    date: '18.11.2018',
    link: require('../assets/pdf/m5.pdf'),
  },
];

const retrospektivyItems = [
  {
    index: 1,
    name: 'Retrospektíva k šprintu č.1',
    date: '22.10.2018',
    link: require('../assets/pdf/r1.pdf'),
  },
  {
    index: 2,
    name: 'Retrospektíva k šprintu č.2',
    date: '7.11.2018',
    link: require('../assets/pdf/r2.pdf'),
  },
];

const sprintyItems = [
  {
    index: 1,
    name: 'Stav šprintu č.1',
    date: '22.10.2018',
    link: require('../assets/pdf/s1.pdf'),
  },
  {
    index: 2,
    name: 'Stav šprintu č.2',
    date: '12.11.2018',
    link: require('../assets/pdf/s2.pdf'),
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
        <Element name="sprinty-table">
          <SectionHeader label="Šprinty" />
          <Table headers={headers} items={sprintyItems} />
        </Element>
      </div>
    );
  }
}

export default DocumentPage;
