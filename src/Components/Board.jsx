import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import uuid from "uuid/v4";

const itemsData = [
  { id: uuid(), content: "Exercise 1" },
  { id: uuid(), content: "Exercise 2" },
];

const columnsData = {
  [uuid()]: {
    name: "Monday",
    items: items,
  },
};

export default function Board() {
  const [columns, setColumns] = useState(columnsData);
  return (
    <div className="container-fluid">
      <div className="row"></div>
      <DragDropContext
        onDragEnd={(result) => console.log(result)}
      ></DragDropContext>
    </div>
  );
}
