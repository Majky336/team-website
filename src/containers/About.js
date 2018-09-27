import React, { Component } from 'react';
import { Element, scroller } from 'react-scroll';
import { withRouter } from 'react-router';

import Button from '../components/common/Button/Button';
import SectionHeader from '../components/common/SectionHeader/SectionHeader';

import './About.css';

class About extends Component {
  state = {};

  navigateToWebApp = () => {
    window.location.href = 'http://team10-17.studenti.fiit.stuba.sk/dilema';
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
          <SectionHeader label="O projekte" white />
          <div className="about-text-container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec
              enim ac massa suscipit iaculis eu non ligula. Aliquam aliquet elit
              ut sem convallis, et aliquam nibh vestibulum. Proin sit amet dui
              in neque molestie aliquet. Maecenas faucibus, felis ut lacinia
              hendrerit, mi ligula pharetra est, vel mattis nulla velit id
              ligula. Aliquam aliquam dui eget mi laoreet, ut ullamcorper dolor
              volutpat. Aliquam erat volutpat. Integer condimentum sapien vitae
              consequat dignissim. Phasellus imperdiet dolor at arcu egestas, et
              ultricies erat cursus.
            </p>

            <p>
              Suspendisse ornare nisi vitae tincidunt consequat. Aenean non
              mauris ac enim hendrerit gravida. Nunc nunc nibh, auctor a eros
              quis, ultrices aliquam massa. Sed egestas felis nec orci aliquam
              laoreet. Fusce egestas varius gravida. Phasellus quis erat eu nisl
              pharetra eleifend. Quisque faucibus luctus ligula vitae pretium.
              Aenean a venenatis arcu. Maecenas vel placerat nulla. Etiam et
              mattis turpis.
            </p>

            <p>
              In hac habitasse platea dictumst. Morbi a auctor nunc, at luctus
              tellus. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Suspendisse nec arcu a sapien
              posuere gravida. Curabitur eu ultricies ex. Maecenas quam felis,
              ornare eu dapibus eget, pellentesque ut dui. Ut sagittis nulla
              enim, vitae lacinia tortor imperdiet in. Quisque vitae felis sed
              mauris tincidunt malesuada.
            </p>

            <p>
              Sed elementum turpis turpis, at elementum lorem egestas sed. Nulla
              elementum, turpis vitae aliquet fermentum, elit libero pharetra
              eros, a aliquet lacus elit ac lorem. Nunc iaculis eleifend luctus.
              In accumsan sapien ac risus condimentum commodo. Ut vel metus
              maximus orci dignissim sodales id id justo. Integer non neque leo.
              Proin sit amet pretium lectus. Vestibulum ac lacus ultricies nisl
              tempus suscipit. Mauris pellentesque placerat arcu, a suscipit
              velit laoreet eu. Integer viverra enim at lacus vestibulum, ut
              ornare leo tempus. Etiam euismod bibendum rutrum. Vivamus quis
              nunc et libero mollis tempor. Phasellus et diam scelerisque,
              maximus nulla eu, iaculis augue. Fusce a ante quis magna rhoncus
              cursus.
            </p>

            <p>
              Fusce ultricies arcu quis elit eleifend sollicitudin. Fusce et
              tempus odio. Duis interdum viverra ipsum, egestas bibendum ante
              rhoncus sed. Pellentesque scelerisque interdum est, sit amet
              imperdiet massa luctus sed. Sed ac diam urna. Vestibulum a est
              ligula. In consectetur ac sapien finibus accumsan. Mauris mattis
              sit amet libero ac scelerisque. Aliquam sem magna, porttitor at
              dictum ac, rhoncus in nibh. Fusce ultrices metus sed finibus
              pellentesque. Proin at nibh maximus nisi semper pulvinar at quis
              est. Sed mollis congue mattis. Integer facilisis sem est, non
              commodo enim hendrerit at. Integer eu venenatis felis. Donec et
              metus vitae ipsum rhoncus placerat a id ante.
            </p>
          </div>
          <Button label="Dilema" onClick={this.navigateToWebApp} />
        </div>
      </Element>
    );
  }
}

export default withRouter(About);
