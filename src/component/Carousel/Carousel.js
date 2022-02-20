import React, { useEffect, useState, useRef } from "react";
import "./Carousel.css";
import data from "../../assets/data.json";
const Carousel = () => {
  const carouselData = data.data;

  const NEXT_END = carouselData.length * 3 - 2;
  const NEXT_START = carouselData.length * 2 + 1;
  const PREV_END = carouselData.length - 2;
  const PREV_START = 1;
  const START = carouselData.length;

  const [slideState, setSlideState] = useState({
    number: START,
  });
  const [imgWidth, setImgWidth] = useState(0);
  const [imgsState, setImgsState] = useState([]);

  const slideRef = useRef(null);
  const imgRef = useRef();
  let threeTimesEvents = [];

  const SLIDE_MARGIN = 24;

  const setInitialPosition = () => {
    imgWidth === undefined
      ? (slideRef.current.style.transform = `translateX(-${
          (1060 + SLIDE_MARGIN) * slideState.number
        }px)`)
      : (slideRef.current.style.transform = `translateX(-${
          (imgWidth + SLIDE_MARGIN) * slideState.number
        }px)`);
  };

  const loadEvents = async () => {
    threeTimesEvents = await [
      ...carouselData,
      ...carouselData,
      ...carouselData,
    ];
    await setImgsState(threeTimesEvents);
  };

  const handleBannerRight = () => {
    if (
      slideState.number === NEXT_END &&
      slideState.memo.number === NEXT_END - 1
    ) {
      moveTo(PREV_END, false);
      slideAfterMove(PREV_END + 1, true);
    } else if (
      slideState.number === NEXT_START &&
      slideState.memo.number === NEXT_START - 1
    ) {
      moveTo(PREV_START, false);
      slideAfterMove(PREV_START + 1, true);
    } else {
      moveTo(slideState.number + 1, true);
    }
  };

  const handleBannerLeft = () => {
    if (
      slideState.number === PREV_START &&
      slideState.memo.number === PREV_START + 1
    ) {
      moveTo(NEXT_START, false);
      slideAfterMove(NEXT_START - 1, true);
    } else if (
      slideState.number === PREV_END &&
      slideState.memo.number === PREV_END + 1
    ) {
      moveTo(NEXT_END, false);
      slideAfterMove(NEXT_END - 1, true);
    } else {
      moveTo(slideState.number - 1, true);
    }
  };

  const moveTo = (setNumber, setMotion) => {
    setSlideState({
      memo: slideState,
      number: setNumber,
      hasMotion: setMotion,
    });
  };

  const slideAfterMove = (setNumber, setMotion) => {
    setTimeout(() => {
      moveTo(setNumber, setMotion);
    }, 50);
  };
  useEffect(() => {
    loadEvents();
    setImgWidth(imgRef.current?.width);
    setInitialPosition();
    slideRef.current.style.transform = `translateX(-${
      (imgWidth + SLIDE_MARGIN) * slideState.number
    }px)`;
    slideRef.current.style.transition = slideState.hasMotion
      ? "all 500ms ease 0s"
      : "";
  }, [slideState, imgWidth]);

  return (
    <main className="Main">
      <div className="container">
        <div className="slideWrap">
          <div className="slideBox">
            <div className="slideContent" ref={slideRef}>
              {imgsState.map((data, index) => {
                return (
                  <div key={index} id={data.id} className="imageDiv">
                    <img
                      className="slideImage"
                      src={data.image}
                      alt="slide"
                      ref={imgRef}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <button className="sliderButton Left" onClick={handleBannerLeft}>
          <span>
            <svg
              className="SvgIcon_SvgIcon__root__svg__DKYBi"
              viewBox="0 0 18 18"
            >
              <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
            </svg>
          </span>
        </button>

        <button className="sliderButton Right" onClick={handleBannerRight}>
          <span>
            <svg
              className="SvgIcon_SvgIcon__root__svg__DKYBi"
              viewBox="0 0 18 18"
            >
              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
            </svg>
          </span>
        </button>
      </div>
    </main>
  );
};

export default Carousel;
