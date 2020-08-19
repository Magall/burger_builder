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
    <p><strong>Current Price: $ {props.price.toFixed(2)}</strong></p>
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
    <button className="OrderButton" disabled={!props.purchasable}>Order Now</button>
  </div>
);
export default buildControls;
