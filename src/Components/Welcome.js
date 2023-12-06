import React from "react";
import APISearch from "./APISearch";

const Welcome = () => {
  return (
    <div className="hero h-[50vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row text-center">
        {/* <img
          src="/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        /> */}
        <div>
          <h1 className="text-5xl font-bold">Recipes Without the Story</h1>
          <p className="py-6">
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
