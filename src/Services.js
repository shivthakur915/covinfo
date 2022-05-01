import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Shield from "./Shield";
import Image from "./Image";
import Item from "./Item";
import Availability from "./Availability";
import img1 from "./assets/safe.png";
import img2 from "./assets/cake.png";
import img4 from "./assets/game.png";
import img3 from "./assets/submarine.png";
import i1 from "./assets/covid.jpg";
import i2 from "./assets/human.jpg";
import i3 from "./assets/persons.jpg";
import i4 from "./assets/virus.png";
import i6 from "./assets/vaxin.png";
import i5 from "./assets/virus-slash.png";
import i7 from "./assets/dollar.png";
import i8 from "./assets/hands.png";
import i9 from "./assets/hand-plus.png";

class Services extends Component {
  render() {
    return (
      <div>
        <Header />
        <header className="masthead bg-info text-white text-center">
          <div className="container d-flex align-items-top flex-column">
            <h1 className="masthead-heading text-uppercase ">Services</h1>
            <Shield />
            <p className="masthead-subheading font-weight-light">
              Below are the services that we can provide you.
            </p>
          </div>
          <div className="services mt-5 justify-content-center">
            <Image id="1" src={img1} text=" Get Tested for Covid 19." />
            <Image id="2" src={img3} text=" Get Vaccinated." />
            <Image id="3" src={img4} text=" Donate for the cause." />
            <Image id="4" src={img2} text=" Check Availability." />
          </div>
        </header>
        <Item
          id="booktest"
          title="Book Covid Test"
          h1="Service provided in partnership with certified testing laboratories."
          p1="Covinfo provides a seamless appointment booking system for tests that are conducted by
                trained medical professionals from the approved and certified testing laboratories."
          n1="1"
          t1="Test Included"
          n2="1000+"
          t2="Booked"
          h2="This package covers:"
          l1="Checks the presence of active SARS-CoV-2 virus"
          l2="Indicates if you currently have the COVID-19 infection"
          l3="Note 1 : It is a nasal/oral swab test"
          l4="Note 2 : Dr Lal Pathlab, Metropolis and Medall accept only prepaid orders. For POD
                bookings, our agent will call you to confirm the payment"
          l5="Because of surge in Covid cases your report will be available in 4-5 days from sample
                pickup"
          h3="Why should you book this package?"
          txt1="To check if you have an active COVID-19 infection"
          src1={i1}
          txt2="If you are showing symptoms of COVID-19 infection"
          src2={i2}
          txt3="If you had close contact with someone with confirmed COVID-19"
          src3={i3}
          btn="Book"
          formHead="Book an Appointment"
        />
        <Item
          id="vaccination"
          title="Register for Vaccination"
          h1="Service provided in partnership with certified laboratories."
          p1="Covinfo provides a seamless slot booking system for vaccination that is conducted by
                trained medical professionals from the approved and certified laboratories."
          n1="2"
          t1="Doses included"
          n2="1000+"
          t2="Registered"
          p2="This vaccine is part of the national and local government's vaccination program for the COVID-19
                (SARS-CoV-2).This
                vaccine is covered by public funds and is available free of charge to those who wish to receive
                it. This vaccine is intended for
                people 16 years of age and older."
          h2="Instructions:"
          l1="After the first vaccination, a second vaccination is usually given after 3 weeks."
          l2="If you received this vaccine for the first dose, be sure to receive the same vaccine for
                the second dose."
          l3="People who cannot receive the vaccine:"
          l4="1. People with obvious fever"
          l5="2. People suffering from serious acute illness"
          h3="Why should you get vaccinated?"
          txt1="To be safe and effective at preventing COVID-19"
          src1={i4}
          txt2="It will help you by increasing your immunity to fight the virus"
          src2={i5}
          txt3="It will be an important tool to help end this pandemic"
          src3={i6}
          btn="Register"
          formHead="Register"
        />
        <Item
          id="donate"
          title="Donate for the Cause"
          p1="The COVID-19 pandemic is one of the worst health and economic crises in modern history
                and it continues to require the best of humanity to overcome. Your donation to this fund will help stop
                COVID-19's spread and protect us all."
          n1="Help"
          t1="India fight this battle"
          n2="10,000+"
          t2="Donated"
          p2="Your donation to this fund will help stop the virus's spread around the world and give
                communities on the front lines of the crisis the resources they need to act quickly and protect
                the most vulnerable."
          h2="Donations are already helping to:"
          l1="1. Make COVID-19 vaccines more accessible and affordable"
          l2="2. Send doctors, nurses, and other front line responders to communities in need"
          l3="3. Get masks, ventilators, and other lifesaving medical supplies to hospitals and clinics"
          l4="4. Deliver essential items to struggling families and older individuals in quarantined
                cities and refugee camps"
          h3="Why should you donate?"
          txt1="It can save somebody's life !"
          src1={i7}
          txt2="It will help needy to fight this battle !"
          src2={i8}
          txt3="It will be an important tool to help end this pandemic !"
          src3={i9}
          btn="Donate"
          formHead="Donate"
        />
        <Availability />
        <Footer />
      </div>
    );
  }
}
export default Services;
