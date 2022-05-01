import React, {useState} from "react";
import logo from "./assets/logo.png";
import { BrowserRouter as Route, useHistory } from "react-router-dom";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  const history = useHistory();

  const handleAbout = () => {
    history.push("/about");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleServices = () => {
    history.push("/services");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleContact = () => {
    history.push("/contact");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleTeam = () => {
    history.push("/team");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleHome = () => {
    history.push("/");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleAppointment = ()=> {
    history.push("/services");
    setTimeout(
      function() {
        window.scrollTo({
          top: 750,
          behavior: "smooth",
        });
      }, 100
    );
  };

  const handleVaccination = () => {
    history.push("/services");
    setTimeout(
      function() {
        window.scrollTo({
          top: 1500,
          behavior: "smooth",
        });
      }, 100
    );
  };

  const handleAvailability = () => {
    history.push("/services");
    setTimeout(
      function() {
        window.scrollTo({
          top: 2900,
          behavior: "smooth",
        });
      }, 100
    );
  };

  const handleDonation = event => {
    event.preventDefault();
    history.push("/services");
    setTimeout(
      function() {
        window.scrollTo({
          top: 2220,
          behavior: "smooth",
        });
      }, 100
    );
  };

  const [show, setShow]=React.useState(false);


  function resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 200,
      headerEl = document.getElementById("mainNav");

    if (distanceY > shrinkOn) {
      headerEl.classList.add("navbar-shrink");
    } else {
      headerEl.classList.remove("navbar-shrink");
    }
  }

  window.addEventListener("scroll", resizeHeaderOnScroll);

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg text-uppercase fixed-top"
        id="mainNav"
      >
        <div className="container">
          <img
            className="navbar-brand"
            src={logo}
            onClick={handleHome}
            alt="CovInfo"
            style={{maxHeight: "70px", maxWidth: "230px"}}
          />
          <button
            className="navbar-toggler navbar-toggler-right text-uppercase bg-info text-white"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={()=>setShow(!show)}
          >
            Menu
            <FontAwesomeIcon className="ml-1" icon={faBars} />
          </button>
          <div style={show?{display:"block"}:{display:'none'}} className={"collapse navbar-collapse justify-content-end"}>
          <div
            id="navbarResponsive"
          >
            <ul className="navbar-nav">
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link p-3" onClick={handleAbout}>
                  About
                </a> 
              </li>
              <li className="nav-item dropdown mx-0 mx-lg-1">
                <a
                  className="nav-link p-3"
                  id="navbarDropdown"
                  data-toggle="dropdown"
                  onClick={handleServices}
                >
                  Services
                  <FontAwesomeIcon className="ml-1" icon={faCaretDown} />
                </a>
                <div
                  id="drop-mn"
                  className="dropdown-menu mx-2"
                  aria-labelledby="navbarDropdown"
                >
                  <a className="dropdown-item px-3 nav-link" onClick={handleAppointment}>Appointment</a> 
                  <a className="dropdown-item px-3 nav-link" onClick={handleVaccination}>Vaccination</a>
                  <a className="dropdown-item px-3 nav-link" onClick={handleDonation}>Donation</a>
                  <a className="dropdown-item px-3 nav-link" onClick={handleAvailability}>Availability</a>
                </div>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link p-3" onClick={handleTeam}>
                  Team
                </a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link p-3" onClick={handleContact}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
