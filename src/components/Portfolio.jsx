import React from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";

let ColStyle = {
  // background: "blueviolet",
  boxShadow: " 0 0 4 6 ",
  border: "1px solid gray",
};

let BSCol =
  "d-flex justify-content-between align-items-center p-2 h-100  rounded-3";

let xs = 12;
let sm = 5;
let md = 5;

const Portfolio = () => {
  return (
    <div className="d-flex flex-wrap gap-1 mb-5">
      <Col xs={xs} sm={sm} md={md} className={BSCol} style={ColStyle}>
        <div>
          <h4>CDM</h4>
        </div>
        <h4>$1.00</h4>
      </Col>
      <Col xs={xs} sm={sm} md={md} className={BSCol} style={ColStyle}>
        <div>
          <h4>ADA</h4>
        </div>
        <h4>$1.00</h4>
      </Col>
    </div>
  );
};

export default Portfolio;
