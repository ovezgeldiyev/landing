import {
  checkIcon,
  chevronRight,
  dataIcon,
  globeIcon,
  lampIcon,
  marketingIcon,
  targetIcon,
} from "@/app/Base/SVG";
import React from "react";
import Parallax from "./Parallax";

export default function LayoutSec(props) {
  return (
    <section className={"overview " + (props.addClass ? props.addClass : "")}>
      <div className="overview__bg">
        {props.paral === "1" && (
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

      <div className="auto__container">
        <div className="overview__inner">
          <div className="overview__inner-content">
            <div className="overview__inner-top plane">
              <div className="overview__inner-icon ">
                {props.type === "detail" && targetIcon}

              </div>
              <h2 className="big">{props.title}</h2>
            </div>

            <p>{props.text}</p>
            {props.links.length > 0 && (
              <div
                className={
                  "overview__inner-links " +
                  (props.type === "detail" ? "big" : "")
                }
              >
                {props.links.map((item, index) => {
                  return (
                    <div className="overview__inner-link" key={index}>
                      <span className="overview__inner-link-icon big">
                        {checkIcon}
                      </span>
                      {item.link}
                    </div>
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
