import React from "react";
import ReactDOM from "react-dom";
import SkinCareItem from "./skinitem";
import Form from "./skinform";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function ListDisplay(props) {
  // if there is no local storage blank array else saved items
  const [items, setItems] = useState(
    !localStorage.getItem("items")
      ? []
      : JSON.parse(localStorage.getItem("items"))
  );
  // getting from  local
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);

  useEffect(() => {
    // saving to local
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
        {/* map to load */}
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
