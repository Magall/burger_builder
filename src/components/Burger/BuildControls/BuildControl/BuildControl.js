import React from "react";
import "./BuildControl.scss";
const buildControl = (props) => {
    console.log()
  return (
    <div id="buildControl">
      <div className="Label">{props.label}</div>
      <button
        className="Less"
        onClick={props.removed}
        disabled={props.disabled}
      >
        Less
      </button>
      <button className="More" onClick={props.added}>
        More
      </button>
    </div>
  );
};
export default buildControl;
