import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Profile = () => {
  return (
    <>
      <div className=" d-flex align-items-center  justify-content-between px-1 fs-6 rounded-4">
        <p className="m-0 p-1">Connect Wallet</p>
        <p className="m-0 p-1">N</p>
      </div>
      <div className="d-flex flex-column align-items-center rounded-4 mx-auto p-3 gap-3">
        <div className="d-flex flex-column align-items-center">
          <p className="p-0 m-0 fs-6">Earned CDM</p>
          <h3>$CDM 0.00</h3>
        </div>
        <div className="d-flex gap-3  rounded-4 px-3 ">
          <span>Profits</span>
          <span className="fw-bold">$15,734</span>
          <span>4.3%</span>
        </div>
        <div className="d-flex gap-4">
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
        </div>
      </div>
    </>
  );
};

export default Profile;
