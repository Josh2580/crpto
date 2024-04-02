import React from "react";
import MazeImg from "../assets/maze1.png";

const CdnImage = () => {
  return (
    <div
      style={{
        display: "flex",
        background: "#9ab7b9",
        width: "100vw",
        padding: "20px",
        height: "300px",
      }}
    >
      <img
        style={{
          //   display: "flex",
          // background: "#9ab7b9",
          width: "100%",
          padding: "20px",
        }}
        src={MazeImg}
        alt="Cardano Maze Image"
      />
    </div>
  );
};

export default CdnImage;
