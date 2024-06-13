"use client";

import { useEffect, useState } from "react";
import Header from "../Base/Header";
import Footer from "../Base/Footer";
import Market from "./components/Market";
import Offer from "./components/Offer";
import Work from "./components/Work";
import Quest from "./components/Quest";
import Touch from "../Base/Touch";
import Testimonials from "../components/Testimonials";
import Pos from "../components/Pos";
import { posGeneral } from "../components/PosModul";

export default function Home() {
  const [type, setType] = useState(false);
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
        <Market />
        <Offer />
        <Work />
        <Touch />
        <Quest />
        <Testimonials />
        <Pos
          addClass={""}
          type={type}
          modul={posGeneral}
          title={
            <h2 className="big stable">
              Showcasing <br />
              Our Success Projects
            </h2>
          }
      
        />
        <Footer uniqFooter={uniqFooter} />
      </main>
    </>
  );
}
