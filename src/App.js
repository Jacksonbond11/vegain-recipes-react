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
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Header />
              <RecipeProvider>
                <Welcome />
                <DisplayRecipe />
                <FeaturedRecipes />
                <Footer />
              </RecipeProvider>
            </>
          }
        />
        <Route
          path="/shoppinglist"
          element={
            <>
              {" "}
              <Header />
              <ShoppingList />
              <List />
              <Footer />
            </>
          }
        />
        <Route
          path="/recipes"
          element={
            <>
              {" "}
              <Header />
              <Recipes />
              <DisplayAllRecipes />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              {" "}
              <Header />
              <h1>Coming soon...</h1>
              <Footer />
            </>
          }
        />
        <Route path="/recipes/:recipeId" element={<RecipePage />} />
      </Routes>
    </Router>
  );
}

export default App;
