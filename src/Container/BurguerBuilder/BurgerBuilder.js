import React, { Component } from "react";
import Burger from "./../../components/Burger/Burger";
import BuildControls from "./../../components/Burger/BuildControls/BuildControls";
import { array } from "prop-types";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.6,
  meat: 1.5,
  bacon: 1,
};

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    ingemp: {
      salad: true,
      bacon: true,
      cheese: true,
      meat: true,
    },
    totalPrice: 4,
  };

  isDisabled = (type) => {
    return this.state.ingredients[type] === 0;
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    const updatedInfo = {
      ...this.state.ingemp,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const updatedPrice = this.state.price + priceAddition;
    updatedInfo[type] = false;

    this.setState({
      totalPrice: updatedPrice,
      ingredients: updatedIngredients,
      ingemp: updatedInfo,
    });
  };
  removeIngredientHandler = (type) => {
    const updatedcount =
      this.state.ingredients[type] === 0 ? 0 : this.state.ingredients[type] - 1;
    const updatedIngredients = { ...this.state.ingredients };
    let updatedInfo = { ...this.state.ingemp };
    updatedIngredients[type] = updatedcount;

    const updatedPrice =
      this.state.ingredients[type] === 0
        ? 0
        : this.state.totalPrice[type] - INGREDIENT_PRICES[type];

    if (this.state.ingredients[type] === 1) {
      console.log("entrei")
      updatedInfo[type] = true;
    }
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice,
      ingemp: updatedInfo
    });
  };
  render() {
    

    return (
      <div id="builder">
        <div>
          <Burger ingredients={this.state.ingredients} />
        </div>
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={this.state.ingemp}
        />
      </div>
    );
  }
}
