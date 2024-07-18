import useParams from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const RECIPE_ENDPOINT = "http://localhost:8000/api/recipes";

/**
 * A detailed view of a single recipe
 *
 *
 * props: none
 * state: none
 */

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function getRecipe() {
      const response = axios.get(`${RECIPE_ENDPOINT}/${id}`);
      setRecipe(response.data);
    }

    getRecipe();
  }, [id]);

  return (
    <div className="RecipeDetail">
      {recipe ? (
        <>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
          <p>{recipe.ingredients}</p>
          <p>{recipe.instructions}</p>
        </>
      ) : (
        <p>Loading Recipes...</p>
      )}
    </div>
  );
}

export default RecipeDetail;
