import React, { useContext } from "react";
import { RecipeContext } from "./RecipeContext";

const DisplayRecipe = () => {
  const { recipe } = useContext(RecipeContext);
  if (!recipe) {
    return <div></div>;
  }
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl max-w-[70vw] m-auto bg-neutral">
      <figure>
        <img src={recipe.image} alt={recipe.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{recipe.name}</h2>
        <h2 className="font-bold">Ingredients:</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2 className="font-bold">Instructions:</h2>
        <ol>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
        <h2 className="font-bold">Description:</h2>
        <p>{recipe.description}</p>
      </div>
    </div>
  );
};

export default DisplayRecipe;
