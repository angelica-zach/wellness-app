import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";

const itemsData = [
  { id: uuid(), content: "Exercise 1" },
  { id: uuid(), content: "Exercise 2" },
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

  function onDragEnd(result, columns, setColumns) {
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
      onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
    >
      <div className="container-fluid">
        <div className="row">
          {Object.entries(columns).map(([id, column]) => {
            return (
              <div key={id} className="col m-2">
                <h2>{column.name}</h2>
                <Droppable droppableId={id} key={id}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "lightblue"
                            : "lightgrey",
                          padding: 4,
                          width: 250,
                          minHeight: 500,
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: "none",
                                      padding: 16,
                                      margin: "0 0 8px 0",
                                      minHeight: "50px",
                                      backgroundColor: snapshot.isDragging
                                        ? "red"
                                        : "blue",
                                      color: "white",
                                      ...provided.draggableProps.style,
                                    }}
                                  >
                                    {item.content}
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            );
          })}
        </div>
      </div>
    </DragDropContext>
  );
}
