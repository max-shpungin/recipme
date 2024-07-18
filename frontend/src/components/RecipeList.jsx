import React, { useEffect, useState } from "react";
import axios from "axios";

import RecipeCard from "./RecipeCard";

const RECIPE_ENDPOINT = "http://localhost:8000/api/recipes";

/**
 * List of all the recipes
 *
 * RecipeList -> RecipeCard
 *
 * props: recipes, an array of recipe objects
 * state: none
 */

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  // get recipes from the db when the page loads
  useEffect(() => {
    async function getRecipes(){
      const response = await axios.get(RECIPE_ENDPOINT);
      setRecipes(response.data);
    }

    getRecipes();
  }, [])

  return (
    <div className="RecipeList">
      <h1>Welcome to Recipme!</h1>

      <p>Popular Recipes</p>

      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
