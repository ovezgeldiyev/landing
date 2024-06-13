import { dioganalArrow } from "@/app/Base/SVG";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
const solutionList = [
  {
    id: "1",
    image: "/images/contact/contact.png",
  },
  {
    id: "2",
    image: "/images/contact/contact.png",
  },
  {
    id: "3",
    image: "/images/contact/contact.png",
  },
  {
    id: "4",
    image: "/images/contact/contact.png",
  },
];
export default function Solution() {
  const settings = {
    dots: true,
    infinite: false,
    arrows: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="solution">
      <div className="auto__container">
        <div className="solution__inner">
          <div className="solution__inner-content">
            <h2 className="big">The Challenge</h2>
            <p>
              How did we proceed? Together with Hang Eleven we made a plan by
              carefully looking at the products, webshop, target group and
              objectives. We will always keep the latter in mind in everything
              we do. Once the objectives have been determined, we look at the
              content of the campaigns together with the customer. After all,
              the customer knows the target group (and their product) better
              than anyone else.
            </p>
          </div>
          <div className="solution__inner-content last">
            <h2 className="big">Our Solution</h2>
            <p>
              By properly segmenting the different target groups and
              distinguishing between 'warm' and 'cold' target groups, we can
              perfectly tailor our message to the (purchase) phase in which a
              (potential) customer is. After all, a customer who has never heard
              of Hang Eleven is less likely to make a purchase than a regular
              customer. This requires a separate approach per message and target
              group.
            </p>
          </div>
          <Slider className="solution__inner-slider" {...settings}>
            {solutionList.map((item, index) => {
              return <SolutionItem {...item} key={index} />;
            })}
          </Slider>
  
        </div>
      </div>
    </section>
  );
}
const SolutionItem = (props) => {
  return (
    <a href="#" className="solutionItem">
      <div className="solutionItem__inner">
        <img src={props.image} alt="" />
      </div>
    </a>
  );
};
