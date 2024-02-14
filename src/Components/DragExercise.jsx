import { Draggable } from "react-beautiful-dnd";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
              margin: "6px 6px 6px 6px",
              minHeight: "50px",
              ...provided.draggableProps.style,
            }}
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                {/* need to pass the handleShow as a prop */}
                <Button onClick={() => handleShow(item.embedId)}>
                  Watch Video
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      }}
    </Draggable>
  );
}
