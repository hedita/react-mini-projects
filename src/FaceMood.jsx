import React, { Fragment } from "react";

const people = [
  {
    name: "Siamak",
    mood: "sad",
  },
  {
    name: "Ati",
    mood: "happy",
  },
  {
    name: "Hedi",
    mood: "interested",
  },
  {
    name: "Soheyl",
    mood: "happy",
  },
  {
    name: "Shamim",
    mood: "excited",
  },
  {
    name: "Ali",
    mood: "interested",
  },
  {
    name: "Karen",
    mood: "nice",
  },
];

function FaceMood() {

  const personList = people.map(({name, mood}) => {
 
    if (mood === "happy") {
      return (
        <li>
          {name} is {mood}. :)
        </li>
      );
    } else if (mood === "interested") {
      return (
        <li>
          {name} is {mood}. :D
        </li>
      );
    } else if (mood === "excited") {
      return (
        <li>
          {name} is {mood}. :))
        </li>
      );
    } else if (mood === "sad") {
      return (
        <li>
          {name} is {mood}. :(
        </li>
      );
    } else {
      return (
        <li>
          {name} is {mood}. :|
        </li>
      );
    }
  });
  return <ul>{personList}</ul>;
}
export default FaceMood;
