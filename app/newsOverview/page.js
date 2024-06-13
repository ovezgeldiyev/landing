"use client";

import { useEffect, useState } from "react";
import Header from "../Base/Header";
import Footer from "../Base/Footer";
import Intro from "./components/Intro";
import Pos from "../components/Pos";
import { posAnalytics, posBasic, posDev, posMarket } from "../components/PosModul";
import Touch from "./components/Touch";

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
          modul={posAnalytics}
          addClass={""}
          title={<h2 className="big und stable">Data & Insights</h2>}
        />
        <Pos
          modul={posDev}
          addClass={"start"}
          title={<h2 className="big und stable">Development</h2>}
        />
        <Pos
          modul={posMarket}
          addClass={"center"}
          title={<h2 className="big und stable">Marketing</h2>}
        />
        <Touch />
        <Footer />
      </main>
    </>
  );
}
