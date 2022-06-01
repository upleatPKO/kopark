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

      <Nav.Link onClick={()=> {navigate('/')}}>Home</Nav.Link>
      <Nav.Link onClick={()=> {navigate('/list')}}>Products</Nav.Link>
      <Nav.Link onClick={()=> {navigate('/about')}}>About</Nav.Link>
      <Nav.Link onClick={()=> {navigate('/detail')}}>Detail</Nav.Link>

      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
      <NavDropdown.Item href="/">Drop1</NavDropdown.Item>
        <NavDropdown.Item href="/about">Drop2</NavDropdown.Item>
        <NavDropdown.Item href="/detail">Drop3</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
    </Nav>

  </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  );
}

export default Navbars;
