import React, { Component } from 'react';
import './BurgerIngredient.scss';
import PropTypes from 'prop-types';

// In this way you're not creating a new switch on every component render
const getBurguerIngredient = (type) => {
  const ingredients = {
    'bread-bottom': <div className="BreadBottom"></div>,
    'bread-top': (
      <div className="BreadTop">
        <div className="Seeds1"></div>
        <div className="Seeds2"></div>
      </div>
    ),
    meat: <div className="Meat"></div>,
    cheese: <div className="Cheese"></div>,
    salad: <div className="Salad"></div>,
    bacon: <div className="Bacon"></div>,
  };

  return ingredients[type] || null;
};

const BurgerIngredient = ({ type }) => {
  return getBurguerIngredient(type);
};

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
