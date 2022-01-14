import React, { useEffect, useState, useRef } from "react";
import "./Carousel.css";

import styled from "styled-components";

const TOTAL_SLIDES = 3;
const Carousel = () => {
  const img1 = "https://static.wanted.co.kr/images/banners/1453/7a978579.jpg";
  const img2 = "https://static.wanted.co.kr/images/banners/1435/6cdcea85.jpg";
  const img3 = "https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg";
  const img4 = "https://static.wanted.co.kr/images/banners/1434/fdbbcb06.jpg";
  const img5 = "https://static.wanted.co.kr/images/banners/1451/725c6862.jpg";
  const img6 = "https://static.wanted.co.kr/images/banners/1454/e504b006.jpg";
  const img7 = "https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg";
  const img8 = "https://static.wanted.co.kr/images/banners/1436/e2dd9445.jpg";
  const img9 = "https://static.wanted.co.kr/images/banners/1438/015566ac.jpg";
  const img10 = "https://static.wanted.co.kr/images/banners/1452/be4ec643.jpg";
  const img11 = "https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg";
  const [slideState, setSlideState] = useState(0);
  const [imgWidth, setImgWidth] = useState(0);
  const slideRef = useRef(null);
  const MAX_SLIDES = 10;
  const imgRef = useRef();
  const handleBannerRight = () => {
    if (slideState >= MAX_SLIDES) {
      setSlideState(0);
    } else {
      setSlideState(slideState + 1);
    }
  };

  const handleBannerLeft = () => {
    if (slideState === 0) {
      setSlideState(MAX_SLIDES);
    } else {
      setSlideState(slideState - 1);
    }
  };
  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${slideState}00%)`;
    // slideRef.current.style.transform = `translate3d(-${
    //   imgWidth * slideState + 1
    // }) + "px, 0px, 0px)`;

    setImgWidth(imgRef.current.width);
  }, [slideState, imgRef]);

  return (
    <div className="container">
      <div className="slideWrap" ref={slideRef}>
        <div className="slideBox">
          <div className="slideContent">
            {/* <img className="slideImage" src={img11} /> */}
            <div>
              <img className="slideImage" src={img1} ref={imgRef} />
              <div class="slideInformation">
                <h2>Git? GitHub?</h2>
                <h3>협업 필수 도구 마스터하기</h3>
                <hr />
                <a href="#" class="infoDirection buttonGo buttonA">
                  <span class="buttonText">
                    바로가기
                    <span>
                      <span class="buttonSvg">
                        <svg class="svgIcon" viewBox="0 0 18 18">
                          <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                        </svg>
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div>
              <img className="slideImage" src={img2} />
              <div class="slideInformation">
                <h2>Git? GitHub?</h2>
                <h3>협업 필수 도구 마스터하기</h3>
                <hr />
                <a href="#" class="infoDirection buttonGo buttonA">
                  <span class="buttonText">
                    바로가기
                    <span>
                      <span class="buttonSvg">
                        <svg class="svgIcon" viewBox="0 0 18 18">
                          <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                        </svg>
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <img className="slideImage" src={img3} />
            <img className="slideImage" src={img4} />
            <img className="slideImage" src={img5} />
            <img className="slideImage" src={img6} />
            <img className="slideImage" src={img7} />
            <img className="slideImage" src={img8} />
            <img className="slideImage" src={img9} />
            <img className="slideImage" src={img10} />
            <img className="slideImage" src={img11} />
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
  );
};

export default Carousel;
