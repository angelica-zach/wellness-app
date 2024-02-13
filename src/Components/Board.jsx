import React from "react";
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";
import Columns from "./Columns";

const itemsData = [
  //test data
  { id: uuid(), content: "Exercise 1" },
  { id: uuid(), content: "Exercise 2" },
  { id: uuid(), content: "Exercise 3" },
  { id: uuid(), content: "Exercise 4" },
  { id: uuid(), content: "Exercise 5" },
  { id: uuid(), content: "Exercise 6" },
  { id: uuid(), content: "Exercise 7" },
];

const columnsData = {
  [uuid()]: {
    name: "Monday",
    items: itemsData,
  },
  [uuid()]: {
    name: "Tuesday",
    items: [],
  },
  [uuid()]: {
    name: "Wednesday",
    items: [],
  },
  [uuid()]: {
    name: "Thursday",
    items: [],
  },
  [uuid()]: {
    name: "Friday",
    items: [],
  },
};

export default function Board() {
  const [columns, setColumns] = useState(columnsData);

  //function to handle on drag event
  function handleOnDragEnd(result, columns, setColumns) {
    //if dropped outside column, do nothing
    if (!result.destination) return;
    //get relevant column's items from result object
    const { source, destination } = result;
    const sourceCol = columns[source.droppableId];
    const sourceItems = [...sourceCol.items];
    //remove the item from the list in the source column
    const [removed] = sourceItems.splice(source.index, 1);

    if (source.droppableId !== destination.droppableId) {
      //get destination column items
      const destCol = columns[destination.droppableId];
      const destItems = [...destCol.items];

      destItems.splice(destination.index, 0, removed);

      //update the state with both columns and the new item order
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceCol,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destCol,
          items: destItems,
        },
      });
    } else {
      sourceItems.splice(destination.index, 0, removed);

      //update the state of columns with the new item order
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceCol,
          items: sourceItems,
        },
      });
    }
  }

  return (
    <DragDropContext
      onDragEnd={(result) => handleOnDragEnd(result, columns, setColumns)}
    >
      <div className="container-fluid">
        <Columns columns={columns} />
      </div>
    </DragDropContext>
  );
}
