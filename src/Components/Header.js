import React from "react";

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-xl">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="/">
          Vegain Recipes
        </a>
      </div>
      <div className="flex-none">
        <details className="dropdown dropdown-bottom dropdown-end">
          <summary className="m-1 btn">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </summary>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/recipes">Recipes</a>
            </li>
            <li>
              <a href="/shoppinglist">Shopping List</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </details>
      </div>
    </div>
    //</header>
  );
};

export default Header;
