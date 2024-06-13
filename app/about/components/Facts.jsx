import { dioganalArrow } from "@/app/Base/SVG";
import React from "react";

export default function Facts() {
  return (
    <section className="facts mobAdd">
      <div className="auto__container">
        <div className="facts__inner">
          <div className="facts__inner-title">
            <h2 className="big">Company Facts</h2>
            <p>
              Founded in 2020, digiblend has grown to become a leading force in
              the digital marketing industry. We've served [number of clients]
              clients, delivering [statistics or notable achievements] that
              speak to our expertise and dedication.
            </p>
            <a href="#" className="facts__inner-link">
            Our Services
            {dioganalArrow}
            </a>
          </div>
          <div className="facts__inner-row">
            <div className="factsItem">
              <h3>300</h3>
              <h6>Happy Clients</h6>
            </div>
            <div className="factsItem">
              <h3>180%</h3>
              <h6>Average client ROI increase</h6>
            </div>
            <div className="factsItem">
              <h3>23</h3>
              <h6>generated clients</h6>
            </div>
          </div>
          <div className="facts__inner-title">
            <h2 className="big">Mision & Vision</h2>
            <p>
              Founded in 2020, digiblend has grown to become a leading force in
              the digital marketing industry. We've served [number of clients]
              clients, delivering [statistics or notable achievements] that
              speak to our expertise and dedication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
