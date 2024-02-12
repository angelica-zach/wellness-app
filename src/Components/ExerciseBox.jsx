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
          <div key={id} className="container-fluid">
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
                        <DragExercise key={item.id} item={item} index={index} />
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
    </>
  );
}
