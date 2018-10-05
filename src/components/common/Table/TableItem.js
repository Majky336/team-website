import React from 'react';
import PropTypes from 'prop-types';

import './TableItem.css';

const TableItem = ({ item }) => {
  const { index, name, date, link } = item || {};

  return (
    <tr>
      <td>{index}</td>
      <td>{name}</td>
      <td>{date}</td>
      <td>
        <a href={link}>
          <i className="fas fa-download" />
        </a>
      </td>
    </tr>
  );
};

TableItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default TableItem;
