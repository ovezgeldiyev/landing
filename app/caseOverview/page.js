"use client";

import { useEffect, useState } from "react";
import Header from "../Base/Header";
import Footer from "../Base/Footer";
import Intro from "./components/Intro";
import Pos from "../components/Pos";
import { posBasic, posLocation } from "../components/PosModul";
import Testimonials from "../components/Testimonials";
import Challange from "../case/components/Challange";
import Offer from "./components/Offer";

export default function Overview() {
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
        <Intro />
        <Pos
          modul={posLocation}
          addClass={"linkRight"}
          title={<h2 className="big und stable">Onze Cases</h2>}
        />
        <Testimonials />
        <Challange />
        <Offer />
        <Footer />
      </main>
    </>
  );
}
