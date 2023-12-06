import React from "react";
import { useState, useEffect } from "react";
const List = () => {
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState(null);
  const [shoppingList, setShoppingList] = useState("");
  const getList = async () => {
    setSearching(true);
    try {
      const response = await fetch("http://127.0.0.1:5000/api/list/list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        let shoppingListText = await response.text();
        console.log(shoppingListText);
        let shoppingList = JSON.parse(shoppingListText);
        setShoppingList(shoppingList.response);
        setSearching(false);
      } else {
        setError("An error occurred while searching. Please try again.");
        setSearching(false);
      }
    } catch (error) {
      console.error("Error while searching:", error);
      setSearching(false);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="shoppingListCompCont">
      <h1>This is your list:</h1>
      <p>{shoppingList}</p>
      {/* <ul>
        {shoppingList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default List;
