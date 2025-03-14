// src/components/BurgerStack/BurgerStack.jsx
import React from 'react';

const BurgerStack = ({ ingredients, onRemoveIngredient }) => {
    return (
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => onRemoveIngredient(index)}>X</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default BurgerStack;
  