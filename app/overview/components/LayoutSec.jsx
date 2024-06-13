import {
  chevronRight,
  dataIcon,
  globeIcon,
  lampIcon,
  marketingIcon,
} from "@/app/Base/SVG";
import React from "react";
import Parallax from "./Parallax";

export default function LayoutSec(props) {
  return (
    <section className={"overview " + (props.addClass ? props.addClass : "")}>
      <div className="overview__bg">
        {props.type === "dev" && (
          <>
            <Parallax addClass="overview__bg-cloud">
              <img src="/images/overview/shapes/cloud-1.svg" alt="" />
            </Parallax>
            <Parallax addClass="overview__bg-cloud mob">
              <img src="/images/overview/shapes/cloud-mob.svg" alt="" />
            </Parallax>
          </>
        )}
      </div>
      {/* {props.type === "dev" && (
        <div className="overview__line">
          <img src="/images/overview/shapes/line.svg" alt="" />
        </div>
      )} */}
      <div className="auto__container">
        <div className="overview__inner">
          <div className="overview__inner-content">
            <div className="overview__inner-top">
              <div className="overview__inner-icon">
                {props.type === "design" && lampIcon}
                {props.type === "dev" && globeIcon}
                {props.type === "data" && dataIcon}
                {props.type === "marketing" && marketingIcon}
              </div>
              <h2 className="big">{props.title}</h2>
            </div>

            <p>{props.text}</p>
            {props.links.length > 0 && (
              <div className="overview__inner-links">
                {props.links.map((item, index) => {
                  return (
                    <a href="#" className="overview__inner-link" key={index}>
                      <span className="overview__inner-link-icon">
                        {chevronRight}
                      </span>
                      {item.link}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
          <div className="overview__inner-image-wrapper">
            <div className="overview__inner-image">
              <img src={props.image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
