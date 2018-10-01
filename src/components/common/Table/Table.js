import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TableHeader from './TableHeader';
import TableItem from './TableItem';

import './Table.css';

class Table extends Component {
  renderHeaders = () => {
    const { headers } = this.props;

    return (
      headers &&
      headers.map((header, index) => {
        const { label } = header || {};

        return <TableHeader key={index} label={label} />;
      })
    );
  };

  renderItems = () => {
    const { items } = this.props;

    return (
      items &&
      items.map((item, index) => {
        return <TableItem key={index} item={item} />;
      })
    );
  };

  render() {
    return (
      <table>
        <tbody>
          <tr>{this.renderHeaders()}</tr>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  headers: PropTypes.array.isRequired,
  items: PropTypes.array,
};

export default Table;
