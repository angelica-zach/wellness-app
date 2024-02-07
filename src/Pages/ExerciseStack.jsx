import React from "react";
import Button from 'react-bootstrap/Button';


 function ExerciseStack() {
  return (
    <>
      <Button id="cardio" variant="primary">Cardio</Button>{' '}
      <Button id="upper" variant="secondary">Upper Body</Button>{' '}
      <Button id="lower" variant="success">Lower Body</Button>{' '}
      <Button id="yoga" variant="warning">Yoga</Button>{' '}
      <Button id="pilates" variant="danger">Pilates</Button>{' '}
      <Button id="Rest" variant="info">Rest</Button>{' '}      
    </>
  );
}

export default ExerciseStack;


