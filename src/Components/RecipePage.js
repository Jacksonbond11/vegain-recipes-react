import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function RecipePage() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(`/recipes`);
  };
  useEffect(() => {
    fetchRecipeData(recipeId).then((data) => setRecipe(data));
  }, [recipeId]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  async function fetchRecipeData(id) {
    try {
      const response = await fetch(
        `https://api.vegainrecipes.com/api/recipe/${id}`,
        {
          // ` http://127.0.0.1:5000/api/recipe/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      if (data && data.ingredients) {
        data.ingredients = data.ingredients.split("\n");
      }
      if (data && data.instructions) {
        data.instructions = data.instructions.split("\n");
      }

      console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching recipe data:", error);
    }
  }

  return (
    <div>
      <Header />

      <div className="flex justify-center py-4">
        <div className="card w-[800px] bg-base-100 shadow-xl">
          <div style={{ height: "400px", overflow: "hidden" }}>
            <img src={recipe.image} alt={recipe.name} className="rounded-md" />
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-4xl">{recipe.name}</h2>
            <h2 className="card-title text-2xl">Ingredients:</h2>
          </div>

          <div className="px-8">
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl">Instructions:</h2>
          </div>
          <div className="px-8 pb-8">
            <ul>
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
          </div>
          <button className="btn btn-ghost mx-[410px]" onClick={navigateBack}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipePage;
