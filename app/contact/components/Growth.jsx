import { chevronRight, phoneFilled, phoneIcon } from "@/app/Base/SVG";
import Link from "next/link";
import React from "react";

export default function Growth() {
  return (
    <section className="growth big">
      <div className="growth__bg">
        <img src="/images/overview/growth-rev.png" alt="" />
      </div>
      <div className="auto__container">
        <div className="growth__inner">
          <div className="growth__inner-content">
            <div className="pageNav">
              <Link href="/">
                <p>Home</p>
              </Link>
              <span>{chevronRight}</span>
              <a href="#">Contact</a>
            </div>
            <h2 className="big">
              Ready for tangible <br />
              business growth?
            </h2>
            <p>
              We ontzorgen graag en gaan voor maximaal succes. We zijn een
              pain-in-the-ass bij brainstormsessies en overdonderen met nieuwe
              ideeën. Een krachtig merk opleveren, dat is ons doel.
            </p>
          </div>
          <div className="growth__inner-row">
            <a href="#" className="growthItem">
              <h6>General:</h6>
              <div className="growthItem__content">
                <div className="growthItem__icon">{phoneFilled}</div>
                <p>+31 (0) 85 40 01 203</p>
              </div>
            </a>
            <a href="#" className="growthItem">
              <h6>Marketing & Data:</h6>
              <div className="growthItem__content">
                <div className="growthItem__icon">{phoneFilled}</div>
                <p>+31 (0) 85 40 01 203</p>
              </div>
            </a>
            <a href="#" className="growthItem">
              <h6>Design:</h6>
              <div className="growthItem__content">
                <div className="growthItem__icon">{phoneFilled}</div>
                <p>+31 (0) 85 40 01 203</p>
              </div>
            </a>
            <a href="#" className="growthItem">
              <h6>Development:</h6>
              <div className="growthItem__content">
                <div className="growthItem__icon">{phoneFilled}</div>
                <p>+31 (0) 85 40 01 203</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
