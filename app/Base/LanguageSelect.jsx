"use client";
import React, { useEffect, useRef, useState } from "react";
import { chevronBottom } from "./SVG";

const LanguageSelect = ({ selected = null, list, onChange, key = null }) => {
  const wrapper = useRef(null);
  const [active, setActive] = useState(false);
  const [currentList, setCurrentList] = useState(list);
  const [currentSelected, setCurrentSelected] = useState(selected);

  const onClick = (item) => {
    setCurrentSelected(item);
    if (onChange) onChange(item);
    setActive(false);
  };

  const toggleActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    setCurrentList(
      !currentSelected
        ? list
        : list.filter((item) => {
            let compareKey = key ?? "value";
            return item[compareKey] !== currentSelected[compareKey];
          })
    );
  }, [list, currentSelected]);

  useEffect(() => {
    setCurrentSelected(selected);
  }, [selected]);

  useEffect(() => {
    const windowClick = ({ target }) => {
      if (!wrapper.current.contains(target)) setActive(false);
    };

    if (active) window.addEventListener("click", windowClick);
    else window.removeEventListener("click", windowClick);

    return () => window.removeEventListener("click", windowClick);
  }, [active]);

  return (
    <div className={`customSelect ${active ? "active " : ""}`} ref={wrapper}>
      <div className="customSelect__selected" onClick={toggleActive}>
        <img src={currentSelected.image} alt="" />
        {currentSelected ? currentSelected.value : "-----"}
        {chevronBottom}
      </div>
      <div className="customSelect__options active">
        {currentList.map((item, index) => (
          <div
            className="customSelect__options-item"
            key={index}
            onClick={() => onClick(item)}
          >
            <img src={item.image} alt="" />
            {item.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelect;
