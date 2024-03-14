import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Profile from "../components/Profile";
import Portfolio from "../components/Portfolio";
import ContactInfo from "../components/ContactInfo";

function Homepage() {
  return (
    <div className="d-flex flex-column bg-light gap-5">
      <ContactInfo />
      <Profile />
      <Portfolio />
    </div>
  );
}

export default Homepage;
