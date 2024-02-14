import React from "react";
import { Droppable } from "react-beautiful-dnd";
import DragExercise from "./DragExercise";

export default function ExerciseBox({ columns }) {
  //filter out exercise box
  const filteredCol = Object.fromEntries(
    Object.entries(columns).filter(([key, val]) => val.startingBox)
  );

  return (
    <>
      {Object.entries(filteredCol).map(([id, column]) => {
        return (
          <div key={id} className="container-fluid m-3">
            <h2>{column.name}</h2>
            <Droppable droppableId={id} key={id} direction="horizontal">
              {(provided, snapshot) => {
                return (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "auto auto auto auto auto auto",
                      padding: 4,
                      minHeight: 200,
                    }}
                  >
                    <div class="card-group">
                      {column.items.map((item, index) => {
                        return (
                          <DragExercise
                            key={item.id}
                            item={item}
                            index={index}
                          />
                        );
                      })}
                      {provided.placeholder}
                    </div>
                  </div>
                );
              }}
            </Droppable>
          </div>
        );
      })}
    </>
  );
}
