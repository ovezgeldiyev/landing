import { dioganalArrow } from "@/app/Base/SVG";
import React, { useState } from "react";
import Slider from "react-slick";
const testList = [
  {
    id: "1",
    title: "Fakiri & van Beuningen",
    text: "This is my first time working with a marketing company, and I had a fantastic experience from start to finish. The team at digiblend was This is my first time working with a marketing company, and I had a fantastic experience from This is my first time working with a marketing",
  },
  {
    id: "2",
    title: "Flesjewijnbezorgd",
    text: "This is my first time working with a marketing company, and I had a fantastic experience from start to finish. The team at digiblend was This is my first time working with a marketing company, and I had a fantastic experience from This is my first time working with a marketing",
  },
  {
    id: "3",
    title: "Love Stories",
    text: "This is my first time working with a marketing company, and I had a fantastic experience from start to finish. The team at digiblend was This is my first time working with a marketing company, and I had a fantastic experience from This is my first time working with a marketing",
  },
  {
    id: "4",
    title: "Danone",
    text: "This is my first time working with a marketing company, and I had a fantastic experience from start to finish. The team at digiblend was This is my first time working with a marketing company, and I had a fantastic experience from This is my first time working with a marketing",
  },
];
export default function Testimonials() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    speed: 600,
    fade: true,
  };
  return (
    <section className="testimonial mobAdd">
      <div className="auto__container">
        <div className="testimonial__inner">
          <div className="testimonial__inner-arrow">
            <p>They are satisfied with our results-oriented approach.</p>
            <span>
              <img src="./images/icons/arrow-curved.svg" alt="" />
            </span>
          </div>
          <Slider {...settings} className="testimonial__inner-slider">
            <div className="testimonialItem">
              <div className="testimonialItem__content">
                <h6 className="sup">Reviews</h6>
                <h2 className="big">Customer Testimonials and Reviews</h2>
                <p>
                  Customer testimonials and reviews are valuable endorsements of
                  your product or service, providing social proof and building
                  trust with potential customers.
                  <br /> <br />
                  Incorporating them on your website or marketing materials can
                  help showcase your business's credibility and the positive
                  experiences of satisfied clients.
                </p>
                <a href="#">
                  Contact
                  {dioganalArrow}
                </a>
              </div>
              <div className="testimonialItem__row">
                {testList.map((item, index) => {
                  return <TestimonialCard {...item} key={index} />;
                })}
              </div>
            </div>
            <div className="testimonialItem">
              <div className="testimonialItem__content">
                <h6 className="sup">Reviews</h6>
                <h2 className="big">Customer Testimonials and Reviews</h2>
                <p>
                  Customer testimonials and reviews are valuable endorsements of
                  your product or service, providing social proof and building
                  trust with potential customers.
                  <br /> <br />
                  Incorporating them on your website or marketing materials can
                  help showcase your business's credibility and the positive
                  experiences of satisfied clients.
                </p>
                <a href="#">
                  Contact
                  {dioganalArrow}
                </a>
              </div>
              <div className="testimonialItem__row">
                {testList.map((item, index) => {
                  return <TestimonialCard {...item} key={index} />;
                })}
              </div>
            </div>
            <div className="testimonialItem">
              <div className="testimonialItem__content">
                <h6 className="sup">Reviews</h6>
                <h2 className="big">Customer Testimonials and Reviews</h2>
                <p>
                  Customer testimonials and reviews are valuable endorsements of
                  your product or service, providing social proof and building
                  trust with potential customers.
                  <br /> <br />
                  Incorporating them on your website or marketing materials can
                  help showcase your business's credibility and the positive
                  experiences of satisfied clients.
                </p>
                <a href="#">
                  Contact
                  {dioganalArrow}
                </a>
              </div>
              <div className="testimonialItem__row">
                {testList.map((item, index) => {
                  return <TestimonialCard {...item} key={index} />;
                })}
              </div>
            </div>
            <div className="testimonialItem">
              <div className="testimonialItem__content">
                <h6 className="sup">Reviews</h6>
                <h2 className="big">Customer Testimonials and Reviews</h2>
                <p>
                  Customer testimonials and reviews are valuable endorsements of
                  your product or service, providing social proof and building
                  trust with potential customers.
                  <br /> <br />
                  Incorporating them on your website or marketing materials can
                  help showcase your business's credibility and the positive
                  experiences of satisfied clients.
                </p>
                <a href="#">
                  Contact
                  {dioganalArrow}
                </a>
              </div>
              <div className="testimonialItem__row">
                {testList.map((item, index) => {
                  return <TestimonialCard {...item} key={index} />;
                })}
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
const TestimonialCard = (props) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="testimonialCard ">
      <div className="testimonialCard__top">
        <h6 className="big">{props.title}</h6>
        <div className="testimonialCard__stars">
          <span>
            <img src="./images/icons/star.svg" alt="" />
          </span>
          <span>
            <img src="./images/icons/star.svg" alt="" />
          </span>
          <span>
            <img src="./images/icons/star.svg" alt="" />
          </span>
          <span>
            <img src="./images/icons/star.svg" alt="" />
          </span>
          <span>
            <img src="./images/icons/star.svg" alt="" />
          </span>
        </div>
        <p>
          {showMore
            ? props.text
            : props.text.length > 140
            ? props.text.toString().substring(0, 140) + "..."
            : props.text}
        </p>
      </div>

      <button
        type="button"
        onClick={() => {
          setShowMore(!showMore);
          console.log("clicked");
        }}
      >
        {showMore ? "Roll up" : "Show more"}
        {dioganalArrow}
      </button>
    </div>
  );
};
