import React from "react";
import APISearch from "./APISearch";

const Welcome = () => {
  return (
    <div className="hero h-[50vh] bg-cover bg-no-repeat bg-center relative">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center shadow-lg brightness-75"
        style={{ backgroundImage: "url('/hero.png')" }}
      ></div>

      <div className="hero-content flex-col lg:flex-row text-center relative z-10">
        <div>
          <h1 className="text-5xl font-bold text-white">
            Recipes Without the Story
          </h1>
          <p className="py-6 text-white">
            You shouldn't have to hear a life story to get a recipe. Find your
            recipe now:
          </p>
          <APISearch />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
