import { Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';
import './Navbars.scss';
function Navbars() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/detail">Products</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
      <NavDropdown.Item href="/">Drop1</NavDropdown.Item>
        <NavDropdown.Item href="/about">Drop2</NavDropdown.Item>
        <NavDropdown.Item href="/detail">Drop3</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  );
}

export default Navbars;
