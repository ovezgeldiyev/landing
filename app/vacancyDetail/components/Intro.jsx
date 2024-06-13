import { chevronRight } from "@/app/Base/SVG";
import Link from "next/link";
import React from "react";

export default function Intro() {
  return (
    <section className="intro big">
      <div className="auto__container">
        <div className="intro__inner">
          <div className="intro__inner-title">
            <div className="pageNav">
              <Link href="/">Home</Link>
              <span>{chevronRight}</span>
              <Link href="#">Vacancies</Link>
              <span>{chevronRight}</span>
              <p>Project Manager</p>
            </div>
            <h2 className="big">Project manager</h2>
            <p>
              Comma grows. That has to be managed! We are looking for a project
              manager who helps develop, advises and guides successful brand and
              marketing strategies for our clients, who manages the big picture,
              manages project schedules for colleagues and who appreciates the
              creative process.
            </p>
          </div>
          <div className="intro__inner-image">
            <img src="/images/intro.png" alt="" />
          </div>
          <div className="introInfo">
            <div className="introInfo__inner">
              <div className="introInfo__content">
                <div className="introInfo__content-avatar">
                  <img src="/images/contact/contact.png" alt="" />
                </div>
                <div className="introInfo__content-name">
                  <h5 className="sm">Myron Zimmerman</h5>
                  <p>Founding Partner</p>
                </div>
              </div>
              <div className="introInfo__row">
                <div className="introInfo__item">
                  <div className="introInfo__item-icon">
                    <img src="/images/icons/clock.svg" alt="" />
                  </div>
                  <p>32-40 hours</p>
                </div>
                <div className="introInfo__item">
                  <div className="introInfo__item-icon">
                    <img src="/images/icons/euro.svg" alt="" />
                  </div>
                  <p>2500-3500</p>
                </div>
                <div className="introInfo__item">
                  <div className="introInfo__item-icon big">
                    <img src="/images/icons/student-cap.svg" alt="" />
                  </div>
                  <p>3+ years</p>
                </div>
              </div>
              <a href="#apply" className="button big primary">
                Apply
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
