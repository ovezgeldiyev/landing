"use client";

import { useEffect, useState } from "react";
import Header from "../Base/Header";
import Footer from "../Base/Footer";
import Growth from "./components/Growth";
import LayoutSec from "./components/LayoutSec";
import Touch from "./components/Touch";
import Testimonials from "../components/Testimonials";
import Location from "./components/Location";
import Values from "./components/Values";
import Facts from "./components/Facts";
import Pos from "../components/Pos";
import { posGeneral } from "../components/PosModul";

const LayoutSecList = [
  {
    id: "1",
    type: "detail",
    title: "Mission & Vision",
    text: (
      <>
        At our agency, creativity and collaboration fuel our daily operations.
        We've built a culture that thrives on innovative thinking and working
        together to achieve outstanding results. Excellence is non-negotiable;
        we're dedicated to exceeding expectations in everything we do.
        <br />
        <br />
        Our empowering environment fosters personal and professional growth,
        celebrating individual achievements while supporting our entire team.
        We're always at the forefront of industry changes, embracing innovation
        and emerging trends to provide our clients with cutting-edge digital
        strategies. This culture is the driving force behind our digital
        mastery, helping our clients succeed in the ever-evolving digital
        landscape.
      </>
    ),
    links: [],
    image: "/images/overview/dev.jpg",
    addClass: "",
    paral: "0",
  },
];

export default function Overview() {
  useEffect(() => {
    setUniqFooter(true);
  }, []);
  const [uniqFooter, setUniqFooter] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    setMenu(false);
    document.body.classList.remove("active");
  }, []);
  return (
    <>
      <main className="main sm">
        <Header menu={menu} setMenu={setMenu} />
        <Growth />
        <Values />
        <Facts />
        {LayoutSecList.map((item, index) => {
          return <LayoutSec {...item} key={index} />;
        })}
        <div className="main__wrapper">
          <Testimonials />
          <Location />
          <Touch />
        </div>
        <Pos
          addClass={""}
          modul={posGeneral}
          title={
            <h2 className="big stable">
              Showcasing <br />
              Our Success Projects
            </h2>
          }
        />
        <Footer />
      </main>
    </>
  );
}
