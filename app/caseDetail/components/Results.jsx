import React from "react";
import Slider from "react-slick";
const resultsList = [
  {
    id: "1",
    number: "+250",
    text: (
      <>
        Leads inquired <br /> via Google Ads
      </>
    ),
  },
  {
    id: "2",
    number: "+250",
     text: (
      <>
        Leads inquired <br /> via Google Ads
      </>
    ),
  },
  {
    id: "3",
    number: "+250",
     text: (
      <>
        Leads inquired <br /> via Google Ads
      </>
    ),
  },
  {
    id: "4",
    number: "+250",
     text: (
      <>
        Leads inquired <br /> via Google Ads
      </>
    ),
  },
];
export default function Results() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    speed: 600,
  };
  return (
    <section className="results">
      <div className="auto__container">
        <div className="results__inner">
          <div className="results__inner-title">
            <h2 className="big">Tangible Results</h2>
            <p>
              Comma grows. That has to be managed! We are looking for a project
              manager who helps develop, advises and guides successful brand and
              marketing strategies for our clients, who manages the big picture,
              manages project schedules for colleagues and who appreciates the
              creative process.
            </p>
          </div>
          <div className="results__inner-row">
            {resultsList.map((item, index) => {
              return <ResultsItem {...item} key={index} />;
            })}
          </div>
          <Slider {...settings} className="results__inner-slider">
            {resultsList.map((item, index) => {
              return <ResultsItem {...item} key={index} />;
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}
const ResultsItem = (props) => {
  return (
    <div className="resultsItem">
      <div className="resultsItem__inner">
        <h5>{props.number}</h5>
        <p>{props.text}</p>
      </div>
    </div>
  );
};
