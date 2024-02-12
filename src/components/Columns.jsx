import { Droppable } from "react-beautiful-dnd";
import DragExercise from "./DragExercise";

export default function Columns({ columns }) {
  return (
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
    </div>
  );
}