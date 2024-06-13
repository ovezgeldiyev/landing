import {
  clockIcon,
  dioganalArrow,
  locationIcon,
  timerIcon,
} from "@/app/Base/SVG";
import React, { useState } from "react";
import Slider from "react-slick";

export default function Pos({
  pcTitle,
  mobTitle,
  addClass,
  modul,
  uniq,
  title,
}) {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    speed: 600,
  };

  return (
    <section className={"showcase " + addClass}>
      <div className="auto__container">
        <div className="showcase__inner">
          {uniq ? (
            <div className="showcase__inner-title">
              {pcTitle}
              {mobTitle}
            </div>
          ) : (
            <div className="showcase__inner-title">{title}</div>
          )}

          <Slider {...settings} className="showcase__inner-slider">
            {modul.map((item, index) => {
              return <ShowCaseItem {...item} key={index} />;
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}
const ShowCaseItem = (props) => {
  return (
    <div className="showcaseItem">
      <div className="showcaseItem__image-wrapper">
        <div className="showcaseItem__image">
          <img src={props.image} alt="" />
        </div>
      </div>
      <div className="showcaseItem__content">
        {props.suptitle && <h6>{props.suptitle}</h6>}
        <h3 className="sm">{props.title}</h3>
        {props.timeframe && (
          <div className="showcaseItem__time">
            <div className="showcaseItem__time-icon">{clockIcon}</div>
            <p>{props.timeframe}</p>
          </div>
        )}
        {props.location && (
          <div className="showcaseItem__location">
            <div className="showcaseItem__location-icon">{locationIcon}</div>
            <p>{props.location}</p>
          </div>
        )}
        <p>{props.text}</p>
        {props.link && (
          <a href={props.link}>
            Learn More
            {dioganalArrow}
          </a>
        )}
      </div>
    </div>
  );
};
