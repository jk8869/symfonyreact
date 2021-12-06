import React from 'react';
import '../styles/App.css';

const CardItem = (props: any) => {
  const { title, value, icon } = props;
  return (
    <div className="col-lg-3">
      <div className="tile">
        <div className="tile-heading">{title}</div>
        <div className="tile-body">
          <div className="pull-right">{icon}</div>
          <div className="value">{value}</div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
