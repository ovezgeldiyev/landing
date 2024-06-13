import { arrowRightBig, chevronRight, locationIcon } from "@/app/Base/SVG";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
const caseList = [
  {
    id: "1",
    modul: [
      {
        id: "1",
        title: (
          <>
            From data to <br /> business value.
          </>
        ),
        tag: "Love Stories",
        icon: "/images/icons/offer/strategy.svg",
        address: "Amsterdam, The Netherlands",
        image: "/images/case/1.png",
        addClass: "",
      },
      {
        id: "2",
        title: (
          <>
            From data to <br /> business value.
          </>
        ),
        tag: "Love Stories",
        icon: "/images/icons/offer/strategy.svg",
        address: "Amsterdam, The Netherlands",
        image: "/images/case/1.png",
        addClass: "",
      },
      {
        id: "3",
        title: (
          <>
            From data to <br /> business value.
          </>
        ),
        tag: "Love Stories",
        icon: "/images/icons/offer/strategy.svg",
        address: "Amsterdam, The Netherlands",
        image: "/images/case/1.png",
        addClass: "",
      },
    ],
    modul2: [
      {
        id: "1",
        title: (
          <>
            From data to <br /> business value.
          </>
        ),
        tag: "Love Stories",
        icon: "/images/icons/offer/strategy.svg",
        address: "Amsterdam, The Netherlands",
        image: "/images/case/1.png",
        addClass: "",
      },
      {
        id: "2",
        title: (
          <>
            From data to <br /> business value.
          </>
        ),
        tag: "Love Stories",
        icon: "/images/icons/offer/strategy.svg",
        address: "Amsterdam, The Netherlands",
        image: "/images/case/1.png",
        addClass: "",
      },
      {
        id: "3",
        title: <>More coming soon</>,
        tag: "Busy driving results",
        icon: "/images/icons/offer/strategy.svg",
        address: "Amsterdam, The Netherlands",
        image: "/images/case/2.png",
        addClass: "soon",
      },
    ],
  },
  {
    id: "2",
    modul: [
      {
        id: "1",
        title: (
          <>
            From data to <br /> business value.
          </>
        ),
        tag: "Love Stories",
        icon: "/images/icons/offer/strategy.svg",
        address: "Amsterdam, The Netherlands",
        image: "/images/case/1.png",
        addClass: "",
      },
      {
        id: "2",
        title: (
          <>
            From data to <br /> business value.
          </>
        ),
        tag: "Love Stories",
        icon: "/images/icons/offer/strategy.svg",
        address: "Amsterdam, The Netherlands",
        image: "/images/case/1.png",
        addClass: "",
      },
      {
        id: "3",
        title: (
          <>
            From data to <br /> business value.
          </>
        ),
        tag: "Love Stories",
        icon: "/images/icons/offer/strategy.svg",
        address: "Amsterdam, The Netherlands",
        image: "/images/case/1.png",
        addClass: "",
      },
    ],
    modul2: [
      {
        id: "1",
        title: (
          <>
            From data to <br /> business value.
          </>
        ),
        tag: "Love Stories",
        icon: "/images/icons/offer/strategy.svg",
        address: "Amsterdam, The Netherlands",
        image: "/images/case/1.png",
        addClass: "",
      },
      {
        id: "2",
        title: (
          <>
            From data to <br /> business value.
          </>
        ),
        tag: "Love Stories",
        icon: "/images/icons/offer/strategy.svg",
        address: "Amsterdam, The Netherlands",
        image: "/images/case/1.png",
        addClass: "",
      },
      {
        id: "3",
        title: <>More coming soon</>,
        tag: "Busy driving results",
        icon: "/images/icons/offer/strategy.svg",
        address: "Amsterdam, The Netherlands",
        image: "/images/case/2.png",
        addClass: "soon",
      },
    ],
  },
];
export default function Case() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    speed: 600,
    fade: false,
    mobileFirst: true,
  };
  return (
    <section className="case">
      <div className="auto__container">
        <div className="case__inner">
          <div className="case__inner-title">
            <div className="pageNav">
              <Link href="/">
                <p>Home</p>
              </Link>
              <span>{chevronRight}</span>
              <a href="#">Cases</a>
            </div>
            <h2 className="big">Want één case zegt meer dan 1000 woorden.</h2>
            <p>
              We ontzorgen graag en gaan voor maximaal succes. We zijn een
              pain-in-the-ass bij brainstormsessies en overdonderen met nieuwe
              ideeën. Een krachtig merk opleveren, dat is ons doel.
            </p>
            <div className="case__inner-arrow">
              <p>
                Resultaten waar we <br />
                trots op zijn.
              </p>
              <span>
                <img src="./images/icons/arrow-curved-down.svg" alt="" />
              </span>
            </div>
          </div>
          <Slider {...settings} className="case__inner-slider">
            {caseList.map((item, index) => {
              return (
                <div className="caseSlide" key={index}>
                  <div className="caseSlide__inner">
                    <div className="caseSlide__col">
                      {item.modul.map((item, index) => {
                        return <CaseItem {...item} key={index} />;
                      })}
                    </div>
                    <div className="caseSlide__col">
                      {item.modul2.map((item, index) => {
                        return <CaseItem {...item} key={index} />;
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
          <div className="case__inner-row">
            <div className="case__inner-col">
              {caseList.map((item, index) => {
                return item.modul.map((item, index) => {
                  return <CaseItem {...item} key={index} />;
                });
              })}
            </div>
            <div className="case__inner-col">
              {caseList.map((item, index) => {
                return item.modul2.map((item, index) => {
                  return <CaseItem {...item} key={index} />;
                });
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const CaseItem = (props) => {
  return (
    <a
      href="#"
      className={"caseItem " + (props.addClass ? props.addClass : "")}
    >
      <div className="caseItem__image">
        <img src={props.image} alt="" />
        <div className="caseItem__title">
          <h4>{props.title}</h4>
        </div>
        <h4></h4>
      </div>
      <div className="caseItem__content">
        <h5>{props.tag}</h5>
        <div className="caseItem__adress">
          <span>{locationIcon}</span>
          <p>{props.address}</p>
        </div>
        <div className="caseItem__arrow">{arrowRightBig}</div>
      </div>
    </a>
  );
};
