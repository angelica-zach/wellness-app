import React from "react";
import { Draggable } from "react-beautiful-dnd";

export default function DragExercise({ item, index }) {
  return (
    <Draggable draggableId={item.id} index={index}>
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
              backgroundColor: snapshot.isDragging ? "red" : "blue",
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
}
