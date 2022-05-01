import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

class ScrollTop extends Component {
  constructor() {
    super();
    this.state = {
      is_visible: false,
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div className="scroll-to-top position-fixed">
        {is_visible && (
          <div onClick={() => this.scrollToTop()}>
            <a
              className="d-block text-center text-white rounded"
              style={{ paddingTop: "4px" }}
            >
              <FontAwesomeIcon icon={faSortUp} size="lg" />
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default ScrollTop;
