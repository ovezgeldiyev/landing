import {
  chevronRight,
  dataIcon,
  globeIcon,
  lampIcon,
  marketingIcon,
  targetIcon,
} from "@/app/Base/SVG";
import React from "react";

export default function LayoutSec(props) {
  return (
    <section className={"overview center mobRem" + (props.addClass ? props.addClass : "")}>

      <div className="auto__container">
        <div className="overview__inner">
          <div className="overview__inner-content">
            <div className="overview__inner-top">
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
