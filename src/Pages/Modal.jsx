import React from "react";
import "./Modal.css";
import Player from "./Player";

const embedId = buttonId => {
  switch (buttonId) {
    case "cardio":
      return "_fesO5oNcEs";
    case "upper":
      return "UMx9RrNZv2TI";
    case "lower":
      return "WUzdhcwT8uM";
    case "yoga":
      return "Eml2xnoLpYE";
    case "pilates":
      return "C2HX2pNbUCM";
    case "Rest":
      return "aO1boUJhjvk";
    default:
      return "fesO5oNcEs";
  }
};

export default function Modal() {
  return (
    <div className="Modal">
      <h1>Youtube Embed</h1>
      <Player embedId={embedId} />
    </div>
  );
}