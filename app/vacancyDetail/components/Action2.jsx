import { checkIcon, chevronRight } from "@/app/Base/SVG";
import React from "react";

export default function Action2() {
  return (
    <section className="overview big">
      <div className="auto__container">
        <div className="overview__inner">
          <div className="overview__inner-image-wrapper">
            <div className="overview__inner-image">
              <img src="/images/overview/data.jpg" alt="" />
            </div>
          </div>
          <div className="overview__inner-content">
            <h6 className="sup">Action Action</h6>
            <div className="overview__inner-top center">
              <h2 className="big">
                Your arts in <br /> listform.
              </h2>
            </div>
            <div className="overview__inner-links ex">
              <div className="overview__inner-link">
              <span className="overview__inner-link-icon big">
                  {checkIcon}
                </span>
                Je bent een begoren sales tijger met 5 jaar ervaring
              </div>
              <div className="overview__inner-link">
                <span className="overview__inner-link-icon big">
                  {checkIcon}
                </span>
                Van start-up tot multinational
              </div>
              <div className="overview__inner-link">
                <span className="overview__inner-link-icon big">
                  {checkIcon}
                </span>
                15 jaar ervaring in web & branding
              </div>
              <div className="overview__inner-link">
                <span className="overview__inner-link-icon big">
                  {checkIcon}
                </span>
                15 jaar ervaring in web & branding
              </div>
              <div className="overview__inner-link">
                <span className="overview__inner-link-icon big">
                  {checkIcon}
                </span>
                15 jaar ervaring in web & branding
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
