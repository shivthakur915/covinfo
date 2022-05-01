import {
    faFacebook,
    faInstagram,
    faTwitter,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Cards(props) {
    return (
        <div className="our-team rounded">
            <div className="pic">
                <img src={props.src} alt="image1" />
            </div>
            <div className="team-content mt-3">
                <h3 className="title"> {props.name} </h3>
                <span className="post"> {props.post} </span>
            </div>
            <ul className="social">
                <li> <a href="#"> <FontAwesomeIcon icon={faFacebook} /> </a> </li>
                <li> <a href="#"> <FontAwesomeIcon icon={faInstagram} /> </a> </li>
                <li> <a href="#"> <FontAwesomeIcon icon={faTwitter} /> </a> </li>
                <li> <a href="#"> <FontAwesomeIcon icon={faLinkedin} /> </a> </li>
            </ul>
        </div>
    );
}

export default Cards;