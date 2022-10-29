import React, { useState } from "react";

function Item({ name, category }) {

  let [className, setClassName] = useState(true)

  function handleAddToCart() {
    setClassName((className) => !className) 
  }

  return (
    <li className={className ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={className ? "add" : "remove"} onClick={handleAddToCart}>{className ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
