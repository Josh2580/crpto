import React from "react";
import { Button, Col } from "react-bootstrap";
import SpinningImg from "../assets/maze2.png";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BoostPage = () => {
  const navigate = useNavigate();

  let ColStyle = {};
  let BSCol = " d-flex flex-column gap-2 px-2 mt-4";

  let ImgStyle = {
    height: "150px",
    width: "150px",
    padding: "10px 0px",
    margin: "20px 0px",
  };

  let BSText = "border p-2 rounded-3";

  <Button>0x0we....ed4vb</Button>;
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
          display: "block",
          background: "#8d8ab6",
          width: "100%",
          fontSize: "30px",
          textAlign: "left",
          margin: "0px",
          paddingLeft: "14px",
          color: "#171717",
        }}
      >
        <FaArrowCircleLeft onClick={() => navigate("/")} />
      </div>
      <div
        style={{
          background: "#8d8ab6",
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
