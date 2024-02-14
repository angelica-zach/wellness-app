import React from "react";
import workoutOptions from "../utils/workoutOptions";


const Player = ({ embedId }) => {
  const embedId = buttonId => {
    switch (buttonId) {
      case "cardio":
        return "";
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


  const embedIdValue = embedId("cardio");

  return (
    <div className="video-responsive">
      {workoutOptions.map((item, index) => (
        <div
          key={index}
          className='justify-content-center text-center'
        >
          <h3>{item.type}</h3>
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${item.embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      ))}
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedIdValue}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default Player;