import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Service from "../components/Service";
import Portfolio from "../components/Portfolio";
import ContactInfo from "../components/ContactInfo";

function Homepage() {
  return (
    <div className="d-flex flex-column bg-light gap-5">
      <ContactInfo />
      <Service />
      <Portfolio />
    </div>
  );
}

export default Homepage;
