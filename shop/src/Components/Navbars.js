import { Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

import './Navbars.scss';
function Navbars() {
  let navigate = useNavigate();
  
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className="navLink" onClick={()=> {navigate('/')}}>Home</Nav.Link>
          <Nav.Link className="navLink" onClick={()=> {navigate('/list')}}>Products</Nav.Link>
          <Nav.Link className="navLink" onClick={()=> {navigate('/about')}}>About</Nav.Link>
          <Nav.Link className="navBack" onClick={()=> {navigate(-1)}}>Back</Nav.Link>

          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/about">About</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={()=> {navigate('/list')}}>Products</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  );
}

export default Navbars;
