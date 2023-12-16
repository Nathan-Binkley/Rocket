// import logo from './logo.svg';
import FunNavigator from './FunNavigator';
import Nearby from "./Nearby";
import Plan from "./Plan";
import About from "./About";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav } from 'react-bootstrap';
function App() {

  document.body.style = 'background-color: #25274d;';
  let landingPageImages = ['img/gvl_1_16.9.jpg', 'img/gvl_2_16.9.jpg', 'img/gvl_3_16.9.jpg'];
  let landingPageDesc = ['Find fun things to do near you', 'Plan a night out for me', 'Own a restaurant? Submit info here'];

  return (
    <>
      <div
        style={{
          backgroundImage: `url("img/gvl_1.jpg")`,
          backgroundPosition: `top center`,
          backgroundRepeat: `no-repeat`,
          width: `2440px`,
          height: `1980px`,
          backgroundAttachment: 'fixed'
        }}
        className='img-fluid'>
        <Router>
          <div className="container">
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home" style={{ color: `#464866`, fontSize: `2em` }}>Consi</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto" style={{ fontSize: `1.25rem` }}>
                  <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                  <Nav.Link as={Link} to={"/nearby"}>Near Me</Nav.Link>
                  <Nav.Link as={Link} to={"/plan"}>Plan</Nav.Link>
                  <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          <br></br>
          </div>
          <div className="container background-general" >
            <Routes>
              <Route path="/" element={<FunNavigator images={landingPageImages} text={landingPageDesc}></FunNavigator>}>

              </Route>
              <Route path="/nearby" element={<Nearby />}>
              </Route>
              <Route path="/plan" element={<Plan />}>
              </Route>
              <Route path="/about" element={<About />}>
              </Route>

            </Routes>
          </div>
        </Router>
      </div>

    </>
  );


}

export default App;
