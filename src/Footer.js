import React, { Component } from "react";
import logo from "./assets/logo.png";
import ScrollTop from "./ScrollTop";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 my-4">
                <img
                  src={logo}
                  alt="CovInfo"
                  style={{ height: "70px", width: "290px" }}
                />
              </div>
              <div className="col-lg-4 my-3">
                <h4 className="text-uppercase mb-4">Around the Web</h4>
                <a className="btn btn-outline-light btn-social mx-1" href="#!">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a className="btn btn-outline-light btn-social mx-1" href="#!">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a className="btn btn-outline-light btn-social mx-1" href="#!">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </div>
              <div className="col-lg-4 mt-3">
                <h4 className="text-uppercase mb-4">About CovInfo</h4>
                <p className="lead mb-0">
                  <a className="text-info" href="">
                    CovInfo
                  </a>{" "}
                  is a Website to help people through the pandemic.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright py-4 text-center text-white">
          <div className="container">
            <small>Copyright &copy; CovInfo 2021</small>
          </div>
        </div>
        <ScrollTop />
      </footer>
    );
  }
}

export default Footer;
