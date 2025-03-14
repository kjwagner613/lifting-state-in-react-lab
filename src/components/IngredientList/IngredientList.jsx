// src/components/IngredientList/IngredientList.jsx
import React from 'react';

const IngredientList = ({ ingredients, onAddIngredient }) => {
    return (
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => onAddIngredient(ingredient)}>+</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default IngredientList;
  