import React, { useState, useEffect } from "react";
import { Card, Row, Col, Modal, Button } from "react-bootstrap";
import BoostImg from "../assets/boost.png";
import GasImg from "../assets/gas.png";
import MazeImg from "../assets/maze.png";
import SpinningImg from "../assets/spin.png";
import { useNavigate } from "react-router-dom";
import CustomImageLoader from "custom-image-loader-react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useGetMineQuery, useGetMineByIdQuery } from "../api/mineApi";

const Gain = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [trailColor, setTrailColor] = useState("");
  const [trailFull, setTrailFull] = useState(false);
  const [remainingTime, setRemainingTime] = useState();
  const [timer, setTimer] = useState(false);

  // const { data, error, isLoading } = useGetMineQuery();
  const { data, error, isLoading } = useGetMineByIdQuery(1);
  const [mineData, setMineData] = useState({});

  console.log(mineData);

  // console.log(trailFull);
  // console.log(remainingTime);

  const navigate = useNavigate();
  let textCardStyle = {
    // width: "163px",
    height: "180px",
    // display: "flex",
    // justifyContents: "space-between",
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
    fontSize: "16px",
    textAlign: "center",
    margin: "0px",
    padding: "0px",
    // background: "yellow",
  };

  let BSText = " fw-bold text-light";

  let BSCol = " p-0 h-100 ";

  let BSCard = "border d-flex  justify-content-between border-secondary";

  let xs = 5;
  let sm = 5;
  let md = 5;

  const SpinHandler = () => {
    // setIsSpinning(!isSpinning);
    setTimeout(() => {
      if (remainingTime == "0") {
        setTrailFull(true);
        setIsSpinning(true);
      }
    }, 100);

    setTimeout(() => {
      setTrailFull(false);
      setTimer(false);
      setIsSpinning(false);
    }, 3000);
  };

  // const children = ({ remainingTime }) => {
  //   const hours = Math.floor(remainingTime / 3600);
  //   const minutes = Math.floor((remainingTime % 3600) / 60);
  //   const seconds = remainingTime % 60;

  //   return `${hours}:${minutes}:${seconds}`;
  // };

  useEffect(() => {
    if (remainingTime == "0") {
      setTimer(true);
    } else {
      setTimer(false);
    }
  }, [remainingTime]);

  useEffect(() => {
    setMineData(data);
  }, [data]);

  return (
    <div className="d-flex m-0 p-0 flex-wrap justify-content-center gap-3">
      <Col
        xs={xs}
        sm={sm}
        md={md}
        className={BSCol}
        onClick={() => SpinHandler()}
      >
        <Card style={textCardStyle} className={BSCard}>
          {/* <Card.Img variant="top" src={SpinningImg} style={imgStyle} /> */}
          <div
            className="d-flex align-items-center justify-content-center "
            style={{ width: "100%", height: "100%" }}
          >
            <CustomImageLoader
              image={SpinningImg}
              // isLoaded={true}
              // circle={false}
              speed={2}
              animationType={isSpinning && "spin"}
            />
          </div>

          <Card.Body>
            <Card.Title className={BSText} style={textStyle}>
              Spinning Maze
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={xs} sm={sm} md={md} className={BSCol}>
        <Card style={textCardStyle} className={BSCard}>
          <div
            className="d-flex align-items-center justify-content-center  "
            style={{ width: "100%", height: "100%" }}
          >
            {!timer && (
              <CountdownCircleTimer
                size={100}
                isPlaying={!trailFull}
                duration={3}
                // initialRemainingTime={15}
                trailColor={trailFull ? "#01f763" : "#d9d9d9"}
                colors={["#004777", "#d4dc47", "#A30000", "#A30000"]}
                colorsTime={[7, 5, 2, 0]}
                onComplete={() => {
                  if (!trailFull) {
                    setTrailFull(true);
                    return { shouldRepeat: true, delay: 1.5 };
                  }
                  // repeat animation in 1.5 seconds
                }}
              >
                {({ remainingTime }) => (
                  <div style={{ color: "white", fontSize: "20px" }}>
                    {setRemainingTime(remainingTime)}
                    {remainingTime}
                  </div>
                )}
              </CountdownCircleTimer>
            )}
            {timer && <h3>Tank Full</h3>}
          </div>
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
