import React, { useEffect, useState, useRef } from "react";
import styles from "./Carousel.module.scss";
import data from "assets/data.json";
import { LeftButton } from "assets/LeftButton";
import { RightButton } from "assets/RightButton";
import useWindowSize from "hooks/useWindowSize";

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
  console.log();
  const [isMouseOn, setIsMouseOn] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(true);

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

  const clickRight = () => {
    if (isButtonActive) {
      handleBannerRight();
    }
    setIsButtonActive(false);
  };
  const handleBannerRight = () => {
    if (
      slideState.number === NEXT_END &&
      slideState.memo?.number === NEXT_END - 1
    ) {
      moveTo(PREV_END, false);
      slideAfterMove(PREV_END + 1, true);
    } else if (
      slideState.number === NEXT_START &&
      slideState.memo?.number === NEXT_START - 1
    ) {
      moveTo(PREV_START, false);
      slideAfterMove(PREV_START + 1, true);
    } else {
      moveTo(slideState.number + 1, true);
    }
  };

  const clickLeft = () => {
    if (isButtonActive) {
      handleBannerLeft();
    }
    setIsButtonActive(false);
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

  const [mouseDownClientX, setMouseDownClientX] = useState(0);
  const [mouseUpClientX, setMouseUpClientX] = useState(0);
  const [cursorOn, setCursorOn] = useState(false);

  const onMouseDown = (e) => {
    e.preventDefault();
    setMouseDownClientX(e.clientX);
    setCursorOn(true);
  };

  const onMouseUp = (e) => {
    e.preventDefault();
    setMouseUpClientX(e.clientX);
    setCursorOn(false);
  };

  const [width, height] = useWindowSize();

  useEffect(() => {
    const dragSpace = Math.abs(mouseDownClientX - mouseUpClientX);

    if (mouseDownClientX !== 0) {
      if (mouseUpClientX < mouseDownClientX && dragSpace > 100) {
        handleBannerRight();
      } else if (mouseUpClientX > mouseDownClientX && dragSpace > 100) {
        handleBannerLeft();
      }
    }
  }, [mouseUpClientX]);

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
  }, [slideState, imgWidth, width, height]);

  useEffect(() => {
    if (!isButtonActive) {
      setTimeout(() => {
        setIsButtonActive(true);
      }, 500);
    }
  }, [isButtonActive]);

  useEffect(() => {
    let nIntervId;
    if (!isMouseOn) {
      nIntervId = setInterval(handleBannerRight, 4000);
    }
    return () => {
      clearInterval(nIntervId);
    };
  }, [slideState, isMouseOn]);

  return (
    <main className={styles.Main}>
      <div
        className={styles.container}
        onMouseOver={() => setIsMouseOn(true)}
        onMouseLeave={() => setIsMouseOn(false)}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        <div className={styles.slideWrap}>
          <div className={styles.slideBox}>
            <div className={styles.slideContent} ref={slideRef}>
              {imgsState.map((data, index) => {
                return (
                  <div key={index} id={data.id} className={styles.imageDiv}>
                    <div className={styles.imageContainer}>
                      <img
                        className={styles.slideImage}
                        src={data.image}
                        alt="slide"
                        ref={imgRef}
                      />

                      <div
                        className={
                          (slideState.number % carouselData.length) + 1 !==
                          data.id
                            ? `${styles["unactive-slideImage"]}`
                            : undefined
                        }
                      />
                    </div>

                    <div
                      className={
                        (slideState.number % carouselData.length) + 1 ===
                        data.id
                          ? `${styles["active-infomation"]}`
                          : `${styles.infomation}`
                      }
                    >
                      <h2>{data.title}</h2>
                      <h3>{data.content}</h3>
                      <hr />
                      <a>
                        <span>
                          바로가기
                          <svg
                            className="SvgIcon_SvgIcon__root__svg__DKYBi"
                            viewBox="0 0 18 18"
                          >
                            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <button
          className={`${styles.sliderButton} ${styles.Left}`}
          onClick={clickLeft}
        >
          <span>
            <LeftButton />
          </span>
        </button>

        <button
          className={`${styles.sliderButton} ${styles.Right}`}
          onClick={clickRight}
        >
          <span>
            <RightButton />
          </span>
        </button>
      </div>
    </main>
  );
};

export default Carousel;
