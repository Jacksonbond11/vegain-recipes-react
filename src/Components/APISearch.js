import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { RecipeContext } from "./RecipeContext";

const APISearch = (props) => {
  const [searching, setSearching] = useState(false);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const { setRecipe } = useContext(RecipeContext);

  const handleSearch = async () => {
    setSearching(true);
    try {
      const response = await fetch(
        //"https://api.vegainrecipes.com/api/gpt/call-gpt",
        "http://127.0.0.1:5000/api/gpt/call-gpt",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        }
      );

      if (response.ok) {
        let fetchedData = await response.json();
        setRecipe(fetchedData);
        setSearching(false);
        setQuery("");
      } else {
        setError("An error occurred while searching. Please try again.");
        setRecipe(null);
        setSearching(false);
        setQuery("");
      }
    } catch (error) {
      console.error("Error while searching:", error);
      setError("An error occurred while searching. Please try again.");
      setRecipe(null);
      setSearching(false);
      setQuery("");
    }
  };

  return (
    <div className="flex items-center w-full flex-col">
      <div className="join">
        <input
          className="input input-bordered join-item focus:outline-none"
          placeholder="What are you hungry for?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="btn btn-secondary join-item rounded-r-full"
          onClick={handleSearch}
        >
          Submit
        </button>
      </div>

      <div className="spinner">
        {searching && (
          <div>
            <div className="flex justify-center">
              <p>
                Using artificial intelligence to think of a delicious recipe...
              </p>
              <span className="loading loading-spinner loading-md"></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default APISearch;
