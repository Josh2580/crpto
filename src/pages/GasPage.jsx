import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";
import SpinningImg from "../assets/maze1.png";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  useCreateOrderMutation,
  useCreateInvoiceMutation,
} from "../api/paymentApi";

const GasPage = () => {
  const [createOrder] = useCreateOrderMutation();
  const [createInvoice] = useCreateInvoiceMutation();

  const PayHandler = async (amount) => {
    const userId = 2;
    const formData = new FormData();
    formData.append("fiat_amount", amount);
    const orderResult = await createOrder({ formData, user_id: userId });
    if (orderResult) {
      const orderId = orderResult.data.id;

      const invoiceResult = await createInvoice({
        user_id: userId,
        order_id: orderId,
      });
      if (invoiceResult) {
        console.log(invoiceResult);
        window.location.href =
          invoiceResult.invoice_url || invoiceResult.data.invoice_url;
      }
    }
  };

  const navigate = useNavigate();
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
          background: "#8d8ab6",

          width: "",
          // borderBottomLeftRadius: "120px",
          // borderBottomRightRadius: "120px",
        }}
        className="pb-4 text-dark fw-bold"
      >
        <div
          style={{
            display: "block",
            // background: "red",
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

        <div>
          <img src={SpinningImg} alt="Spinning Image" style={ImgStyle} />
          <p>
            After activation, participants can now mine by spinning.
            <br />
            Activate Below !!!
          </p>
        </div>
      </div>

      <div className="d-flex flex-wrap gap-3 mt-4 mx-3  text-dark fw-bold border-secondary">
        <Col
          xs={xs}
          sm={sm}
          md={md}
          className={BSCol}
          style={ColStyle}
          onClick={() => PayHandler(3)}
        >
          <p className="p-0 py-1 m-0 fw-bold">Activate Your Mining Power</p>

          <p className="p-0 py-1 m-0 fw-bold">$3</p>
        </Col>
        <Col
          xs={xs}
          sm={sm}
          md={md}
          className={BSCol}
          style={ColStyle}
          onClick={() => PayHandler(7)}
        >
          <p className="p-0 py-1 m-0 fw-bold">One Week Auto Spinner Bot</p>

          <p className="p-0 py-1 m-0 fw-bold">$7</p>
        </Col>
      </div>
    </div>
  );
};

export default GasPage;
