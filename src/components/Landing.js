import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import PfpImage from "../assets/pfp.jpg";

function Landing() {
  return (
    <Row className="justify-content-center py-3"id="section-home">
      <Col xs={12} md={8} className="justify-content-center text-center landingBackground p-5 mt-5">
        <img src={PfpImage} alt="Devko" className="mt-5 rounded-circle" style={{maxWidth:"200px"}}></img>
        <h1 className="oleo-script-regular my-1">Devko.dev</h1>
        <h4 className="gloweyText">Full Stack Developer</h4>
        <p>As a passionate data scientist, with expertise in machine learning, AI, and data analytics, I thrive on the challenges of exploring complex data landscapes and uncovering meaningful patterns that drive innovation</p>
        <Button className="roundedButton mt-4 px-5 mb-5">Contact Me</Button>
      </Col>
    </Row>
  );
}
export default Landing;
