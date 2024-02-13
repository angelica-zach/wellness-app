import React from "react";
import ReactDOM from "react-dom";
import SkinCareItem from "./skinitem";
import Form from "./skinform";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function ListDisplay(props) {
  const [items, setItems] = useState(
    !localStorage.getItem("items")
      ? []
      : JSON.parse(localStorage.getItem("items"))
  );

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    console.log("Stored items:", items); // Debugging
    if (items) {
      setItems(items);
    }
  }, []);

  useEffect(() => {
    console.log("Updated items:", items); // Debugging
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  function addTask(name) {
    const newItem = { id: `item-${nanoid()}`, name };
    setItems([...items, newItem]);
  }
  function deleteItem(id) {
    const remainingItems = items.filter((item) => id !== item.id);
    setItems(remainingItems);
  }

  return (
    <div className="todoapp stack-large">
      <Form onSubmit={addTask} />
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {items.map((item) => (
          <SkinCareItem
            id={item.id}
            name={item.name}
            key={item.id}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default ListDisplay;