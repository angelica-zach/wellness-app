import React from "react";
import PropTypes from "prop-types";
import ExerciseStack from "./ExerciseStack";

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
    
}
const Player = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

Player.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default Player;