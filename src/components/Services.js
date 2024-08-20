import { Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faEarthAmericas, faScroll } from "@fortawesome/free-solid-svg-icons";
import { faEthereum, faDiscord } from "@fortawesome/free-brands-svg-icons";
import nftGeneration from "../assets/nftGeneration.gif";

function Services() {
  return (
    <Row className="justify-content-center sectionPading" id="Services">
      <Col xs={12} md={12} lg={12} xl={12} xxl={12} className="justify-content-center text-center">
        <h1>What I do</h1>
        <h6 className="gloweyText boldNoSpacing">My services</h6>
        <br />
        <br />

        <Row>
          <Col xs={12} sm={12} md={6} lg={4} className="p-2">
            <Card className="serviceCard">
              <Card.Body>
                <Card.Title className="text-start">
                  <div className="serviceIcon">
                    <FontAwesomeIcon icon={faEarthAmericas} />
                  </div>
                  <h6> Full-Stack Development</h6>
                </Card.Title>
                <Card.Text>From data inception to actionable insights, I design compelling analytics and visualization solutions that illuminate trends, empower decision-making, and drive your business forward.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} className="p-2">
            <Card className="serviceCard">
              <Card.Body>
                <Card.Title className="text-start">
                  <div className="serviceIcon">
                    <FontAwesomeIcon icon={faEthereum} />
                  </div>
                  <h6> Smart Contracts Development</h6>
                </Card.Title>
                <Card.Text>From data inception to actionable insights, I design compelling analytics and visualization solutions that illuminate trends, empower decision-making, and drive your business forward.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} className="p-2">
            <Card className="serviceCard">
              <Card.Body>
                <Card.Title className="text-start">
                  <div className="serviceIcon">
                    <FontAwesomeIcon icon={faDiscord} />
                  </div>
                  <h6> Discord & Telegram Bots</h6>
                </Card.Title>
                <Card.Text>From data inception to actionable insights, I design compelling analytics and visualization solutions that illuminate trends, empower decision-making, and drive your business forward.</Card.Text>
              </Card.Body>
            </Card>
          </Col>


          <Col xs={12} sm={12} md={6} lg={4} className="p-2">
            <Card className="serviceCard">
              <Card.Body>
                <Card.Title className="text-start">
                  <div className="serviceIcon">
                    <FontAwesomeIcon icon={faScroll} />
                  </div>
                  <h6> NodeJS Scripting</h6>
                </Card.Title>
                <Card.Text>From data inception to actionable insights, I design compelling analytics and visualization solutions that illuminate trends, empower decision-making, and drive your business forward.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={12} lg={9} xl={8} className="p-2">
            <Card className="serviceCard">
              <Card.Body>
                <Row>
                  <Col xs={12} sm={12} md={6} lg={9} xl={8}>
                    <Card.Title className="text-start">
                      <div className="serviceIcon">
                        <FontAwesomeIcon icon={faImages} />
                      </div>
                      <h6> NFT Generation</h6>
                    </Card.Title>
                    <Card.Text>From data inception to actionable insights, I design compelling analytics and visualization solutions that illuminate trends, empower decision-making, and drive your business forward.</Card.Text>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                    <img src={nftGeneration} alt="NFT Generation" className="w-100 mt-4 mt-md-0" style={{ borderRadius: "8px" }}></img>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
export default Services;
