import React from 'react';
import './BuildControl.scss';

const buildControl = ({ label, removed, disabled, added }) => {
  return (
    <div id="buildControl">
      <div className="Label">{label}</div>
      <button className="Less" onClick={removed} disabled={disabled}>
        Less
      </button>
      <button className="More" onClick={added}>
        More
      </button>
    </div>
  );
};
export default buildControl;
