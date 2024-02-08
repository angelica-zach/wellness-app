import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import workoutOptions from '../utils/workoutOptions';

function ExerciseStack() {
  const [showModal, setShowModal] = useState(false);
  const [embedId, setEmbedId] = useState(null);

  const handleClose = () => setShowModal(false);
  const handleShow = (embedId) => {
    setShowModal(true);
    setEmbedId(embedId)
  };
  return (
    <div>
      <div className="card-deck">
        {workoutOptions.slice(0, 6).map(option => (
          <Card key={option.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={option.image} />
            <Card.Body>
              <Card.Title>{option.title}</Card.Title>
              <Card.Text>
                {option.description}
              </Card.Text>
              <Button onClick={() => handleShow(option.embedId)}>Watch Video</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
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

    </div>
  );
}

//function handleClick(embedId) {
  // Handle click action here, for example, you can set the src of an iframe
  //console.log("Clicked on embedId:", embedId);
  //console.log(`Video === https://www.youtube.com/embed/${embedId}`)
  // Example: document.getElementById("your-iframe").src = `https://www.youtube.com/embed/${embedId}`;
//}


export default ExerciseStack;


