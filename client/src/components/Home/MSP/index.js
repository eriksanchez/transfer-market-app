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
          MOST VIEWED PLAYER
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <img
              height="200px"
              width="200px"
              alt=""
              src="https://www.toscanagol.it/immagini/TO_immagini/foto/big/019064castelnuovo.jpg"
            />
          </div>
          <div>
            <h2>Martin Bastos</h2>
            <h5>Market Value: $250,000</h5>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <img
                style={{ height: "50px", width: "50px", margin: "5px" }}
                src="https://www.tuttocampo.it/Web/Images/Teams/Original/921145.png?v9"
                alt=""
              />
              <h6 style={{ wordWrap: "break-word" }}>
                Club: U.S. Castelnuovo Garfagnana
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MSP;
