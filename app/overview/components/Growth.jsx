import { chevronRight } from "@/app/Base/SVG";
import Link from "next/link";
import React from "react";

export default function Growth() {
  return (
    <section className="growth">
      <div className="growth__bg">
        <img src="/images/overview/growth.png" alt="" />
      </div>
      <div className="auto__container">
        <div className="growth__inner">
          <div className="growth__inner-content">
            <div className="pageNav">
              <Link href="/">
              <p>Home</p>
              </Link>
              <span>{chevronRight}</span>
              <a href="#">Diensten</a>
            </div>
            <h2 className="big">Onze menukaart <br /> om door te groeien.</h2>
            <p>
              We ontzorgen graag en gaan voor maximaal succes. We zijn een
              pain-in-the-ass bij brainstormsessies en overdonderen met nieuwe
              ideeën. Een krachtig merk opleveren, dat is ons doel.
            </p>
            <ul>
              <li>
                <span>
                  <img src="/images/icons/check-blue.svg" alt="" />
                </span>
                <b>Klanten geven ons een 9,6</b>
              </li>
              <li>
                <span>
                  <img src="/images/icons/check-blue.svg" alt="" />
                </span>
                <b>Van start-up tot multinational</b>
              </li>
              <li>
                <span>
                  <img src="/images/icons/check-blue.svg" alt="" />
                </span>
                <b>15 jaar ervaring in web & branding</b>
              </li>
            </ul>
            <a href="#" className="button big">
            Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
