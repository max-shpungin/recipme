import React from "react";
import { Link } from "react-router-dom";

/**
 * A single recipe card to display in the RecipeList
 *
 * RecipeList -> RecipeCard
 *
 * props: recipe object
 * state: none
 */
function RecipeCard({ recipe }) {
  return (
    <div className="RecipeCard">
      <h3>
        <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
      </h3>

      <p>{recipe.description}</p>

      <Link to={`recipes/${recipe.id}`}>View Recipe</Link>
    </div>
  );
}

export default RecipeCard;
