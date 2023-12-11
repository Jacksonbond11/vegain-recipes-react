import React, { useState, useEffect } from "react";
import RecipeModal from "./RecipeModal";
import Spinner from "./spinner";
import { useNavigate } from "react-router-dom";

const DisplayAllRecipes = () => {
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState(null);
  const [recipes, setRecipes] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const navigate = useNavigate();
  const viewRecipe = (recipeId) => {
    navigate(`/recipes/${recipeId}`);
  };

  const handleSearch = async () => {
    setSearching(true);
    try {
      const response = await fetch(
        // "https://api.vegainrecipes.com/api/recipes/recipes",
        "http://127.0.0.1:5000/api/recipes/recipes",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        let recipes = await response.json();
        setSearching(false);
        setRecipes(recipes);
      } else {
        setError("An error occurred while searching. Please try again.");
        setSearching(false);
      }
    } catch (error) {
      console.error("Error while searching:", error);
      setSearching(false);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  const openModal = (recipe) => {
    console.log(recipe.id);
    setSelectedRecipe(recipe);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex  justify-center flex-wrap max-w-[80vw] m-auto">
      {recipes && recipes.length ? (
        recipes.map((recipe, index) => (
          <div
            key={index}
            className="card card-compact w-64 bg-base-100 shadow-xl m-8"
            onClick={() => openModal(recipe)}
          >
            <figure>
              <img src={recipe.image} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{recipe.name}</h2>
              <p>{recipe.description}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-secondary"
                  onClick={() => viewRecipe(recipe.id)}
                >
                  View Recipe
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <Spinner text="Loading recipes..." />
      )}
      <RecipeModal
        isOpen={showModal}
        onClose={closeModal}
        recipe={selectedRecipe}
      />
    </div>
  );
};
export default DisplayAllRecipes;
