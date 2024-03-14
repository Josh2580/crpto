import React, { useState } from "react";
import { Card, Row, Col, Modal, Button } from "react-bootstrap";
import BoostImg from "../assets/aka/boost.png";
import GasImg from "../assets/aka/gas.png";
import MazeImg from "../assets/aka/maze.png";
import SpinningImg from "../assets/aka/spinning.png";
import { useNavigate } from "react-router-dom";

const Gain = () => {
  const navigate = useNavigate();
  let textCardStyle = {
    // width: "163px",
    height: "200px",

    borderRadius: "16px",
    padding: "8px",
    background: "none",
  };
  let cardStyle = {
    // width: "163px",

    borderRadius: "16px",
    padding: "8px",
    background: "none",
  };

  let imgStyle = {
    width: "100%",
    minHeight: "114px",
    maxHeight: "114px",

    borderRadius: "16px",
  };

  let textStyle = {
    fontSize: "20px",
    textAlign: "center",
    margin: "0px",
    padding: "0px",
    // background: "yellow",
  };

  let BSText = " fw-bold text-light";

  let BSCol = " p-0 h-100 ";

  let BSCard = "border";

  let xs = 5;
  let sm = 5;
  let md = 5;

  return (
    <div className="d-flex flex-wrap justify-content-center gap-3">
      <Col xs={xs} sm={sm} md={md} className={BSCol}>
        <Card style={textCardStyle} className={BSCard}>
          <Card.Img variant="top" src={SpinningImg} style={imgStyle} />
          <Card.Body>
            <Card.Title className={BSText} style={textStyle}>
              Spinning Maze
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={xs} sm={sm} md={md} className={BSCol}>
        <Card style={textCardStyle} className={BSCard}>
          <Card.Img variant="top" src={MazeImg} style={imgStyle} />
          <Card.Body>
            <Card.Title className={BSText} style={textStyle}>
              Maze Tank
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={xs} sm={sm} md={md} className={BSCol}>
        <Card
          onClick={() => navigate("/gas")}
          className={BSCard}
          style={cardStyle}
        >
          <Card.Img variant="top" src={GasImg} style={imgStyle} />
        </Card>
      </Col>
      <Col xs={xs} sm={sm} md={md} className={BSCol}>
        <Card
          onClick={() => navigate("/boost")}
          className={BSCard}
          style={cardStyle}
        >
          <Card.Img variant="top" src={BoostImg} style={imgStyle} />
        </Card>
      </Col>
    </div>
  );
};

export default Gain;
