import React, { useState, useEffect } from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.scss';

// Destruct the props.
const Burger = ({ ingredients }) => {
  const [normalizedArr, setNormalizedArr] = useState([]);

  useEffect(() => {
    const ingredientsArr = Object.keys(ingredients)
      .map((igKey) => {
        return [...Array(ingredients[igKey])].map(() => {
          return igKey;
        });
      })
      .reduce((prev, cur) => {
        return prev.concat(cur);
      }, []);

    setNormalizedArr(ingredientsArr);
  }, [ingredients]);

  return (
    <div id="Burger">
      <BurgerIngredient type="bread-top" />
      {normalizedArr.length === 0 ? (
        <p>Insert some ingredients</p>
      ) : (
        normalizedArr.map((el, i) => {
          return <BurgerIngredient type={el} key={el + i} />;
        })
      )}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default Burger;
