import { useEffect, useState } from "react";
import axios from "axios";

import RecipeCard from "./RecipeCard";

import { RECIPE_ENDPOINT } from "../constants";

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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // get recipes from the db when the page loads
  useEffect(() => {
    async function getRecipes() {
      try {
        const response = await axios.get(RECIPE_ENDPOINT);
        setRecipes(response.data);
        console.log("Recipes have been fetched.:", response.data);
      } catch (error) {
        setError(error);
        console.log("Error: The recipes have exploaded on fetch.", error);
      } finally {
        setIsLoading(false);
      }
    }

    getRecipes();
  }, []);

  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="RecipeList">
      <h1>Welcome to Recipme!</h1>

      <p>Popular Recipes</p>
      <div className="recipes">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
