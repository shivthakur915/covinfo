import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "./Head";
import Cards from "./Cards";
import Shield from "./Shield";
import shiv from "./assets/shivam.jpeg";
import aaku from "./assets/aakriti.jpeg";
import kirti from "./assets/kirti.jpeg";
import anam from "./assets/anam.jpeg";

class Team extends Component {
  render() {
    return (
      <div>
        <Header />
        <Head
          title="Team"
          text1="Wanna know about the people behind this?"
          text2="Follow us on the social media."
          href="#team"
        />
        <section id="team">
          <h2 className="text-center mt-5"> Meet the Maker!</h2>
          <Shield />
          <div className="container container-team mb-5 pb-3">
            <Cards name="Shivam" post="Full-Stack Developer" src={shiv} />
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
export default Team;
