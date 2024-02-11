import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Wellness App</Navbar.Brand>
        <Nav className="navTab">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/meals">Meal Ideas</Nav.Link>
          <Nav.Link as={Link} to="/workout">Workout Plans</Nav.Link>
          <Nav.Link as={Link} to="/selfcare">Self Care</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;

