import React from "react";
import history from "../../Routers/history";

const News = (props) => {
  return (
    <div
      style={{
        marginTop: "10px",

        width: "60%",
        marginLeft: "10px",
        border: "2px solid",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(228,228,228)",
          height: "40px",
        }}
      >
        <h6
          style={{
            display: "inline-block",
            marginLeft: "15%",
          }}
        >
          24.05.2020 - 20:02
        </h6>
        <img
          alt=""
          style={{ position: "absolute", left: "20px", marginTop: "15px" }}
          src="https://tmssl.akamaized.net/images/portrait/medium/517894-1532351797.jpg?lm=1532351893"
        />
      </div>

      <div
        styl={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "blue",
        }}
      >
        <div>
          <h6
            style={{
              display: "inline-block",
              marginLeft: "15%",
              color: "rgba(74,171,231)",
            }}
          >
            First derby at Olympiastadion
          </h6>
          <h3 style={{ display: "inline-block", marginLeft: "15%" }}>
            Kanya Fujimoto nears Portugal move - 20-year-old became regular this
            season
          </h3>
          <p
            style={{
              display: "inline-block",
              marginLeft: "15%",
              maxHeight: "50px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            Borussia Dortmund, Milan, Napoli, and per buyback option Chelsea?
            The list of teams keeping an eye on Jeremie Boga is long. The US
            Sassuolo winger was one of the{" "}
            <h4 style={{ display: "inline-block" }}>Read More...</h4>
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
