import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

// const tele = window.Telegram.WebApp;

const Root = () => {
  let style = {
    maxWidth: "450px",
  };

  return (
    <div
      style={style}
      className="w-100  d-flex h-100 flex-column justify-content-between"
    >
      <Container fluid className="m-0 p-0 ">
        <Outlet />
      </Container>
    </div>
  );
};

export default Root;
