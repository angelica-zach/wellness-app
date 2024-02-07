import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useCallback } from "react";

export default function Exercise() {
  const onDragEnd = useCallback(() => {
    // the only one that is required
  }, []);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>Hello World!</div>
    </DragDropContext>
  );
}
