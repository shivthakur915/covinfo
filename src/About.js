import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "./Head";
import Shield from "./Shield";

class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <Head
          title="About Us"
          text1="We are here to navigate you through the basic
          sevices regarding the COVID19."
          text2="Wanna know more about us? Click Below!!"
        />
        <div class="container-xl mt-5 mb-5">
          <h1 className="serviceHeading text-center">COViNFO</h1>
          <Shield />
          <div className="container">
            <div className="row">
              <div class="col">
                <div className="container">
                  <h3 style={{ textAlign: "justify" }}>
                    All We Know About the Novel Coronavirus so far the whole
                    world has suffered through it. According to the WHO, a
                    pandemic is the worldwide spread of a new disease. As
                    coronavirus cases continue to spiral in India and hospitals
                    are stretched beyond breaking point, we as a group initiated
                    a project to help Covid-19 patients in critical condition.
                    And now, the Covid-19 second wave has arrived having a
                    disastrous impact on us all living in India. A lot of people
                    have been trying the help the ones in need of it. So our
                    group decided to create a website to help the common
                  </h3>
                </div>
              </div>
              <div className="col">
                <div className="container">
                  <h3 style={{ textAlign: "justify" }}>
                    people by making a single platform for most of the services
                    related to COVID such as booking appointments, register for
                    vaccination, donate to the cause etc. CovInfo is a very
                    user-friendly platform that makes it easier for people to do
                    a lot of necessary tasks as well as get covid related
                    information and keep themselves updated. Whether it’s
                    booking an appointment to get tested for COVID-19 or
                    Registering for Covid Vaccine or even donate to some of the
                    wells knows NGOs to help those in need.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Shield/>
        <Footer />
      </div>
    );
  }
}

export default About;
