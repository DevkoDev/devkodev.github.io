import { Row, Card, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import projectsData from "../projectsData";

function Projects() {
  const [limit, setLimit] = useState(6);

  // Function to update the content
  const updateContent = (newLimit) => {
    console.log(newLimit);
    setLimit(newLimit);
  };

  const filteredProjects = projectsData.slice(0, limit);

  return (
    <Row className="justify-content-center sectionPading" id="section-projects">
      <Col xs={12} md={12} lg={12} xl={12} xxl={12} className="justify-content-center text-center">
        <h1>Projects</h1>
        <h6 className="gloweyText boldNoSpacing">Some of my work</h6>
        <br />
        <Row>
          {filteredProjects.map((project, index) => (
            <Col xs={12} md={6} lg={4} className="px-3 py-3 px-xxl-4 py-xxl-4" key={index}>
              <Card className="w-100 text-start projectCard">
                <Card.Img variant="top" src={project.preview_image} />
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text className="d-flex align-items-center justify-content-between">
                    <small className="text-white-50">{project.tags.join(" / ")}</small>
                  </Card.Text>
                  <div className="d-flex  justify-content-center">
                    {(project.etherscan) ? <a className="text-black fa-stack fa-lg" href={project.etherscan} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" />
                      <img src=" https://etherscan.io/images/brandassets/etherscan-logo-circle-light.svg" alt="Custom SVG Icon" className="custom-svg fa-stack-1x fa-inverse" />
                    </a> : ""}
                    {(project.website) ? <a className="text-black fa-stack fa-lg" href={project.website} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" />
                      <FontAwesomeIcon icon={faEarthAmericas} className="fa-stack-1x fa-inverse" />
                    </a> : ""}

                    {(project.github) ? <a className="text-black fa-stack fa-lg" href={project.github} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" />
                      <FontAwesomeIcon icon={faGithub} className="fa-stack-1x fa-inverse" />
                    </a> : ""}
                    {(project.opensea) ? <a className="text-black fa-stack fa-lg" href={project.opensea} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" />
                      <img src="https://storage.googleapis.com/opensea-static/Logomark/Logomark-Transparent%20White.svg" alt="Custom SVG Icon" className="custom-svg fa-stack-1x fa-inverse" />
                    </a> : ""}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {limit === 6 ? (
          <Button className="viewAllButton mt-3 mx-2" onClick={() => updateContent(50)}>
            View All
          </Button>
        ) : (
          <Button className="viewAllButton mt-3 mx-2" onClick={() => updateContent(6)}>
            View less
          </Button>
        )}
      </Col>
    </Row>
  );
}
export default Projects;
