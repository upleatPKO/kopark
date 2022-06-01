import { Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';
import { Routes, Route, Link,useNavigate, Outlet} from 'react-router-dom';

import './Navbars.scss';
function Navbars() {
  let navigate = useNavigate();
  
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/list">Products</Link>
      <Link to="/pages/Detail">Detail</Link> */}

      <Nav.Link className="navLink" onClick={()=> {navigate('/')}}>Home</Nav.Link>
      <Nav.Link className="navLink" onClick={()=> {navigate('/list')}}>Products</Nav.Link>
      <Nav.Link className="navLink" onClick={()=> {navigate('/about')}}>About</Nav.Link>

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
