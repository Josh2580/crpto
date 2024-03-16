import React from "react";
import { Button, Col } from "react-bootstrap";
import SpinningImg from "../assets/maze1.png";

const GasPage = () => {
  let ColStyle = {
    // background: "blueviolet",
    boxShadow: " 0 0 4 6 ",
    border: "1px solid gray",
  };

  let ImgStyle = {
    height: "150px",
    width: "150px",
    padding: "10px 0px",
    margin: "20px 0px",
  };

  let BSCol =
    " d-flex align-items-center  justify-content-between border p-2 h-100  rounded-3";

  let xs = 12;
  let sm = 5;
  let md = 5;

  let TextStyle = {
    fontSize: "13px",
    padding: "0px 0px",
    fontWeight: "bold",
    margin: "0px",
  };

  return (
    <div
      style={{ height: "100vh" }}
      className="px- pb-5 text-center bg-secondary "
    >
      <div
        style={{
          background: "#2f1e39",
          width: "",
          // borderBottomLeftRadius: "120px",
          // borderBottomRightRadius: "120px",
        }}
        className="pb-4 text-light "
      >
        <img src={SpinningImg} alt="Spinning Image" style={ImgStyle} />
        <p>
          Every CDM claim is a Cardano blockchain transaction. We will pay for
          your gas expenses as long as you have gas-free transactions.{" "}
        </p>
      </div>

      <div className="d-flex flex-wrap gap-3 mt-4 mx-3  text-light border-secondary">
        <Col xs={xs} sm={sm} md={md} className={BSCol} style={ColStyle}>
          <p style={TextStyle}>Increase your mining time to claim less often</p>

          <p>$1.00</p>
        </Col>
        <Col xs={xs} sm={sm} md={md} className={BSCol} style={ColStyle}>
          <p style={TextStyle}>Increase your mining speed 2x, 4x, 6x</p>

          <p>$1.00</p>
        </Col>
      </div>
    </div>
  );
};

export default GasPage;
