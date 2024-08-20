import { Row, Col, Button } from "react-bootstrap";

function About() {
  return (
    <Row className="justify-content-center sectionPading" id="About">
      <Col xs={12} md={12} lg={12} xl={10} xxl={8} className="justify-content-center text-center">
        <h1>About Me</h1>
        <h6 className="gloweyText boldNoSpacing">Get to know me</h6>

        <br />
        <p>
          Hi there! I'm [Your Name], a data scientist specializing in data analytics, predictive modeling, natural language processing, machine learning, and AI chatbots. With a passion for unraveling insights from complex datasets, I'm dedicated to helping businesses make informed decisions and stay ahead in today's data-driven world.
          <br />
          <br />
          I bring a blend of technical expertise, hands-on experience, and a commitment to clear communication to every project. Whether it's uncovering hidden patterns, predicting future trends, or automating processes with AI, I'm here to help you harness the full potential of your data.
          <br />
          <br />
          Let's work together to transform your data into actionable insights that drive real results. Get in touch, and let's start unlocking the power of your data today!
        </p>
        <br />
        <Button className="roundedButton">Download Resume</Button>
      </Col>
    </Row>
  );
}
export default About;
