import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter, faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="w-100">
      <div className="d-flex justify-content-center justify-content-md-between align-items-center py-3 flex-column flex-md-row">
        <h1 className="display-4">
          Let's <br className="d-none d-md-block" /> Work Together -
        </h1>
        <div className="d-flex align-items-center mt-4 mt-md-0">
          <Button className="emailButton py-4 px-4" onClick={() => (window.location.href = "mailto:devko.dev@yandex.com")}>
            {" "}
            <FontAwesomeIcon icon={faEnvelope} className="me-2" /> devko.dev@yandex.com
          </Button>
        </div>
      </div>

      <hr
        style={{
          color: "#A9A9A9",
          width: "100%",
          height: 5,
        }}
      />
      <br />
      <div className="d-flex pb-4  px-3 flex-column flex-md-row justify-content-md-between text-center text-md-start">
        <h6 style={{ color: "#A9A9A9" }} className="mb-0">
          {" "}
          © 2024 All rights reserved.
        </h6>
        <div className="d-flex justify-content-center align-items-center">
          <a href="https://twitter.com/devko_dev">
            <FontAwesomeIcon icon={faXTwitter} className="mt-2 mt-md-0 fa-lg mx-2" />
          </a>
          <a href="https://discord.gg/J8sPTV37P9">
            <FontAwesomeIcon icon={faDiscord} className="mt-2 mt-md-0 fa-lg mx-2" />
          </a>
          <a href="https://github.com/DevkoDev">
            <FontAwesomeIcon icon={faGithub} className="mt-2 mt-md-0 fa-lg mx-2" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
