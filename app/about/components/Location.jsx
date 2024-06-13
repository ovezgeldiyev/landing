import React from "react";

export default function Location() {
  return (
    <section className="location">
      <div className="auto__container">
        <div className="location__inner">
          <div className="location__inner-title">
            <h2 className="big">Our Locations</h2>
            <p>
              Our global presence spans across multiple strategic office
              locations, allowing us to serve clients worldwide with local
              expertise and a global reach
            </p>
          </div>
          <div className="location__inner-map">
            <img src="./images/map.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
