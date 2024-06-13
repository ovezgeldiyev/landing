import React from "react";
import Slider from "react-slick";
const valuesList = [
  {
    id: "1",
    title: "Result-Driven",
    icon: "/images/icons/about/target.svg",
    desc: "We are committed to delivering measurable results and exceeding goals for our clients.",
  },
  {
    id: "2",
    title: "Trust",
    icon: "/images/icons/about/hands.svg",
    desc: "We build trust through transparency, reliability, and open communication.",
  },
  {
    id: "3",
    title: "Proactive",
    icon: "/images/icons/about/run.svg",
    desc: "We take the initiative to anticipate and address needs, making us more responsive to our clients.",
  },
  {
    id: "4",
    title: "Fun",
    icon: "/images/icons/about/coctail.svg",
    desc: "We believe that a positive and enjoyable work environment leads to better creativity and results.",
  },
];
export default function Values() {
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 600,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="values">
      <div className="auto__container">
        <div className="values__inner">
          <div className="values__inner-title">
            <h2 className="big">Corporate Values</h2>
            <p>
              Our Corporate Values are the bedrock of our agency, guiding every
              aspect of our work. We're committed to integrity, innovation,
              trust, proactivity, and fun, ensuring that every client experience
              is result-driven and enjoyable."
            </p>
          </div>
          <div className="values__inner-slider-wrapper">
          <Slider className="values__inner-slider" {...settings}>
            {valuesList.map((item, index) => {
              return <ValuesItem {...item} key={index} />;
            })}
          </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
const ValuesItem = (props) => {
  return (
    <div className="valuesItem">
      <div className="valuesItem__icon">
        <img src={props.icon} alt="" />
      </div>
      <h5 className="sm">{props.title}</h5>
      <p>{props.desc}</p>
    </div>
  );
};
