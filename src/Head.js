import Shield from "./Shield";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Head(props) {
  return (
    <header className="masthead bg-info text-white text-center">
      <div className="container d-flex align-items-center flex-column mt-5 mb-5">
        <h1 className="masthead-heading text-uppercase mt-4 mb-4">
          {props.title}
        </h1>
        <Shield />
        <p className="masthead-subheading font-weight-light mt-4 mb-0">
          {props.text1}
          <br />
          {props.text2}
        </p>
        <br />
        <a
          className="d-block text-center text-white rounded mt-5"
          href={props.href}
        >
          <FontAwesomeIcon icon={faSortDown} size="lg" />
        </a>
      </div>
    </header>
  );
}

export default Head;
