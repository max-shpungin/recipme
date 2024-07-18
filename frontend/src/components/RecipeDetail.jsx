import useParams from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import { RECIPE_ENDPOINT } from "../App";


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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getRecipe() {
      try {
        const response = axios.get(`${RECIPE_ENDPOINT}/${id}`);
        setRecipe(response.data);

      } catch (error) {
        setError(error);
        console.log("Error: The recipe has exploaded on fetch.", error);
      } finally {
        setIsLoading(false);
      }
    }

    getRecipe();
  }, [id]);

  if (error) {
    console.log("Error: Something went wrong: ", error.message);
  }
  if (isLoading){return <p>Loading...</p>}

  return (
    <div className="RecipeDetail">
      {
        <>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
          <p>{recipe.ingredients}</p>
          <p>{recipe.instructions}</p>
        </>
       }
    </div>
  );
}

export default RecipeDetail;
