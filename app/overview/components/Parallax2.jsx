import React, { useState, useEffect } from "react";

export default function Parallax2(props) {
  const [offsetTop2, setOffsetTop2] = useState(props.start);
  const [style, setStyle] = useState({});
  const max = props.max ?? 500;
  const start = props.start ?? 10;
  const vertical = props.vertical ? true : false;
  const reverse = props.reverse ? "-" : "";
  const onscroll = () => {
    if (
      window.scrollY <
        document.querySelector(".opportunity__bg").parentElement.offsetTop +
          document.querySelector(".opportunity__bg").parentElement
            .offsetHeight -
          100 &&
      window.scrollY >
        document.querySelector(".opportunity__bg").parentElement.offsetTop - 500
    ) {
      setOffsetTop2(window.scrollY * 4);
    }
  };
  // console.log(offsetTop2);
  useEffect(() => {
    window.addEventListener("scroll", onscroll);
    onscroll();
  }, []);
  useEffect(() => {
    let x = vertical ? `0` : `${reverse}${offsetTop2 / 10}`;
    let y = vertical
      ? `${reverse}${offsetTop2 / 10}`
      : `${offsetTop2 / -100 + 220}`;
    // console.log(y);
    let newStyle = {
      transform: `translateY(${y}%)`,
    };
    setStyle(newStyle);
  }, [offsetTop2]);

  return (
    <div className={props.addClass} style={style}>
      {props.children}
    </div>
  );
}
