import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import "./BuildControls.scss";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];
const buildControls = (props) => (
  <div id="buildControls">
    {controls.map((ctrl) => {
      return (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          disabled = {props.disabled[ctrl.type]}
          
        />
      );
    })}
  </div>
);
export default buildControls;