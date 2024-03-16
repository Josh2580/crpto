import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Gain from "../components/Gain";
import Dollar from "../components/Dollar";
import Profile from "../components/Profile";

function Homepage() {
  return (
    <div className="d-flex flex-column bg-dark gap-4">
      <Profile />
      <Gain />
      <Dollar />
    </div>
  );
}

export default Homepage;
