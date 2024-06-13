import { chevronRight } from "@/app/Base/SVG";
import Link from "next/link";
import React from "react";

export default function Intro() {
  return (
    <section className="intro">
      <div className="auto__container">
        <div className="intro__inner">
          <div className="intro__inner-title">
            <div className="pageNav">
              <Link href="/">Home</Link>
              <span>{chevronRight}</span>
              <p>Vacancies</p>
            </div>
            <h2 className="big">
              Kom jij ons team <br />
              versterken?
            </h2>
            <p>
              Comma grows. That has to be managed! We are looking for a project
              manager who helps develop, advises and guides successful brand and
              marketing strategies for our clients, who manages the big picture,
              manages project schedules for colleagues and who appreciates the
              creative process.
            </p>
            <div className="intro__inner-arrow">
              <p>
                Groeien doen <br /> we samen
              </p>
              <span>
                <img src="./images/icons/arrow-curved-down-black.svg" alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
