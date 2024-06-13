import React, { useState } from "react";
const faqList1 = [
  {
    id: "1",
    title: "What is digital mastery?",
    text: "To boost your website's search engine ranking, focus on  optimizing your content with relevant keywords, build high-quality backlinks from reputable websites, and regularly update your content to ensure it stays fresh and valuable to your target audience.",
  },
  {
    id: "2",
    title: " What services do you offer?",
    text: "To boost your website's search engine ranking, focus on  optimizing your content with relevant keywords, build high-quality backlinks from reputable websites, and regularly update your content to ensure it stays fresh and valuable to your target audience.",
  },
  {
    id: "3",
    title: " How do I start with your company?",
    text: "To boost your website's search engine ranking, focus on  optimizing your content with relevant keywords, build high-quality backlinks from reputable websites, and regularly update your content to ensure it stays fresh and valuable to your target audience.",
  },
];
const faqList2 = [
  {
    id: "4",
    title: "What is digital mastery?",
    text: "To boost your website's search engine ranking, focus on  optimizing your content with relevant keywords, build high-quality backlinks from reputable websites, and regularly update your content to ensure it stays fresh and valuable to your target audience.",
  },
  {
    id: "5",
    title: "What is digital mastery?",
    text: "To boost your website's search engine ranking, focus on  optimizing your content with relevant keywords, build high-quality backlinks from reputable websites, and regularly update your content to ensure it stays fresh and valuable to your target audience.",
  },
  {
    id: "6",
    title: "What is digital mastery?",
    text: "To boost your website's search engine ranking, focus on  optimizing your content with relevant keywords, build high-quality backlinks from reputable websites, and regularly update your content to ensure it stays fresh and valuable to your target audience.",
  },
];
export default function Quest() {
  const [faq, setFaq] = useState(null);

  return (
    <section className="quest">
      <div className="auto__container">
        <div className="quest__inner">
          <div className="quest__inner-top">
            <div className="quest__inner-title">
              <h6 className="sup">
                <b>Frequently Asked Questions</b>
                <span>FAQ</span>
              </h6>
              <h2 className="big">Frequently asked questions</h2>
            </div>
            <div className="quest__inner-text">
              <p>
                Explore the answers to some common questions about our services
                and digital mastery. If you have additional inquiries, don't
                hesitate to contact our team for more information.
              </p>
            </div>
          </div>
          <div className="quest__inner-row">
            <div className="quest__inner-col">
              {faqList1.map((item, index) => {
                return (
                  <FaqItem
                    faq={faq}
                    setFaq={setFaq}
                    itemData={item}
                    key={index}
                  />
                );
              })}
            </div>
            <div className="quest__inner-col">
              {faqList2.map((item, index) => {
                return (
                  <FaqItem
                    faq={faq}
                    setFaq={setFaq}
                    itemData={item}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
          <a href="#" className="button big">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
const FaqItem = (props) => {
  return (
    <div className="questItem">
      <h6
        onClick={() => {
          if (props.faq?.id === props.itemData.id) {
            props.setFaq(null);
          } else props.setFaq(props.itemData);
        }}
        className={
          "tabBtn " + (props.faq?.id === props.itemData.id ? "active" : "")
        }
      >
        {props.itemData.title}
        <span></span>
      </h6>
      <p
        className={
          "tabEvent " + (props.faq?.id === props.itemData.id ? "active" : "")
        }
      >
        {props.itemData.text}
      </p>
    </div>
  );
};
