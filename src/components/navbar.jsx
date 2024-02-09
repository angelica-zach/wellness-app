import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Wellness App</Navbar.Brand>
          <Nav className="navTab">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#meal">Meal Ideas</Nav.Link>
            <Nav.Link href="#workout">Workout Plans</Nav.Link>
            <Nav.Link href="#selfcare">Self Care</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      </> 
  );
}

export default ColorSchemesExample;
