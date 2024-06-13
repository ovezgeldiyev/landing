"use client";

import { useEffect, useState } from "react";
import Header from "../Base/Header";
import Footer from "../Base/Footer";
import Challange from "./components/Challange";
import Testimonials from "../components/Testimonials";
import Offer from "./components/Offer";
import Case from "./components/Case";


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
        <Case />
        <Testimonials />
        <Challange/>
        <Offer />
        <Footer />
      </main>
    </>
  );
}
