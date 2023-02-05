import React, { Fragment } from "react";
import Box from "./Box";

function Boxes() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const listItem = numbers.map((number) => (
    <Fragment key={number}>
      <Box />
      <br />
    </Fragment>
  ));
  return listItem;
}

export default Boxes;
