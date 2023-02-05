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
  const personList = people.map((person) => {
    if (person.mood === "happy") {
      return (
        <li>
          {person.name} is {person.mood}. :)
        </li>
      );
    } else if (person.mood === "interested") {
      return (
        <li>
          {person.name} is {person.mood}. :D
        </li>
      );
    } else if (person.mood === "excited") {
      return (
        <li>
          {person.name} is {person.mood}. :))
        </li>
      );
    } else if (person.mood === "sad") {
      return (
        <li>
          {person.name} is {person.mood}. :(
        </li>
      );
    } else {
      return (
        <li>
          {person.name} is {person.mood}. :|
        </li>
      );
    }
  });
  return <ul>{personList}</ul>;
}
export default FaceMood;
