import { dioganalArrow } from "@/app/Base/SVG";
import React, { useState } from "react";
import Slider from "react-slick";
const showList = [
  {
    id: "1",
    title: "Elevating E-commerce Sales for XYZ Retail",
    
    image: "/images/showcase/1.png",
    text: "We partnered with XYZ Retail to revamp their online sales strategy, resulting in a remarkable 45% increase in revenue We partnered with XYZ Retail to revamp their online sales strategy, resulting in a remarkable 45% increase in revenue",
  },
  {
    id: "2",
    title: "Elevating E-commerce Sales for XYZ Retail",
    image: "/images/showcase/2.png",
    text: "We partnered with XYZ Retail to revamp their online sales strategy, resulting in a remarkable 45% increase in revenue We partnered with XYZ Retail to revamp their online sales strategy, resulting in a remarkable 45% increase in revenue",
  },
  {
    id: "3",
    title: "Elevating E-commerce Sales for XYZ Retail",
    image: "/images/showcase/1.png",
    text: "We partnered with XYZ Retail to revamp their online sales strategy, resulting in a remarkable 45% increase in revenue We partnered with XYZ Retail to revamp their online sales strategy, resulting in a remarkable 45% increase in revenue",
  },
  {
    id: "4",
    title: "Elevating E-commerce Sales for XYZ Retail",
    image: "/images/showcase/2.png",
    text: "We partnered with XYZ Retail to revamp their online sales strategy, resulting in a remarkable 45% increase in revenue We partnered with XYZ Retail to revamp their online sales strategy, resulting in a remarkable 45% increase in revenue",
  },
];
export default function ShowCase({ pcTitle, mobTitle, addClass, type }) {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    speed: 600,
  };

  return (
    <section className="showcase">
      <div className="auto__container">
        <div className="showcase__inner">
          <div className="showcase__inner-title">{pcTitle}{mobTitle}</div>
          <Slider {...settings} className={"showcase__inner-slider " + {addClass}}>
            {showList.map((item, index) => {
              return <ShowCaseItem type={type} {...item} key={index} />;
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
        {props.type && <>kojh9hj9ji</>}
        <h3 className="sm">{props.title}</h3>
        <p>{props.text}</p>
        <a href="#">
          Learn More
          {dioganalArrow}
        </a>
      </div>
    </div>
  );
};
