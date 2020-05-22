import React from "react";

const News = (props) => {
  return (
    <div
      style={{
        marginTop: "10px",
        backgroundColor: "red",
        height: "50px",
        width: "50%",
        marginLeft: "10px",
      }}
    >
      <div style={{ backgroundColor: "rgba(228,228,228)" }}>
        22.05.2020 - 22:03
      </div>
      <div>
        <img
          alt=""
          src="https://tmssl.akamaized.net/images/portrait/medium/517894-1532351797.jpg?lm=1532351893"
        />
        <h6 style={{ color: "rgba(74,171,231)" }}>
          First derby at Olympiastadion
        </h6>
      </div>
    </div>
  );
};

export default News;
