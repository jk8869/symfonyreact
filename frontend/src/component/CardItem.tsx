import React from 'react';
import '../styles/App.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaUser } from 'react-icons/fa';

const CardItem = (props: any) => {
  const { title, value } = props;
  return (
    <div className="col-lg-3">
      <div className="tile">
        <div className="tile-heading">{title}</div>
        <div className="tile-body">
          <div className="pull-right"><i className="fa fa-user"><FaUser /></i></div>
          <div className="value">{value}</div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
