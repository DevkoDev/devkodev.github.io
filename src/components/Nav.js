import Container from "react-bootstrap/Container";
import { Nav, Navbar, Button } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

function NavSection() {
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand href="#home" className="oleo-script-regular" style={{ fontSize: "28px" }}>
          Devko.dev
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-center">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="me-2">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/#About" className="me-2">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/#Projects" className="me-2">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/#Services" className="me-2">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/#Resume" className="me-2">
              Resume
            </Nav.Link>
          </Nav>
          <Button className="contactMeButton">Contact Me</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavSection;
