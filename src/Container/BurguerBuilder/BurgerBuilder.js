import React, { Component } from 'react';
import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';
import { array } from 'prop-types';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.6,
  meat: 1.5,
  bacon: 1,
};

// Would be nice if you could try to implement this same class using hooks
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

  // Does it needs to be a function? I meant, it can be only a variable.
  // It's not being used.
  isDisabled = (type) => {
    return this.state.ingredients[type] === 0;
  };

  addIngredientHandler = (type) => {
    // I'm using setState here with this function (prevState) since the React's setState method is async.
    // So it's better to use it in this way when our new state depends on the current this.state value
    // Ref: https://reactjs.org/docs/react-component.html#setstate
    this.setState((prevState) => {
      const { ingredients, price, ingemp } = prevState;

      const oldCount = ingredients[type];
      const updatedCount = oldCount + 1;
      const updatedIngredients = {
        ...ingredients,
      };
      const updatedInfo = {
        ...ingemp,
      };
      updatedIngredients[type] = updatedCount;
      const priceAddition = INGREDIENT_PRICES[type];
      const updatedPrice = price + priceAddition;
      updatedInfo[type] = false;

      return {
        totalPrice: updatedPrice,
        ingredients: updatedIngredients,
        ingemp: updatedInfo,
      };
    });
  };

  removeIngredientHandler = (type) => {
    this.setState((prevState) => {
      const { ingredients, prevState, totalPrice } = prevState;
      const updatedcount = ingredients[type] === 0 ? 0 : ingredients[type] - 1;
      const updatedIngredients = { ...ingredients };
      let updatedInfo = { ...ingemp };
      updatedIngredients[type] = updatedcount;

      const updatedPrice =
        ingredients[type] === 0
          ? 0
          : totalPrice[type] - INGREDIENT_PRICES[type];

      if (ingredients[type] === 1) {
        console.log('entrei');
        updatedInfo[type] = true;
      }
      return {
        ingredients: updatedIngredients,
        totalPrice: updatedPrice,
        ingemp: updatedInfo,
      };
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
