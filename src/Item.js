import Shield from "./Shield";
import Forms from "./Forms";
import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import test from "./assets/test.png";
import smiley from "./assets/smiley.png";

function Item(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section>
      <div className="container-xl my-5 py-3">
        <h1 className="serviceHeading text-center"> {props.title} </h1>
        <Shield />
        <h3 className="fadeText text-center mb-3"> {props.h1}</h3>
        <p className="paraText"> {props.p1} </p>
        <div className="wall">
          <div className="image">
            <img
              src={test}
              style={{ height: "73px", width: "73px" }}
              alt="..."
            />
          </div>
          <div>
            <p className="wallText">
              <b> {props.n1} </b> {props.t1}
            </p>
          </div>
        </div>
        <div className="wall">
          <div className="image">
            <img
              src={smiley}
              style={{ height: "73px", width: "73px" }}
              alt="..."
            />
          </div>
          <div>
            <p className="wallText">
              <b> {props.n2} </b> {props.t2}
            </p>
          </div>
        </div>
        <div className="midsec">
          <div className="packageSec">
            <br />
            <p>{props.p2}</p>
            <h2 style={{ fontSize: "20px" }}> {props.h2} </h2>
            <ul>
              <li> {props.l1} </li>
              <li> {props.l2} </li>
              <li> {props.l3} </li>
              <li> {props.l4} </li>
              <li> {props.l5} </li>
            </ul>
          </div>
          <div className="topSlider">
            <div className="headSec">
              <h2> {props.h3} </h2>
            </div>
            <div
              id="slider4"
              className="carousel slide"
              data-ride="carousel"
              data-interval="false"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="slide4_item">
                        <div className="hoverEffect ml-4">
                          <img title={props.txt1} src={props.src1} />
                        </div>
                        <h4> {props.txt1} </h4>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="slide4_item">
                        <div className="hoverEffect ml-4">
                          <img title={props.txt2} src={props.src2} />
                        </div>
                        <h4> {props.txt2} </h4>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="slide4_item">
                        <div className="hoverEffect ml-4">
                          <img title={props.txt3} src={props.src3} />
                        </div>
                        <h4> {props.txt3} </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group text-center">
          <button className="btn btn-info btn-lg mb-5" id="button"  variant="primary" onClick={handleShow}>
              {props.btn}
            </button>
            <Modal show={show} onHide={handleClose} dialogClassName="my-modal">
              <Modal.Header closeButton>
                <Modal.Title><h2>{props.formHead}</h2></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Forms frm={props.btn} />
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Item;
