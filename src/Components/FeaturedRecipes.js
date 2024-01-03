import React from "react";

const FeaturedRecipes = () => {
  return (
    <div>
      <h1 className="text-lg font-bold text-center py-2">
        Check out some of our recipes...
      </h1>
      <div className="m-2 flex flex-col md:flex-row justify-center">
        <div className="relative w-full md:w-1/4 p-2 flex justify-center">
          <a href="https://www.vegainrecipes.com/recipes/200">
            <img
              src="recipes/peppizza.png"
              alt="pepperoni pizza"
              className="shadow-lg brightness-75"
            />
            <p className="absolute inset-0 flex items-center justify-center text-white font-bold">
              Pepperoni Pizza
            </p>
          </a>
        </div>
        <div className="relative w-full md:w-1/4 p-2 flex justify-center">
          <a href="https://www.vegainrecipes.com/recipes/216">
            <img
              src="recipes/buffWings.png"
              alt="buffalo wings"
              className="shadow-lg brightness-75"
            />
            <p className="absolute inset-0 flex items-center justify-center text-white font-bold">
              Buffalo Wings
            </p>
          </a>
        </div>
        <div className="relative w-full md:w-1/4 p-2 flex justify-center">
          <a href="https://www.vegainrecipes.com/recipes/220">
            <img
              src="recipes/mozz.png"
              alt="mozzerlla sticks"
              className="shadow-lg brightness-75"
            />
            <p className="absolute inset-0 flex items-center justify-center text-white font-bold">
              Mozzarella Sticks
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRecipes;
