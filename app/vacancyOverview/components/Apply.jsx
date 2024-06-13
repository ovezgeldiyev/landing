import { checkIcon, copyIcon } from "@/app/Base/SVG";
import React from "react";

export default function Apply() {
  const [checked, setChecked] = React.useState(false);
  return (
    <section className="apply">
      <div className="auto__container">
        <div className="apply__inner">
          <div className="apply__inner-image">
            <img src="/images/overview/data.jpg" alt="" />
          </div>
          <div className="apply__inner-title">
            <h2 className="big mobRem">Zit je droom baan er niet tussen?</h2>
            <h2 className="big mobAdd">
              Kom jij ons <br /> team versterken?
            </h2>
            <p>
              Do you have questions or would you like to know more about our
              services? Leave your details and we will contact you as soon as
              possible.
            </p>
          </div>
          <div className="apply__inner-form">
            <label className="input2__outer">
              <p>Name</p>
              <div className="input2">
                <input type="text" placeholder="Robert Smit" />
              </div>
            </label>
            <label className="input2__outer">
              <p>Years of Experience</p>
              <div className="input2">
                <input type="number" placeholder="5" />
              </div>
            </label>
            <label className="input2__outer">
              <p>Email</p>
              <div className="input2">
                <input type="email" placeholder="example@company.com" />
              </div>
            </label>
            <label className="input2__outer">
              <p>Phone Number</p>
              <div className="input2">
                <input type="tel" placeholder="+ 31 6 22 133 218" />
              </div>
            </label>
            <label className="input2__outer big">
              <p>C.V.</p>
              <div className="input2">
                <input type="text" placeholder="Upload your C.V." />
                <input type="file" />
                <span>{copyIcon}</span>
              </div>
            </label>
            <label className="input2__outer big">
              <p>Motivation</p>
              <div className="input2">
                <textarea placeholder="Why we need you!" rows="15"></textarea>
              </div>
            </label>
            <div className="apply__inner-foot">
              <label className="check">
                <div className="check__box">
                  <input
                    type="checkbox"
                    defaultChecked={checked}
                    onChange={() => setChecked((state) => !state)}
                  />
                  <span>{checkIcon}</span>
                </div>
                <p>
                  Accepteer
                  <b> algemene voorwaarden</b>
                </p>
              </label>
              <button type="button" className="button primary blue">
                Send Message{" "}
                <span>
                  <img src="./images/icons/send.svg" alt="" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
