import { checkIcon } from "@/app/Base/SVG";
import React from "react";
import Slider from "react-slick";
const benefitsList = [
  {
    id: "1",
    title: "Een salaris waar ji blij van wordt.",
  },
  {
    id: "2",
    title: "Leuke activiteiten met collega’s",
  },
  {
    id: "3",
    title: "Trainingen en door-groei mogelijkheden",
  },
  {
    id: "4",
    title: "Vrijheid en flexibele werktijden.",
  },
  {
    id: "5",
    title: "Macbook en  telefoon van de zaak",
  },
  {
    id: "6",
    title: "Resultaat gerichten eindejaarsbonus",
  },
];
export default function Benefits() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    speed: 600,
  };
  return (
    <section className="benefits">
      <div className="auto__container">
        <div className="benefits__inner">
          <div className="benefits__inner-title">
            <h2 className="big">What you get form us</h2>
            <p>
              Our Corporate Values are the bedrock of our agency, guiding every
              aspect of our work.
              <span>
              We're committed to integrity, innovation,
              trust, proactivity, and fun, ensuring that every client experience
              is result-driven and enjoyable."
              </span>
            </p>
          </div>
          <div className="benefits__inner-row">
            {benefitsList.map((item, index) => {
              return <BenefitsItem {...item} key={index} />;
            })}
          </div>
          <Slider {...settings} className="benefits__inner-slider">
            {benefitsList.map((item, index) => {
              return <BenefitsItem {...item} key={index} />;
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}
const BenefitsItem = (props) => {
  return (
    <div className="benefitsItem">
      <div className="benefitsItem__icon">{checkIcon}</div>
      <h5 className="sm">{props.title}</h5>
    </div>
  );
};
