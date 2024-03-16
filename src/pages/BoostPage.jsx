import React from "react";
import { Button, Col } from "react-bootstrap";
import SpinningImg from "../assets/spinning.png";

const BoostPage = () => {
  let ColStyle = {};
  let BSCol = " d-flex flex-column gap-2 px-2 mt-4";

  let ImgStyle = {
    height: "150px",
    width: "150px",
    padding: "10px 0px",
    margin: "20px 0px",
  };

  let BSText = "border p-2 rounded-3";

  let xs = 12;
  let sm = 12;
  let md = 12;

  let TextStyle = {
    fontSize: "13px",
    padding: "0px 0px",
    fontWeight: "bold",
    margin: "0px",
  };

  return (
    <div
      style={{ height: "100vh", width: "100vw" }}
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
        <div>
          <p className="p-0 m-0">Your Balance</p>
          <h3>$CDM 0.00</h3>
        </div>
      </div>

      <Col xs={xs} sm={sm} md={md} className={BSCol} style={ColStyle}>
        <p className={BSText} style={TextStyle}>
          Follow CDM on Twitter
        </p>
        <p className={BSText} style={TextStyle}>
          Follow CDM on Telegram
        </p>
        <p className={BSText} style={TextStyle}>
          Follow CDM on Telegram
        </p>
        <p className={BSText} style={TextStyle}>
          Follow CDM on Telegram Community
        </p>
        <p className={BSText} style={TextStyle}>
          Join CDM on Discord
        </p>
        <p className={BSText} style={TextStyle}>
          Follow CDM on Youtube
        </p>
        <p className={BSText} style={TextStyle}>
          Invite Your Friends
        </p>
      </Col>
    </div>
  );
};

export default BoostPage;
