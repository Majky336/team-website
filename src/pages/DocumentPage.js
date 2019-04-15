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
    date: '09.11.2018',
    link: require('../assets/pdf/z6.pdf'),
  },
  {
    index: 7,
    name: '7. stretnutie',
    date: '16.11.2018',
    link: require('../assets/pdf/z7.pdf'),
  },
  {
    index: 8,
    name: '8. stretnutie',
    date: '23.11.2018',
    link: require('../assets/pdf/z8.pdf'),
  },
  {
    index: 9,
    name: '9. stretnutie',
    date: '30.11.2018',
    link: require('../assets/pdf/z9.pdf'),
  },
  {
    index: 10,
    name: '10. stretnutie',
    date: '06.12.2018',
    link: require('../assets/pdf/z10.pdf'),
  },
  {
    index: 11,
    name: '12. stretnutie',
    date: '11.02.2019',
    link: require('../assets/pdf/z12.pdf'),
  },
  {
    index: 12,
    name: '13. stretnutie',
    date: '18.02.2019',
    link: require('../assets/pdf/z13.pdf'),
  },
  {
    index: 13,
    name: '14. stretnutie',
    date: '25.02.2019',
    link: require('../assets/pdf/z14.pdf'),
  },
  {
    index: 14,
    name: '15. stretnutie',
    date: '04.03.2019',
    link: require('../assets/pdf/z15.pdf'),
  },
  {
    index: 15,
    name: '16. stretnutie',
    date: '11.03.2019',
    link: require('../assets/pdf/z16.pdf'),
  },
  {
    index: 16,
    name: '17. stretnutie',
    date: '18.03.2019',
    link: require('../assets/pdf/z17.pdf'),
  },
  {
    index: 17,
    name: '18. stretnutie',
    date: '25.03.2019',
    link: require('../assets/pdf/z18.pdf'),
  },
  {
    index: 18,
    name: '19. stretnutie',
    date: '01.04.2019',
    link: require('../assets/pdf/z19.pdf'),
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
  {
    index: 6,
    name: 'Metodika testovania',
    date: '23.11.2018',
    link: require('../assets/pdf/m6.pdf'),
  },
  {
    index: 7,
    name: 'Metodika pre code review',
    date: '23.11.2018',
    link: require('../assets/pdf/m7.pdf'),
  },
  {
    index: 8,
    name: 'Metodika manažmentu chýb',
    date: '01.12.2018',
    link: require('../assets/pdf/m8.pdf'),
  },
  {
    index: 9,
    name: 'Metodika pre riadenie návrhu',
    date: '09.12.2018',
    link: require('../assets/pdf/m9.pdf'),
  },
  {
    index: 10,
    name: 'Dokumentácia k inžinierskemu dielu',
    date: '15.04.2018',
    link: require('../assets/pdf/d1.pdf'),
  },
  {
    index: 11,
    name: 'Dokumentácia k riadeniu projektu',
    date: '23.11.2018',
    link: require('../assets/pdf/d2.pdf'),
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
  {
    index: 3,
    name: 'Retrospektíva k šprintu č.3',
    date: '23.11.2018',
    link: require('../assets/pdf/r3.pdf'),
  },
  {
    index: 4,
    name: 'Retrospektíva k šprintu č.4',
    date: '07.12.2018',
    link: require('../assets/pdf/r4.pdf'),
  },
  {
    index: 5,
    name: 'Retrospektíva k šprintu č.5',
    date: '14.12.2018',
    link: require('../assets/pdf/r5.pdf'),
  },
  {
    index: 6,
    name: 'Retrospektíva k šprintu č.6',
    date: '25.02.2019',
    link: require('../assets/pdf/r6.pdf'),
  },
  {
    index: 7,
    name: 'Retrospektíva k šprintu č.7',
    date: '11.03.2019',
    link: require('../assets/pdf/r7.pdf'),
  },
  {
    index: 8,
    name: 'Retrospektíva k šprintu č.8',
    date: '25.03.2019',
    link: require('../assets/pdf/r8.pdf'),
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
  {
    index: 3,
    name: 'Stav šprintu č.3',
    date: '23.11.2018',
    link: require('../assets/pdf/s3.pdf'),
  },
  {
    index: 4,
    name: 'Stav šprintu č.4',
    date: '07.12.2018',
    link: require('../assets/pdf/s4.pdf'),
  },
  {
    index: 5,
    name: 'Stav šprintu č.5',
    date: '14.12.2018',
    link: require('../assets/pdf/s5.pdf'),
  },
  {
    index: 6,
    name: 'Stav šprintu č.6',
    date: '25.02.2019',
    link: require('../assets/pdf/s6.pdf'),
  },
  {
    index: 7,
    name: 'Stav šprintu č.7',
    date: '11.03.2019',
    link: require('../assets/pdf/s7.pdf'),
  },
  {
    index: 8,
    name: 'Stav šprintu č.8',
    date: '25.03.2019',
    link: require('../assets/pdf/s8.pdf'),
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
