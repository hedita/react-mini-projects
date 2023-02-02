import React, { useState } from "react";

function ToggleHandler () {
  const [toggle, setToggle] = useState("off");
  const [toggle1, setToggle1] = useState("off");

  const handleClick = () => {
    setToggle(!toggle);
  };
  const handleClick1 = () => {
    setToggle1(!toggle1);
  };
  return (
    <>
      <div
        onClick={handleClick}
        style={{
          width: 50,
          height: 50,
          background: toggle ? "red" : "blue",
        }}
      >
      </div>
      <br />
      <div
      onClick={handleClick1}
      style={{
        width: 50,
        height: 50,
        background: toggle1 ? "red" : "blue",
      }}
    >
    </div>
    </>
  );
};

export default ToggleHandler;