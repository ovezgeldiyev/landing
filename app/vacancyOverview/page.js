"use client";

import { useEffect, useState } from "react";
import Header from "../Base/Header";
import Footer from "../Base/Footer";
import Apply from "./components/Apply";
import Intro from "./components/Intro";
import Pos from "../components/Pos";
import { posBasic } from "../components/PosModul";

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
          modul={posBasic}
          addClass={""}
          title={<h2 className="big und stable">Marketing & Sales</h2>}
        />
        <Pos
          modul={posBasic}
          addClass={"start"}
          title={<h2 className="big und stable">Development</h2>}
        />
        <Pos
          modul={posBasic}
          addClass={"center"}
          title={<h2 className="big und stable">Data & Analytics</h2>}
        />
        <Pos
          modul={posBasic}
          addClass={"start"}
          title={<h2 className="big und stable">Project Management</h2>}
        />
        <Apply />
        <Footer />
      </main>
    </>
  );
}
