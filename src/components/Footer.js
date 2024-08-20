import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="w-100">
      <div className="d-flex justify-content-between py-3 flex-col flex-md-row">
        <h1 className="display-4">
          Let's <br className="d-none d-md-block"/> Work Together -
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
      <div className="d-flex justify-content-between  py-3">
        <h6 style={{ color: "#A9A9A9" }}> © 2023 All rights reserved.</h6>
      </div>
    </div>
  );
}
export default Footer;
