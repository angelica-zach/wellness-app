import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const columnsFromBackend = {};

export default function Board() {
  return (
    <div className="container-fluid">
      <div className="row"></div>
      <DragDropContext
        onDragEnd={(result) => console.log(result)}
      ></DragDropContext>
    </div>
  );
}
