import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import "./Burger.scss";
const Burger = (props) => {
  const ingredientsArr = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map(() => {
        return igKey;
      });
    })
    .reduce((prev, cur) => {
      return prev.concat(cur);
    }, []);

  
  let emptyHamb = null
  if(ingredientsArr.length===0){
    emptyHamb = <p>Insert some ingredients</p>
  }
  return (
    <div id="Burger">
      <BurgerIngredient type="bread-top" />
      {emptyHamb}
      {ingredientsArr.map((el, i) => {
        return <BurgerIngredient type={el} key={el + i} />;
      })}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default Burger;
