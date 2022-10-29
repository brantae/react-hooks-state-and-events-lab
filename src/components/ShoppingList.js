import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  let [selectedCategory, setselectedCategory] = useState("All")
  let [foods, setFoods] = useState(items)

  const foodToDisplay = foods.filter((food) => {
    if (selectedCategory === "All") {
      return true
    } else {
      return food.category === selectedCategory
    }
  })

  console.log(foodToDisplay)


  function handleFilter(event) {
    setselectedCategory(event.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {foodToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
