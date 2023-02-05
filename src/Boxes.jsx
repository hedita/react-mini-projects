import React from "react";
import Box from "./Box";

function Boxes() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const listItem = numbers.map((number) => (
    <>
      <li>
        <Box />
      </li>
      <br />
    </>
  ));
  return <ul>{listItem}</ul>;
}

export default Boxes;
