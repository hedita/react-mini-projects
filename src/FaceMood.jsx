import React from "react";

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
  const personList = people.map(({ name, mood }, index) => {
    let emoji = "";
    if (mood === "happy") {
      emoji = ":)";
    } else if (mood === "interested") {
      emoji = ":D";
    } else if (mood === "excited") {
      emoji = ":))";
    } else if (mood === "sad") {
      emoji = ":(";
    } else {
      emoji = ":|";
    }
    return (
      <li key={index}>
        {name} is {mood}. {emoji}
      </li>
    );
  });
  return <ul>{personList}</ul>;
}
export default FaceMood;
