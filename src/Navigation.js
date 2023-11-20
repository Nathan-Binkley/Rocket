import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function Navigation() {
    return (
      <div className="container">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home" style={{color:`#464866`, fontSize:`2em`}}>Consi</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={{fontSize:`1.25rem`}}>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#nearby">Near Me</Nav.Link>
              <Nav.Link href="#plan">Plan</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      
    );
  }
  
  export default Navigation;
  