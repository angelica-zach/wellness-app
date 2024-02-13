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
              minWidth: "150px",
              minHeight: "50px",
              backgroundColor: snapshot.isDragging ? "red" : "blue",
              color: "white",
              ...provided.draggableProps.style,
            }}
          >
            

            {/* BUILD CARD BELOW */}

            <div className="card" style={{
              maxHeight: "200px",
              maxWidth: "150px"
            }}>
              <p>{item.content}</p>
              <p>{item.description}</p>
              <img 
              src={item.icon} 
              alt="icon" 
              style={{
                maxHeight: "50px",
                maxWidth: "50px"
              }}/>
            </div>
          </div>
        );
      }}
    </Draggable>
  );
}
