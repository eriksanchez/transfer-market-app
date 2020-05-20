import React from "react";

const MSP = () => {
  return (
    <div>
      <div
        style={{
          marginLeft: "10px",
          border: "1px solid ",
          padding: "5px",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(31,49,79)",
            color: "white",
          }}
        >
          <h5 style={{ padding: "5px" }}>MOST VIEWED PLAYER</h5>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <img
              style={{ margin: "5px" }}
              height="200px"
              width="200px"
              alt=""
              src="https://www.toscanagol.it/immagini/TO_immagini/foto/big/019064castelnuovo.jpg"
            />
          </div>

          <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <h5 style={{ color: "rgba(59,118,160)" }}>Martin Bastos</h5>
              <img
                style={{ height: "25px", width: "25px", margin: "5px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/1280px-Flag_of_Uruguay.svg.png"
              />
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              Market Value:
              <h6 style={{ marginLeft: "5px", marginTop: "2px" }}>$250,000</h6>
            </div>

            <div> #1</div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "rgba(242,242,242)",
                alignItems: "center",
              }}
            >
              <img
                style={{ height: "50px", width: "50px", margin: "7px" }}
                src="https://www.tuttocampo.it/Web/Images/Teams/Original/921145.png?v9"
                alt=""
              />
              <h6
                style={{
                  wordWrap: "break-word",
                  margin: "5px",
                }}
              >
                U.S. Castelnuovo Garfagnana
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MSP;
