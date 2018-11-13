import React, { Component } from 'react';
import { Element, scroller } from 'react-scroll';
import { withRouter } from 'react-router';

import Button from '../components/common/Button/Button';
import SectionHeader from '../components/common/SectionHeader/SectionHeader';

import './About.css';

class About extends Component {
  state = {};

  navigateToWebApp = () => {
    window.location.href = 'http://team18-18.studenti.fiit.stuba.sk/dilema';
  };

  static getDerivedStateFromProps(nextProps) {
    const { location } = nextProps;
    const { pathname } = location || {};

    if (pathname === '/about') {
      scroller.scrollTo('about', {
        duration: 1000,
        smooth: 'easeInOutQuart',
      });
    }

    return null;
  }

  render() {
    return (
      <Element name="about">
        <div className="about-container">
          <SectionHeader label="Databanka otázok a úloh" white />
          <div className="about-text-container">
            <p>
              Cieľom projektu je vytvorenie infraštruktúry pre podporu
              spolupráce pri identifikovaní základného učiva viazaného pre
              konkrétne kvalifikácie z národnej sústavy kvalifikácií, jeho
              zdieľanie, používanie, integráciu do existujúceho procesu
              vzdelávania tak aby táto integrácia umožnila podporiť rozvoj
              vedomostí, zručností a návykov pre väčšie skupiny. V rámci
              projektu navrhneme a zrealizujeme webové nástroje na spoločnú
              identifikáciu otázok a úloh (udalostí).
            </p>

            <p>
              Prostredníctvom týchto udalostí aj pre im zodpovedajúce riešenia a
              postupy determinujúce sledované poznanie v podobe vedomostí,
              zručností a návykov. Kolektívna inteligencia je tu príležitosťou
              na prirodzenú kultiváciu obsahu vzdelávania a vernejšie mapovanie
              výsledku na kurikulom stanovené ciele. V rámci návrhu systému
              nástrojov budeme postupovať v zmysle overených postupov a metodík
              úspešne aplikovaných v softvérovom inžinierstve nakoľko vnímame
              jeho významnú paralelu s obsahovým inžinierstvom.
            </p>

            <p>
              Náš prístup budeme konfrontovať s už existujúcimi vzdelávacími
              systémami a aj takými ktoré boli a sú vyvíjané na našej fakulte. Z
              implementačného hľadiska vytvoríme inteligentné prostredie na
              podporu dištančných ako aj prezenčných foriem výučby na báze
              on-line prístupu s podporou multimediálnej reprezentácie
              interpretácie obsahu. Implementované prostredie podporí formovanie
              virtuálnych komunít doménovo špecifických a integráciu
              distribuovaného obsahu vzdelávania aj v medzinárodnom meradle.
              Sneaky
            </p>
          </div>
          <Button label="Dilema" onClick={this.navigateToWebApp} />
        </div>
      </Element>
    );
  }
}

export default withRouter(About);
