import React, { useState } from "react";

function LampHandler() {
  const [lamp, setLamp] = useState(false);

  const handleClick = () => {
    setLamp(!lamp);
  };

  return (
    <>
      <button onClick={handleClick}>TURN OFF/ON</button>
      <div
        style={{
          backgroundColor: lamp ? "red" : "white",
        }}
      >
        LAMP
      </div>
    </>
  );
}
export default LampHandler;
