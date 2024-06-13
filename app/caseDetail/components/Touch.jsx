"use client";
import { calendarIcon, mailIcon, phoneFilled, phoneIcon } from "@/app/Base/SVG";
import React, { useState } from "react";

export default function Touch() {
  const [submited, setSubmited] = useState(false);
  return (
    <section className="touch big">
      <div className="auto__container">
        <div className="touch__inner">
          <div className="touch__inner-row">
            <div className="touch__inner-content">
              <h2 className="ex">
                Get in <br />
                touch with us
              </h2>
              <p>Connect with our experts for digital excellence</p>
              <div className="touch__inner-links">
                <a href="tel:+31 (0)20-12031231" className="active">
                  <span>{phoneFilled}</span>
                  +31 (0)20-12031231
                </a>
                <a href="mailto:hello@digiblend.nl">
                  <span>{mailIcon}</span>
                  hello@digiblend.nl
                </a>
                <a href="#">
                  <span>{calendarIcon}</span>
                  Plan Conversation
                </a>
              </div>
            </div>
            <form className="touch__inner-form">
              <label className="input2__outer">
                <p>Name</p>
                <div className="input2">
                  <input type="text" placeholder="Robert Smit" />
                </div>
              </label>
              <label className="input2__outer">
                <p>Company Email</p>
                <div className="input2">
                  <input type="email" placeholder="example@company.com" />
                </div>
              </label>
              <label className="input2__outer">
                <p>Phone Number</p>
                <div className="input2">
                  <input type="tel" placeholder="+ 31 6 -- --- ---" />
                </div>
              </label>
              <label className="input2__outer">
                <p>Message</p>
                <div className="input2">
                  <textarea
                    placeholder="Where can we help you with?"
                    rows="7"
                  ></textarea>
                </div>
              </label>
              <div className="touch__inner-form-foot">
                <button
                  type="button"
                  className="button primary blue"
                  onClick={() => setSubmited(true)}
                >
                  Send Message{" "}
                  <span>
                    <img src="./images/icons/send.svg" alt="" />
                  </span>
                </button>
                {submited && (
                  <p className="active">
                    Thank you for <br />
                    contacting us.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
