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

                  // STYLE DRAGGABLE CONTAINERS BELOW
                  
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "auto auto auto auto auto",
                      border: "solid",
                      background: snapshot.isDraggingOver
                        ? "lightblue"
                        : "lightgrey",
                      padding: 4,
                      width: "60rem",
                      minHeight: 500,
                    }}
                    className="row"
                  >
                    {column.items.map((item, index) => { 
                      return (
                        <div key={item.id} className="col-4 border-bottom border-dark">
                            <DragExercise
                              key={item.id}
                              item={item}
                              index={index}
                            />
                        </div>
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
