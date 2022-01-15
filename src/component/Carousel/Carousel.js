import React, { useEffect, useState, useRef } from "react";
import "./Carousel.css";

import styled from "styled-components";

const Carousel = () => {
  const imagesList = [
    "https://static.wanted.co.kr/images/banners/1453/7a978579.jpg",
    "https://static.wanted.co.kr/images/banners/1435/6cdcea85.jpg",
    "https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg",
    "https://static.wanted.co.kr/images/banners/1434/fdbbcb06.jpg",
    "https://static.wanted.co.kr/images/banners/1451/725c6862.jpg",
    "https://static.wanted.co.kr/images/banners/1454/e504b006.jpg",
    "https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg",
    "https://static.wanted.co.kr/images/banners/1436/e2dd9445.jpg",
    "https://static.wanted.co.kr/images/banners/1438/015566ac.jpg",
    "https://static.wanted.co.kr/images/banners/1452/be4ec643.jpg",
    "https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg",
  ];

  const NEXT_END = 31;
  const NEXT_START = 23;
  const PREV_END = 9;
  const PREV_START = 1;
  const START = 11;

  const [slideState, setSlideState] = useState({
    number: START,
  });
  const [imgWidth, setImgWidth] = useState(0);
  const [imgsState, setImgsState] = useState([]);
  const [imgsDiv, setImgsDiv] = useState();
  const slideRef = useRef(null);
  const imgRef = useRef();
  let threeTimesEvents = [];

  const SLIDE_MARGIN = 0;
  //   const SLIDE_WIDTH = ; imgWidth로!
  const MAX_SLIDES = 11;
  const TOTAL_SLIDES = MAX_SLIDES * 3;

  const setInitialPosition = () => {
    slideRef.current.style.transform = `translateX(0px)`;
    // `translateX(-${
    //   imgWidth * MAX_SLIDES
    // }px)`;
  };

  const loadEvents = async () => {
    threeTimesEvents = await [...imagesList, ...imagesList, ...imagesList];
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
      imgWidth * slideState.number
    }px)`;
    slideRef.current.style.transition = slideState.hasMotion
      ? "all 500ms ease 0s"
      : "";
    console.log(slideState);
  }, [slideState, imgWidth]);

  return (
    <main className="Main">
      <div className="container">
        <div className="slideWrap">
          <div className="slideBox">
            <div className="slideContent" ref={slideRef}>
              {imgsState.map((url) => {
                return (
                  <img
                    className="slideImage"
                    src={url}
                    alt="slide image"
                    ref={imgRef}
                  />
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
