"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
const sliderList = [
  {
    id: "1",
    bg: "/images/market-bg.png",
    years: "10",
    clients: "20",
    review: "4.6",
    experts: "50+",
    title: "Digital mastery through advanced analytics & marketing",
    fact: "Experience the synergy of data analytics and digital marketing for unparalleled success. Harness the power of insights to drive your online presence to new heights. Elevate your brand today.",
  },
  {
    id: "2",
    years: "2",
    clients: "15",
    review: "4.7",
    experts: "60+",
    bg: "/images/market-bg-2.png",
    title: "Digital mastery through advanced analytics & marketing",
    fact: "Digital marketing for unparalleled success. Harness the power of insights to drive your online presence to new heights. Elevate your brand today.",
  },
  {
    id: "3",
    years: "5",
    clients: "25",
    review: "4.4",
    experts: "40+",
    bg: "/images/market-bg-3.png",
    title: "Digital mastery through advanced analytics & marketing",
    fact: " Harness the power of insights to drive your online presence to new heights. Elevate your brand today.",
  },
];

export default function Market() {
  const slideRef = useRef(null);
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 600,
    fade: true,
  };
  return (
    <div className="market">
      <RenderArrows sliderRef={slideRef} />
      <Slider ref={slideRef} className="market__inner-slider" {...settings}>
        {sliderList.map((item, index) => {
          return <SliderItem {...item} key={index} />;
        })}
      </Slider>
    </div>
  );
}
const SliderItem = (props) => {
  return (
    <>
      <div className="market__bg">
        <img src={props.bg} alt="" />
      </div>
      <div className="auto__container">
        <div className="market__inner">
          <div className="marketSlide">
            <div className="marketSlide__title">
              <h1 className="big">{props.title}</h1>
            </div>
            <div className="marketSlide__row">
              <a href="#" className="button big">
                About Us
              </a>
              <div className="marketSlide__text">
                <h6 className="big">Facts:</h6>
                <p>{props.fact}</p>
              </div>
            </div>
            <div className="market__inner-row">
              <div className="marketItem">
                <div className="marketItem__icon">
                  <img src="./images/icons/market/calendar.svg" alt="" />
                </div>
                <h3>{props.years}</h3>
                <p>Years Experience</p>
              </div>
              <div className="marketItem">
                <div className="marketItem__icon sm">
                  <img src="./images/icons/market/user.svg" alt="" />
                </div>
                <h3>{props.clients}</h3>
                <p>Happy Clients</p>
              </div>
              <div className="marketItem">
                <div className="marketItem__icon">
                  <img src="./images/icons/market/star.svg" alt="" />
                </div>
                <h3>{props.review}</h3>
                <p>Average Review</p>
              </div>
              <div className="marketItem">
                <div className="marketItem__icon big">
                  <img src="./images/icons/market/experts.svg" alt="" />
                </div>
                <h3>{props.experts}</h3>
                <p>Experts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const RenderArrows = ({ sliderRef }) => {
  return (
    <div className="slider-arrow">
      <div className="slider-arrow-before">
      </div>
      <button
        className="arrow-btn prev"
        onClick={() => sliderRef?.current?.slickPrev()}
      >
      </button>
      <button
        className="arrow-btn next"
        onClick={() => sliderRef?.current?.slickNext()}
      >
      </button>
    </div>
  );
};
