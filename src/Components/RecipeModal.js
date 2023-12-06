const RecipeModal = ({ isOpen, onClose, recipe }) => {
  if (!isOpen || !recipe) return null;
  console.log(typeof recipe.ingredients);
  const ingredientsArray = recipe.ingredients.split("\n");
  const instructionsArray = recipe.instructions.split("\n");
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{recipe.name}</h2>
        <img src={recipe.image} alt={recipe.name} />
        <p>{recipe.description}</p>
        <h3>Ingredients:</h3>
        <ul>
          {ingredientsArray.map((ingredient, index) => (
            <li key={index}>{ingredient.trim()}</li>
          ))}
        </ul>
        <h3>Instructions:</h3>
        <ol>
          {instructionsArray.map((instruction, index) => (
            <li key={index}>{instruction.trim()}</li>
          ))}
        </ol>
        <br />
        <div className="modalButtons">
          <button>Save Recipe</button>
          <button>Add to Shopping List</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
