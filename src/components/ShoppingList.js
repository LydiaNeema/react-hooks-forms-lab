import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [allItems, setAllItems] = useState(items);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleAddItem(newItem) {
    setAllItems([...allItems, newItem]);
  }

  const itemsToDisplay = allItems
    .filter((item) => {
      if (selectedCategory === "All") return true;
      return item.category === selectedCategory;
    })
    .filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleAddItem} />
      <Filter 
        search={search}
        onSearchChange={setSearch}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}
export default ShoppingList;