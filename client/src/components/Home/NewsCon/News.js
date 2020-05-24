import React from "react";

const News = (props) => {
  return (
    <div
      style={{
        marginTop: "10px",
        backgroundColor: "red",
        width: "60%",
        marginLeft: "10px",
      }}
    >
      <div style={{ backgroundColor: "rgba(228,228,228)" }}>
        24.05.2020 - 20:02
      </div>
      <div
        styl={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "blue",
        }}
      >
        <img
          alt=""
          src="https://tmssl.akamaized.net/images/portrait/medium/517894-1532351797.jpg?lm=1532351893"
        />
        <div>
          <h6>First derby at Olympiastadion</h6>
        </div>
      </div>
    </div>
  );
};

export default News;
