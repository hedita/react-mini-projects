import React, { useState } from "react";

function LampHandler() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <button onClick={handleClick}>TURN OFF/ON</button>
      <div
        style={{
          backgroundColor: isOn ? "red" : "white",
        }}
      >
        LAMP
      </div>
    </>
  );
}
export default LampHandler;
