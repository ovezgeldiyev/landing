import React, { useState } from "react";
const faqList1 = [
  {
    id: "1",
    title: "Do you make everythins to measure?",
    text: "Customization is what you come to us for. We believe that everyone is better served with a solution that is fully tailored to the purpose, application and wishes of the target group. Not only do we think so, we also hear this from our customers.",
  },
  {
    id: "2",
    title: "Do you use WordPress?",
    text: "Customization is what you come to us for. We believe that everyone is better served with a solution that is fully tailored to the purpose, application and wishes of the target group. Not only do we think so, we also hear this from our customers.",
  },
  {
    id: "3",
    title: "How long does a process take?",
    text: "Customization is what you come to us for. We believe that everyone is better served with a solution that is fully tailored to the purpose, application and wishes of the target group. Not only do we think so, we also hear this from our customers.",
  },
];
const faqList2 = [
  {
    id: "4",
    title: "Does Stef always wear a waistcoat?",
    text: "Customization is what you come to us for. We believe that everyone is better served with a solution that is fully tailored to the purpose, application and wishes of the target group. Not only do we think so, we also hear this from our customers.",
  },
  {
    id: "5",
    title: "How much does a website cost?",
    text: "Customization is what you come to us for. We believe that everyone is better served with a solution that is fully tailored to the purpose, application and wishes of the target group. Not only do we think so, we also hear this from our customers.",
  },
];
export default function Quest() {
  const [faq, setFaq] = useState(null);

  return (
    <section className="quest big">
      <div className="auto__container">
        <div className="quest__inner">
          <div className="quest__inner-top">
            <div className="quest__inner-title">
              <h2 className="ex">Frequently asked questions</h2>
            </div>
            <div className="quest__inner-text">
              <p>
                Corporate identity encompasses your company's unique image,
                personality, and values. Developing a strategy for corporate
                identity involves:
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
