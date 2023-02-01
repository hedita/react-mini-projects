import React, { useState } from "react";

function CounterHandler() {
  const [counter, setCounter] = useState(0);

  const clickHandler = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <button onClick={clickHandler}>Plus</button>
      <br />
      {counter}
    </>
  );
}

export default CounterHandler;
