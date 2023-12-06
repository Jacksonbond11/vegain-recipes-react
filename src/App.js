import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Recipes from "./Pages/Recipes";
import ShoppingList from "./Pages/ShoppingList";
import Header from "./Components/Header";
import APISearch from "./Components/APISearch";
import Welcome from "./Components/Welcome";
import Footer from "./Components/Footer";
import { RecipeProvider } from "./Components/RecipeContext";
import DisplayRecipe from "./Components/DisplayRecipe";
import DisplayAllRecipes from "./Components/DisplayAllRecipes";
import List from "./Components/List";
import Slideshow from "./Components/Slideshow";

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
              </RecipeProvider>
              <Slideshow />
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
              <ShoppingList />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
