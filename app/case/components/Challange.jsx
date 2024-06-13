import { linkedIn, mailBigIcon, phoneFilled } from "@/app/Base/SVG";
import React from "react";

export default function Challange() {
  return (
    <section className="challange">
      <div className="challangeMain">
        <div className="auto__container">
          <div className="challange__inner">
            <div className="challange__inner-row">
              <div className="challange__inner-image-wrapper">
                <div className="challange__inner-image">
                  <img src="./images/contact/contact.png" alt="" />
                </div>
              </div>
              <div className="challange__inner-content">
                <div className="challange__inner-name">
                  <h2 className="big">Myron Zimmerman</h2>
                  <h3 className="sm">Founding Partner</h3>
                </div>
                <p>
                  Corporate identity encompasses your company's unique image,
                  personality, and values. Developing a strategy for corporate
                  identity involves:
                </p>
                <div className="challange__inner-list">
                  <a href="tel:+31 (0) 85 050 88 51" className="challangeItem">
                    <div className="challangeItem__icon inactive">
                      {phoneFilled}
                    </div>
                    <p>+31 (0) 85 050 88 51</p>
                  </a>
                  <a href="mailto:myron@digiblend.nl" className="challangeItem">
                    <div className="challangeItem__icon">{mailBigIcon}</div>
                    <p>myron@digiblend.nl</p>
                  </a>
                  <a href="#" className="challangeItem">
                    <div className="challangeItem__icon">{linkedIn}</div>
                    <p>Let’s connect</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
