import Button from 'react-bootstrap/Button';
import workoutOptions from '../utils/workoutOptions';

 function ExerciseStack() {
  return (
    <div>
      {workoutOptions.map(option => (
        <Button key={option.id} onClick={() => handleClick(option.embedId)}>
          {option.id}
        </Button>
      ))}
    </div>
  );
}

function handleClick(embedId) {
  // Handle click action here, for example, you can set the src of an iframe
  console.log("Clicked on embedId:", embedId);
  console.log(`Video === https://www.youtube.com/embed/${embedId}`)
  // Example: document.getElementById("your-iframe").src = `https://www.youtube.com/embed/${embedId}`;
}


export default ExerciseStack;


