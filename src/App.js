import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Recipes from "./Pages/Recipes";
import ShoppingList from "./Pages/ShoppingList";
import Header from "./Components/Header";
import Welcome from "./Components/Welcome";
import Footer from "./Components/Footer";
import { RecipeProvider } from "./Components/RecipeContext";
import DisplayRecipe from "./Components/DisplayRecipe";
import DisplayAllRecipes from "./Components/DisplayAllRecipes";
import List from "./Components/List";
import FeaturedRecipes from "./Components/FeaturedRecipes";
import RecipePage from "./Components/RecipePage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <RecipeProvider>
                  <Welcome />
                  <DisplayRecipe />
                  <FeaturedRecipes />
                </RecipeProvider>
              }
            />
            <Route
              path="/shoppinglist"
              element={
                <>
                  <ShoppingList />
                  <List />
                </>
              }
            />
            <Route
              path="/recipes"
              element={
                <>
                  <Recipes />
                  <DisplayAllRecipes />
                </>
              }
            />
            <Route path="/contact" element={<h1>Coming soon...</h1>} />
            <Route path="/recipes/:recipeId" element={<RecipePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
