"use client";

import { useEffect, useState } from "react";
import Header from "../Base/Header";
import Footer from "../Base/Footer";
import Intro from "./components/Intro";
import Pos from "../components/Pos";
import { posLocation } from "../components/PosModul";
import Touch from "./components/Touch";
import Results from "./components/Results";
import Solution from "./components/Solution";

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
        <Results />
        <Touch />
        <Pos
          modul={posLocation}
          addClass={"linkRight"}
          title={<h2 className="big und stable">Meer Cases</h2>}
        />

        <Footer />
      </main>
    </>
  );
}
