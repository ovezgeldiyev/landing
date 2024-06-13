import {
  calendarIcon,
  checkIcon,
  mailBigIcon,
  mailIcon,
  phoneFilled,
  phoneIcon,
} from "@/app/Base/SVG";
import React from "react";
import Parallax from "./Parallax";
import Parallax2 from "./Parallax2";

export default function Opportunity() {
  return (
    <section className="opportunity">
      <div className="opportunity__bg">
        <>
          <Parallax2 addClass="opportunity__bg-cloud">
            <img src="/images/overview/shapes/cloud-2.svg" alt="" />
          </Parallax2>
          <Parallax2 addClass="opportunity__bg-cloud mob">
            <img src="/images/overview/shapes/cloud-mob.svg" alt="" />
          </Parallax2>
        </>
      </div>
      <div className="auto__container">
        <div className="opportunity__inner">
          <div className="opportunity__inner-top">
            <h2 className="big">
              Interested in discovering where your opportunities are?
            </h2>
            <div className="opportunity__inner-contact">
              <a href="#" className="opportunityItem">
                <div className="opportunityItem__icon active">{phoneFilled}</div>
                <p>+31 (0)20-12031231</p>
              </a>
              <a href="#" className="opportunityItem">
                <div className="opportunityItem__icon sm">{mailBigIcon}</div>
                <p>hello@digiblend.nl</p>
              </a>
              <a href="#" className="opportunityItem">
                <div className="opportunityItem__icon">{calendarIcon}</div>
                <p>Plan Gesprek</p>
              </a>
            </div>
          </div>
          <ul>
            <li>
              <span>{checkIcon}</span>
              <b>Resultaatgerichte Aanpak</b>
            </li>
            <li>
              <span>{checkIcon}</span>
              <b>Gecertificeerde Specialisten</b>
            </li>
            <li>
              <span>{checkIcon}</span>
              <b>Helder Advies</b>
            </li>
            <li>
              <span>{checkIcon}</span>
              <b>Langetermijn Partnerships</b>
            </li>
          </ul>
          <form className="opportunity__inner-form-wrapper">
            <div className="opportunity__inner-form">
              <label className="input__outer">
                <p>Name</p>
                <div className="input">
                  <input type="text" placeholder="Robert Smit" />
                </div>
              </label>
              <label className="input__outer">
                <p>Company Name</p>
                <div className="input">
                  <input type="text" placeholder="X Inc." />
                </div>
              </label>
              <label className="input__outer">
                <p>Email Address</p>
                <div className="input">
                  <input type="email" placeholder="example@company.com" />
                </div>
              </label>
              <label className="input__outer">
                <p>Phone Number</p>
                <div className="input">
                  <input type="text" placeholder="+ 31 6 22 133 218" />
                </div>
              </label>
              <label className="input__outer">
                <p>Message</p>
                <div className="input">
                  <textarea
                    rows="13"
                    placeholder="Where can we help you with?"
                  ></textarea>
                </div>
              </label>
            </div>
            <button type="submit" className="button primary blue">
              Send Message
              <span>
                <img src="./images/icons/send.svg" alt="" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
