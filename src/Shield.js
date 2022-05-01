import React, { Component } from "react";
import { faShieldVirus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Shield extends Component {
  render() {
    return (
      <div className="divider-custom">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <FontAwesomeIcon icon={faShieldVirus} />
        </div>
        <div className="divider-custom-line"></div>
      </div>
    );
  }
}

export default Shield;
