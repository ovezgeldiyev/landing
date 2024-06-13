"use client";

import { useEffect, useState } from "react";
import Header from "../Base/Header";
import Footer from "../Base/Footer";
import Intro from "./components/Intro";
import Pos from "../components/Pos";
import { posBasic, posMarket } from "../components/PosModul";
import Touch from "./components/Touch";
import Solution from "./components/Solution";
import Challange from "./components/Challange";

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
        <Solution />
        <Challange />
        <div className="main__wrapper">
          <Pos
            modul={posMarket}
            addClass={""}
            title={<h2 className="big und stable">Latest News</h2>}
          />
          <Touch />
        </div>
        <Footer />
      </main>
    </>
  );
}
