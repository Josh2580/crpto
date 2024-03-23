import React, { useState, useEffect } from "react";
import { Card, Row, Col, Modal, Button } from "react-bootstrap";

import BoostImg from "../assets/earn1.png";
import GasImg from "../assets/gas1.png";
import MazeImg from "../assets/maze.png";
import FullImg from "../assets/full.png";
import SpinningImg from "../assets/spin.png";
import CustomImageLoader from "custom-image-loader-react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useGetMineByIdQuery, useSpinByIdMutation } from "../api/mineApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Gain = () => {
  const navigate = useNavigate();
  const notify = () => toast("Not Yet Time");
  //   const [trailColor, setTrailColor] = useState("");
  //   const [trailFull, setTrailFull] = useState(false);
  //   const [myRemainingTime, setMyRemainingTime] = useState();
  //   const [timer, setTimer] = useState(false);

  const { data, error, isLoading, isSuccess } = useGetMineByIdQuery(1);

  const [
    spinNow,
    {
      data: spinData,
      error: spinError,
      isLoading: spinIsLoading,
      isSuccess: spinIsSuccess,
    },
  ] = useSpinByIdMutation();
  const [mineData, setMineData] = useState({});
  const [lastClickedTime, setLastClickedTime] = useState();
  const [firstClicked, setFirstClicked] = useState();
  const [isSpinning, setIsSpinning] = useState(false);
  const [isFull, setIsFull] = useState(false);

  let remainTime;
  const maxTime = 60;

  //   // console.log(firstClicked);

  let textCardStyle = {
    height: "180px",
    borderRadius: "16px",
    padding: "8px",
    background: "none",
  };
  let cardStyle = {
    borderRadius: "16px",
    padding: "8px",
    background: "none",
  };

  let imgStyle = {
    width: "80%",
    margin: "auto",
    minHeight: "134px",
    maxHeight: "134px",
    borderRadius: "16px",
  };

  let textStyle = {
    fontSize: "16px",
    textAlign: "center",
    margin: "0px",
    padding: "0px",
  };

  let BSText = " fw-bold text-light";

  let BSCol = " p-0 h-100 ";

  let BSCard = "border d-flex justify-content-between border-secondary";

  let xs = 5;
  let sm = 5;
  let md = 5;

  //
  const PageNow = new Date();
  const PageSecondsDiff = (PageNow - new Date(lastClickedTime)) / (1000 * 1);
  let PageIsTime = Math.floor(Math.min(PageSecondsDiff, 60));
  let PageMyTime = maxTime - PageIsTime;
  //
  useEffect(() => {
    remainTime = PageMyTime;
  }, [PageMyTime, PageSecondsDiff, PageNow, PageIsTime]);

  const SpinHandler = async () => {
    const now = new Date();
    // const hoursDiff = (now - lastClickedTime) / (1000 * 60 * 60);
    // const hoursDiff = (now - new Date(lastClickedTime)) / (1000 * 60);
    const secondsDiff = (now - new Date(lastClickedTime)) / (1000 * 1);
    let isTime = Math.floor(Math.min(secondsDiff, 60));
    let myTime = maxTime - isTime;

    if (firstClicked || myTime == 0) {
      const formData = new FormData();
      let timeCLick = now.toISOString();
      formData.append("time_clicked", timeCLick);
      formData.append("quantity_mined", Number(mineData) + 100);

      if (firstClicked) {
        formData.append("first_click", false);
      }
      //   //     // setLastClickedTime(now);
      //   //     try {
      setIsFull(false);

      const result = await spinNow({ formData, id: 1 }).unwrap();
      if (result) {
        setFirstClicked(result.first_click);
        //   //         setLastClickedTime(result.time_clicked);
        setIsFull(false);
        console.log("updated");
        //   //         // setTimer(false);
      }
      //   //     } catch (err) {
      //   //       console.error("There's an error: ", err);
      //   //     }
    } else {
      console.log("Not time yet");
      notify();
    }

    setTimeout(() => {
      setIsSpinning(true);
      // PageIsTime && PageIsTime == 60 && setIsFull(true);
    }, 100);

    setTimeout(() => {
      // setTrailFull(false);
      // setTimer(false);
      setIsSpinning(false);
    }, 3000);
  };

  //   // const children = ({ remainingTime }) => {
  //   //   const hours = Math.floor(remainingTime / 3600);
  //   //   const minutes = Math.floor((remainingTime % 3600) / 60);
  //   //   const seconds = remainingTime % 60;

  //   //   return `${hours}:${minutes}:${seconds}`;
  //   // };

  //   // useEffect(() => {
  //   //   if (myRemainingTime == "0") {
  //   //     setTimer(true);
  //   //   } else {
  //   //     setTimer(false);
  //   //   }
  //   // }, [myRemainingTime]);

  useEffect(() => {
    isSuccess && setFirstClicked(data.first_click);
    isSuccess && setLastClickedTime(data.time_clicked);
    isSuccess && setMineData(data.quantity_mined);
  }, [data, isSuccess, PageIsTime]);

  //   // useEffect(() => {
  //   //   // let myTime = maxTime - isTime;
  //   //   setRemainTime(myTime);
  //   //   console.log(myTime, maxTime);
  //   // }, [data, isSuccess, myTime]);

  return (
    <div className="d-flex m-0 p-0 flex-wrap justify-content-center gap-3">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
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
            {/* <CountdownCircleTimer
              size={100}
              // isPlaying={!trailFull}
              isPlaying
              duration={60}
              // initialRemainingTime={remainTime == NaN ? "" : remainTime}
              // trailColor={trailFull ? "#01f763" : "#d9d9d9"}

              // onComplete={() => {
              //   if (!trailFull) {
              //     // setTrailFull(true);
              //     // window.location.reload();
              //     // return { shouldRepeat: true, delay: 1.5 };
              //   }
              //   // repeat animation in 1.5 seconds
              // }}
            >
              
            </CountdownCircleTimer> */}
            {isFull && (
              <CustomImageLoader
                image={FullImg}
                // isLoaded={true}
                // circle={false}
                // speed={2}
                // animationType={isSpinning && "spin"}
              />
            )}

            {PageMyTime && !isFull && (
              <CountdownCircleTimer
                size={100} // Mandatory
                isPlaying // Mandatory
                duration={60} // Mandatory
                initialRemainingTime={PageMyTime}
                colors={["#004777", "#d4dc47", "#220909", "#A30000"]} // Mandatory
                colorsTime={[7, 5, 2, 0]} // Mandatory
                onComplete={() => {
                  setIsFull(true);
                  // repeat animation in 1.5 seconds
                }}
              >
                {({ remainingTime }) => (
                  <div style={{ color: "white", fontSize: "20px" }}>
                    {remainingTime}
                  </div>
                )}
              </CountdownCircleTimer>
            )}
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
