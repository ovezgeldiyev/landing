import { bagIcon, calendarIcon, docIcon, phoneFilled } from "@/app/Base/SVG";
import React from "react";

export default function Office() {
  return (
    <section className="office">
      <div className="auto__container">
        <div className="office__inner">
          <div className="office__inner-title">
            <h2 className="big">The Office</h2>
          </div>
          <div className="office__inner-row">
            <div className="officeItem__wrapper big">
              <div className="officeItem">
                <div className="officeItem__icon">{bagIcon}</div>
                <div className="officeItem__row">
                  <p>
                    Papaverhof 16B, <br />
                    1032LX, Amsterdam
                  </p>
                </div>
              </div>
              <div className="officeItem">
                <div className="officeItem__row">
                  <p>
                    Olympia 2D
                    <br />
                    1213 NT, Hilversum
                  </p>
                </div>
              </div>
            </div>
            <div className="officeItem__wrapper">
              <div className="officeItem">
                <div className="officeItem__icon">{docIcon}</div>
                <div className="officeItem__row">
                  <p>
                    Chamber of Commerce Amsterdam 102398123 VAT NL865144084B01
                  </p>
                </div>
              </div>
            </div>
            <div className="officeItem__wrapper">
              <div className="officeItem">
                <div className="officeItem__icon">{phoneFilled}</div>
                <div className="officeItem__row">
                  <p>
                    +31 (0)20-12031231 <br />
                    info@digiblend.nl
                  </p>
                </div>
              </div>
            </div>
            <div className="officeItem__wrapper">
              <div className="officeItem">
                <div className="officeItem__icon">{calendarIcon}</div>
                <div className="officeItem__row">
                  <p>Plan Gesprek</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
