import Link from "next/link";
import React from "react";
import FadeRight from "../components/FadeRight";

export default function Footer({ uniqFooter }) {
  return (
    <footer className={"footer " + (uniqFooter ? "uniq" : "")}>
      <div className="auto__container">
        <div className="footer__inner">
          <div className="footer__inner-row">
            <div className="footer__inner-col">
              <div className="logo">
                <h6 className="big">digiblend.</h6>
                {/* <p>9.6</p> */}
                <div className="logo__stars">
                  {[0, 1, 2, 3, 4].map((item, index) => {
                    return (
                      <span key={index}>
                        <img src={"/images/icons/star.svg"} alt="star" />
                      </span>
                    );
                  })}
                </div>
              </div>
              <ul>
                <li>
                  <a href="#">
                    Over ons
                    <span></span>
                  </a>
                </li>
                <li>
                  <Link href="/career" className="active">
                    Vacatures
                    <span>3</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    Contact
                    <span></span>
                  </Link>
                </li>
                <li>
                  <a href="#">
                    Kennismaken
                    <span></span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__inner-col">
              <h6>Menu</h6>
              <ul>
                <li>
                  <a href="#">Over ons</a>
                </li>
                <li>
                  <a href="#">Diensten</a>
                </li>
                <li>
                  <a href="#">Plannen & Prijzen</a>
                </li>
                <li>
                  <a href="#">Werkwijze</a>
                </li>
              </ul>
            </div>
            <div className="footer__inner-col">
              <h6>Diensten</h6>
              <ul>
                <li>
                  <a href="#">Strategie</a>
                </li>
                <li>
                  <a href="#">Website</a>
                </li>
                <li>
                  <a href="#">Data & Inzichten</a>
                </li>
                <li>
                  <a href="#">Marketing</a>
                </li>
              </ul>
            </div>
            <div className="footer__inner-col">
              <h6>Contact</h6>
              <p>
                digiblend B.V. <br /> Papaverhof 16B
                <br />
                1032LX, Amsterdam <br />
                hello@digiblend.nl <br />
                KVK- nummer: 102398123
                <br />© 2023
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footerCopy">
        <div className="auto__container">
          <div className="footerCopy__inner">
            <div className="footerCopy__inner-links">
              <p>© digiblend 2023</p>
              <Link href="/general">Terms & Conditions</Link>
              <a href="#">Disclaimer</a>
              <a href="#">Privacy Policy</a>
            </div>
            <p>
              Webdesign - <b>digiblend.</b>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
