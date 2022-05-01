import Header from "./Header";
import Footer from "./Footer";
import Head from "./Head";
import Shield from "./Shield";

function focus(e) {
  if (e.target.value == "") {
    document.getElementById(e.target.name).style.opacity = "0";
    document.getElementById(e.target.name).style.top = "2em";
  } else {
    document.getElementById(e.target.name).style.opacity = "1";
    document.getElementById(e.target.name).style.top = "0";
  }
}

function Contact() {

  const handleAlert = event => {
    alert('Thanks for contacting us. We\'ll get in touch with you shortly. ');
  }

  return (
    <div>
      <Header />
      <Head
        title="Contact Us"
        text1="We are here to navigate you through the basic
                sevices regarding the COVID19."
        text2="Wanna know more about us? Click Below!!"
        href="#contact"
      />
      <section className="page-section" id="contact">
        <div className="container mt-5">
          <Shield />
          <div className="mx-5 px-5">
            <form id="contactForm" onSubmit={handleAlert}>
              <div className="control-group">
                <div className="form-group floating-label pb-4">
                  <label id="label1" className="text-info">
                    Name
                  </label>
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    name="label1"
                    placeholder="Name"
                    onChange={focus}
                    required
                  />
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label pb-4">
                  <label id="label2" className="text-info">
                    Email Address
                  </label>
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    name="label2"
                    onChange={focus}
                    required
                  />
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label pb-4">
                  <label id="label3" className="text-info">
                    Phone Number
                  </label>
                  <input
                    className="form-control"
                    id="phone"
                    type="tel"
                    pattern="[0-9]{10}"
                    name="label3"
                    onChange={focus}
                    placeholder="Phone Number"
                    required
                  />
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label pb-4">
                  <label id="label4" className="text-info">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    placeholder="Message"
                    name="label4"
                    onChange={focus}
                    required
                  ></textarea>
                </div>
              </div>
              <br />
              <div></div>
              <div className="form-group">
                <button className="btn btn-info btn-lg mb-5" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
