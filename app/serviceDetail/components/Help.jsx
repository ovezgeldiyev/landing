import { arrowRightBig } from "@/app/Base/SVG";
import React from "react";

const helpList = [
  {
    id: "1",
    text: "Mobile First",
  },
  {
    id: "2",
    text: "Score higher in Google",
  },
  {
    id: "3",
    text: "Result-oriented webshop",
  },
  {
    id: "4",
    text: "Strategic advice",
  },
  {
    id: "5",
    text: "More website visitors",
  },
  {
    id: "6",
    text: "Come up with a company name",
  },
  {
    id: "7",
    text: "Refreshing logo",
  },
  {
    id: "8",
    text: "Renew corporate identity",
  },
];
export default function Help(props) {
  return (
    <section className="help mobRem">
      <div className="help__bg">
        <div className="help__bg-shape">
          <img src="./images/work/shape.svg" alt="" />
        </div>
      </div>
      <div className="auto__container">
        <div className="help__inner">
          <div className="help__inner-title">
            <h2 className="big">How can we help you ?</h2>
          </div>
          <div className="help__inner-row">
            {helpList.map((item, index) => {
              return <HelpItem {...item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const HelpItem = (props) => {
  return (
    <div className="helpItem">
      <p>{props.text}</p>
      <div className="helpItem__arrow">{arrowRightBig}</div>
    </div>
  );
};
