import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import PfpImage from "../assets/pfp.png";

function Landing() {
  return (
    <Row className="justify-content-center py-3"id="Home">
      <Col xs={9} className="justify-content-center text-center landingBackground p-5 mt-5">
        <img src={PfpImage} alt="Devko" className="mt-5"></img>
        <h1>Devko</h1>
        <h4 className="gloweyText">Full Stack Developer</h4>
        <p>As a passionate data scientist, with expertise in machine learning, AI, and data analytics, I thrive on the challenges of exploring complex data landscapes and uncovering meaningful patterns that drive innovation</p>
        <Button className="roundedButton mt-4 px-5 mb-5">Contact Me</Button>
      </Col>
    </Row>
  );
}
export default Landing;
