import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import LogoImg from "../assets/CDMLogo.png";

const Profile = () => {
  return (
    <div className="mx-4">
      <div className=" d-flex mb-3  ">
        <img
          src={LogoImg}
          style={{ height: "70px", margin: "0px" }}
          alt="CDM Logo"
        />
      </div>
      <div className="d-flex m-0 text-light flex-column  align-items-center rounded-4 w-100 p-5 gap-3 border border-secondary ">
        <div className="d-flex flex-column align-items-center">
          <p className="p-0 m-0 fs-6">Earned CDM</p>
          <h3>$CDM 0.00</h3>
        </div>
        <div className="d-flex gap-3  rounded-4 px-3 ">
          <span>Profits</span>
          <span className="fw-bold">$15,734</span>
          <span>4.3%</span>
        </div>
        {/* <div className="d-flex gap-4">
          <p className="d-flex flex-column align-items-center">
            <span className="fw-bold">Port</span>
            <span className="fw-bold">Portfolio</span>
          </p>
          <p className="d-flex flex-column align-items-center">
            <span className="fw-bold">Port</span>

            <span className="fw-bold">Schedule</span>
          </p>
          <p className="d-flex flex-column align-items-center">
            <span className="fw-bold">Port</span>

            <span className="fw-bold">Deposit</span>
          </p>
          <p className="d-flex flex-column align-items-center">
            <span className="fw-bold">Port</span>

            <span className="fw-bold">More</span>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Profile;
