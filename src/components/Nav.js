import Container from "react-bootstrap/Container";
import { Nav, Navbar, Button } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import { useState, useEffect } from "react";
function NavSection() {
  const [activeSection, setActiveSection] = useState("section-home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('div[id^="section"]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Navbar expand="md" sticky="top">
      <Container>
        <Navbar.Brand href="#home" className="oleo-script-regular gloweyText" style={{ fontSize: "28px" }}>
          Devko.dev
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-center">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className={activeSection === "section-home" ? "active me-2" : "me-2"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/#section-about" className={activeSection === "section-about" ? "active me-2" : "me-2"}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/#section-services" className={activeSection === "section-services" ? "active me-2" : "me-2"}>
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/#section-projects" className={activeSection === "section-projects" ? "active me-2" : "me-2"}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/#section-contact" className={activeSection === "section-contact" ? "active me-2" : "me-2"}>
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
