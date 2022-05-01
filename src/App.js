import React, { Component } from "react";
import {Link} from 'react-router-dom'
import Header from "./Header";
import Footer from "./Footer";
import Shield from "./Shield";
import Image from "./Image";
import img1 from "./assets/safe.png";
import img2 from "./assets/cake.png";
import img3 from "./assets/game.png";
import avataaars from "./assets/avataaars.svg";

class App extends Component {

  componentDidMount() {
    window.scrollTo(1500, 0)
  }

  render() {
    return (
      <div>
        <Header />
        <div className="masthead bg-info text-white text-center">
          <div className="container d-flex align-items-center flex-column">
            <img className="masthead-avatar mb-5" src={avataaars} alt="..." />
            <h1 className="masthead-heading text-uppercase mb-0">CovInfo</h1>
            <Shield />
            <p className="masthead-subheading font-weight-light mb-0">
              All about COVID 19 at one place.
            </p>
          </div>
        </div>
        <section className="services">
          <div className="pt-5 text-center">
            <Image id="1" src={img1} text=" Get Tested for Covid 19." />
            <Image id="3" src={img3} text=" Donate for the cause." />
            <Image id="4" src={img2} text=" Check Availability." />
          </div>
        </section>
        <section className="bg-warning">
          <div
            className="mt-5 pb-5 text-center justify-content-center"
            id="vaccination"
          >
            <h1>Vaccination</h1>
            <div>
              <div className="d-inline-block">
                <img
                  src="https://prod-cdn.preprod.co-vin.in/assets/images/s1.svg"
                  alt="..."
                  height="150px"
                  width="150px"
                />
                <p>
                  <strong>REGISTER YOURSELF</strong>
                  <br />
                  Register using your Mobile no. or <br />
                  Aadhaar no. or any other Identity docs.
                </p>
              </div>
              <div className="d-inline-block">
                <img
                  src="https://prod-cdn.preprod.co-vin.in/assets/images/s2.svg"
                  alt="..."
                  height="150px"
                  width="150px"
                />
                <p>
                  <strong>VACCINE LOCATION</strong>
                  <br />
                  Select your nearby Vaccine Center
                  <br /> for vaccination
                </p>
              </div>
              <div className="d-inline-block">
                <img
                  src="https://prod-cdn.preprod.co-vin.in/assets/images/s3.svg"
                  alt="..."
                  height="150px"
                  width="150px"
                />
                <p>
                  <strong>CONFIRM YOUR SLOT</strong>
                  <br />
                  Book your slot to Get Vaccine
                  <br /> and visit the center
                </p>
              </div>
            </div>
            <Link to="/services"><button className="btn btn-lg btn-dark fs-4">Register</button></Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
