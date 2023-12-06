import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const [error, setError] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const handleSearch = async () => {
    try {
      const response = await fetch(
        "https://24.144.94.207:5000/api/recipes/recipes",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        let recipes = await response.json();
        setRecipes(recipes);
        console.log(recipes[0].image);
      } else {
        setError("An error occurred while searching. Please try again.");
      }
    } catch (error) {
      console.error("Error while searching:", error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };
  return (
    <div className="max-w-md mx-auto">
      <div className="text-3xl mb-4">
        <h1>Check out some of our recipes...</h1>
      </div>

      <Slider {...settings} className="flex flex-row">
        {recipes.map((recipe, index) => (
          <div key={index} className="px-2">
            <h3 className="font-bold">{recipe.name}</h3>
            <img
              src={recipe.image}
              alt={`Recipe ${index}`}
              className="max-w-md max-h-md"
            />
          </div>
        ))}
      </Slider>
      {error && <div>Error: {error}</div>}
    </div>
  );
}
