import { dioganalArrow } from "@/app/Base/SVG";
import React from "react";
import Slider from "react-slick";
const offerList = [
  {
    id: "1",
    title: "Design",
    icon: "/images/icons/offer/strategy.svg",
    cats: [
      {
        id: "1",
        value: "Webdesign",
      },
      {
        id: "2",
        value: "UX Design",
      },
      {
        id: "3",
        value: "Brand Identity",
      },
    ],
    link: "#",
    desc: "Strategy involves creating a comprehensive plan to achieve specific goals or objectives. It typically includes defining the `what, `why,` and `how` of your actions to maximize success.",
  },
  {
    id: "2",
    title: "Development",
    icon: "/images/icons/offer/services.svg",
    cats: [
      {
        id: "1",
        value: "Web development",
      },
      {
        id: "2",
        value: "App development",
      },
      {
        id: "3",
        value: "ERP Solutions",
      },
      {
        id: "4",
        value: "Headless CMS",
      },
    ],
    link: "#",

    desc: "Strategy involves creating a comprehensive plan to achieve specific goals or objectives. It typically includes defining the `what, `why,` and `how` of your actions to maximize success.",
  },
  {
    id: "3",
    title: "Data",
    icon: "/images/icons/offer/data.svg",
    cats: [
      {
        id: "1",
        value: "Webdesign",
      },
      {
        id: "2",
        value: "Webdevelopment",
      },
      {
        id: "3",
        value: "Hosting",
      },
      {
        id: "4",
        value: "Headless CMS",
      },
    ],
    link: "#",

    desc: "Strategy involves creating a comprehensive plan to achieve specific goals or objectives. It typically includes defining the `what, `why,` and `how` of your actions to maximize success.",
  },
  {
    id: "4",
    title: "Marketing",
    icon: "/images/icons/offer/marketing.svg",
    cats: [
      {
        id: "1",
        value: "Webdesign",
      },
      {
        id: "2",
        value: "Webdevelopment",
      },
      {
        id: "3",
        value: "Hosting",
      },
      {
        id: "4",
        value: "Headless CMS",
      },

    ],
    link: "#",

    desc: "Strategy involves creating a comprehensive plan to achieve specific goals or objectives. It typically includes defining the `what, `why,` and `how` of your actions to maximize success.",
  },
];
export default function Offer() {
  const settings = {
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    speed: 600,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="offer">
      <div className="auto__container">
        <div className="offer__inner">
          <div className="offer__inner-content">
            <h6 className="sup">Our Services</h6>
            <h2 className="big">We offer the best Services for our Customer</h2>
            <p>
              Explore our diverse array of solutions, from strategy and web
              design to data analytics and marketing. Let us help you achieve
              your online goals.
            </p>
            <a href="#" className="button big">
              Get Started
            </a>
          </div>
          <Slider className="offer__inner-slider" {...settings}>
            {offerList.map((item, index) => {
              return <OfferItem {...item} key={index} />;
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}
const OfferItem = (props) => {
  return (
    <div className="offerItem">
      <div className="offerItem__overlay">
        <div className="offerItem__row">
          <div className="offerItem__icon">
            <img src={props.icon} alt="" />
          </div>
          <h5 className="sm">{props.title}</h5>
        </div>
        <ul>
          {props.cats.map((item, index) => {
            return (
              <li key={index}>
                <a href="#">{item.value}</a>
              </li>
            );
          })}
        </ul>
        <a href={props.link} className="offerItem__button">
          Learn More
          {dioganalArrow}
        </a>
      </div>
      <div className="offerItem__icon">
        <img src={props.icon} alt="" />
      </div>
      <h5 className="sm">{props.title}</h5>
      <p>{props.desc}</p>
    </div>
  );
};
