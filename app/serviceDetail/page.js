"use client";

import { useEffect, useState } from "react";
import Header from "../Base/Header";
import Footer from "../Base/Footer";
import Growth from "./components/Growth";
import LayoutSec from "./components/LayoutSec";
import Help from "./components/Help";
import Quest from "./components/Quest";
import Testimonials from "./components/Testimonials";
import Touch from "../Base/Touch";

const LayoutSecList = [
  {
    id: "1",
    type: "detail",
    title: "Mobile First",
    text: (
      <>
        Developing a well-defined strategy is crucial for achieving your
        long-term goals. It provides a roadmap to navigate the complexities of
        your business environment and make informed decisions.
        <br />
        <br />A carefully crafted strategy helps you allocate resources
        effectively, identify potential opportunities, and adapt to changing
        market conditions. It serves as the foundation upon which all your
        actions and initiatives are built, ensuring that your organization moves
        toward its envisioned future with purpose and direction.
      </>
    ),
    links: [
      { id: "1", link: "Klanten geven ons een 9,6" },
      { id: "2", link: "Van start-up tot multinational" },
      { id: "3", link: "15 jaar ervaring in web & branding" },
    ],
    image: "/images/overview/dev.jpg",
    addClass: "",
    paral: "0",
  },
  {
    id: "2",
    type: "detail",
    title: "SEO Friendly",
    text: (
      <>
        Leveraging the power of data analytics is essential for staying
        competitive in today's rapidly evolving business landscape. By
        harnessing the potential of your data, you can gain valuable insights
        into customer behavior, market trends, and operational efficiency.
        <br />
        <br />
        These insights enable you to make data-driven decisions that drive your
        business forward, helping you identify new opportunities, mitigate
        risks, and stay ahead of the competition
      </>
    ),
    links: [
      { id: "1", link: "Klanten geven ons een 9,6" },
      { id: "2", link: "Van start-up tot multinational" },
      { id: "3", link: "15 jaar ervaring in web & branding" },
    ],
    image: "/images/overview/data.jpg",
    addClass: "rev",
    paral: "1",
  },
  {
    id: "3",
    type: "detail",
    title: "Mobile First",
    text: (
      <>
        Leveraging the power of data analytics is essential for staying
        competitive in today's rapidly evolving business landscape. By
        harnessing the potential of your data, you can gain valuable insights
        into customer behavior, market trends, and operational efficiency.
        <br />
        <br />
        These insights enable you to make data-driven decisions that drive your
        business forward, helping you identify new opportunities, mitigate
        risks, and stay ahead of the competition
      </>
    ),
    links: [
      { id: "1", link: "Klanten geven ons een 9,6" },
      { id: "2", link: "Van start-up tot multinational" },
      { id: "3", link: "15 jaar ervaring in web & branding" },
    ],
    image: "/images/overview/design.jpg",
    addClass: "",
    paral: "0",
  },
  {
    id: "4",
    type: "detail",
    title: "Blazing Fast",
    text: (
      <>
        In the world of marketing, data-driven decision-making is the
        cornerstone of success. By effectively analyzing data, you gain the
        ability to fine-tune your campaigns, understand your target audience
        better, and optimize your marketing strategies.
        <br />
        <br />
        These insights are invaluable in making informed decisions that ensure
        your marketing efforts are not only competitive but also resonating with
        your audience, ultimately driving success and growth.
      </>
    ),
    links: [
      { id: "1", link: "Klanten geven ons een 9,6" },
      { id: "2", link: "Van start-up tot multinational" },
      { id: "3", link: "15 jaar ervaring in web & branding" },
    ],
    image: "/images/overview/marketing.jpg",
    addClass: "rev",
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
        <Help />
        {LayoutSecList.map((item, index) => {
          return <LayoutSec {...item} key={index} />;
        })}
        <Touch />
        <Testimonials />
        <Quest />
        <Footer />
      </main>
    </>
  );
}
