import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useCallback } from "react";

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: 8,
  height: "95vh",
  width: 250,
});

export default function Board() {
  const onDragEnd = useCallback(() => {
    // the only one that is required
  }, []);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="monday" type="EXERCISE">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={{
              backgroundColor: snapshot.isDraggingOver ? "blue" : "grey",
            }}
            {...provided.droppableProps}
          >
            <h2>Monday</h2>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
