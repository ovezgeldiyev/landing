"use client";

import { useEffect, useState } from "react";
import Header from "../Base/Header";
import Footer from "../Base/Footer";
import Values from "./components/Values";
import Action from "./components/Action";
import Action2 from "./components/Action2";
import Benefits from "./components/Benefits";
import Apply from "./components/Apply";
import Intro from "./components/Intro";
import Pos from "../components/Pos";
import { posBasic } from "../components/PosModul";

export default function Overview() {
  const [uniq, setUniq] = useState(false);
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
        <Intro />
        <Action />
        <Benefits />
        <Action2 />
        <Values />
        <Apply />
        <Pos
          modul={posBasic}
          uniq={true}
          addClass={""}
          pcTitle={
            <h2 className="big">Have al look into our <br /> other positions</h2>
          }
          mobTitle={<h2 className="big mob und">Other Vacancies</h2>}
        />
        <Footer />
      </main>
    </>
  );
}
