import React from "react";

const MSP = () => {
  return (
    <div>
      <div
        style={{
          background: "black",
          height: "500px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(31,49,79)",
            color: "white",
            marginLeft: "10px",
          }}
        >
          Most viewed player
        </div>
        <div style={{ backgroundColor: "red" }}>
          <imgage
            alt=""
            src="https://www.google.com/search?q=martin+bastos&sxsrf=ALeKk01BJ3i4PFTDlW0WHk7dncd6lbyqSg:1589665856470&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiawr7lrrnpAhW9RhUIHRm-C0oQ_AUoAXoECAsQAw&biw=1440&bih=720#imgrc=30D9UDoTr0i2SM"
          />
        </div>
      </div>
    </div>
  );
};

export default MSP;
