import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header";

function RecipePage() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchRecipeData(id) {
      try {
        const response = await fetch(
          `https://api.vegainrecipes.com/api/recipe/${id}`,
          {
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
        return data;
      } catch (error) {
        console.error("Error fetching recipe data:", error);
      }
    }

    fetchRecipeData(recipeId).then((data) => setRecipe(data));
  }, [recipeId]);

  const navigateBack = () => {
    navigate(`/recipes`);
  };

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />

      <div className="flex justify-center py-4 px-4">
        <div className="card max-w-full md:max-w-xl lg:max-w-2xl bg-base-100 shadow-xl">
          <div className="h-64 overflow-hidden">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-full object-cover object-center rounded-t-lg"
            />
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl md:text-4xl">{recipe.name}</h2>
            <h2 className="card-title text-xl md:text-2xl">Ingredients:</h2>
          </div>

          <div className="px-4">
            <ul className="list-disc">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-sm md:text-base">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-xl md:text-2xl">Instructions:</h2>
          </div>
          <div className="px-4 pb-4">
            <ul className="list-disc">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="text-sm md:text-base">
                  {instruction}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-body items-center text-center">
            <button className="btn btn-ghost" onClick={navigateBack}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipePage;
