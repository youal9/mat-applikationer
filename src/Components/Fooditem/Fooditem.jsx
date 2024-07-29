import React, { useState } from 'react';
import './Fooditem.css';

const Fooditem = ({ food }) => {
  const [showIngredients, setShowIngredients] = useState(false);

  const handleClick = () => {
    setShowIngredients(!showIngredients);
  };

  return (
    <div className="food-item-container">
      <div className="food-item">
        <img src={food.strMealThumb} alt="" />
        <h1>{food.strMeal}</h1>
        <div>
          <button onClick={handleClick}>
            {showIngredients ? 'Close' : 'View Recipe'}
          </button>
          {showIngredients && (
            <div className="showIngredients">
              <h4>Ingredients:</h4>
              <ul>
                {Object.entries(food)
                  .filter(([key, value]) => key.startsWith('strIngredient') && value)
                  .map(([key, value]) => (
                    <li key={key}>{value}</li>
                  ))}
              </ul>
              <br />
              <h4>Instructions:</h4>
              <p>{food.strInstructions}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Fooditem;

