"use client";

import { useEffect, useState } from "react";
import Header from "../Base/Header";
import Footer from "../Base/Footer";
import Growth from "./components/Growth";
import LayoutSec from "./components/LayoutSec";
import Help from "./components/Help";
import Touch from "./components/Touch";

const LayoutSecList = [
  {
    id: "1",
    type: "design",
    title: "Design",
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
      { id: "1", link: "Webdesign" },
      { id: "2", link: "Rebranding" },
      { id: "3", link: "Appdesign" },
      { id: "4", link: "Company Photophray" },
    ],
    image: "/images/overview/design.jpg",
    addClass: "",
  },
  {
    id: "2",
    type: "dev",
    title: "Development",
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
      { id: "1", link: "Web development" },
      { id: "2", link: "Google Analytics 4" },
      { id: "3", link: "Tag Management" },
      { id: "4", link: "Data Analysis" },
    ],
    image: "/images/overview/dev.jpg",
    addClass: "rev",
  },
  {
    id: "3",
    type: "data",
    title: "Data",
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
      { id: "1", link: "Web development" },
      { id: "2", link: "Google Analytics 4" },
      { id: "3", link: "Tag Management" },
      { id: "4", link: "Data Analysis" },
    ],
    image: "/images/overview/data.jpg",
    addClass: "",
  },
  {
    id: "4",
    type: "marketing",
    title: "Marketing",
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
      { id: "1", link: "Web development" },
      { id: "2", link: "Google Analytics 4" },
      { id: "3", link: "Tag Management" },
      { id: "4", link: "Data Analysis" },
    ],
    image: "/images/overview/marketing.jpg",
    addClass: "rev",
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
        <Touch/>
        <Footer />
      </main>
    </>
  );
}
