import React, { useState } from "react";

function Box () {
  const [isOn, setIsOn] = useState(true);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: 50,
        height: 50,
        background: isOn ? "red" : "blue",
      }}
    ></div>
  );
}

export default Box;