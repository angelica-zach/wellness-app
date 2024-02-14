import React from "react";
import { Draggable } from "react-beautiful-dnd";



import { useState } from "react";

export default function DragExercise({ item, index }) {
  const [showModal, setShowModal] = useState(false);
  const [embedId, setEmbedId] = useState(null);

  const handleClose = () => setShowModal(false);
  const handleShow = (embedId) => {
    setShowModal(true);
    setEmbedId(embedId);
  };

  return (
    <>
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
              <Card
                style={{
                  maxHeight: "400px",
                  maxWidth: "200px",
                  fontSize: "14px",
                }}
              >
                <Card.Img
                  variant="top"
                  src={item.image}
                  style={{
                    maxHeight: "400px",
                    maxWidth: "200px",
                    fontSize: "14px",
                  }}
                />
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
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Workout Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            title="workoutVideo"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
