import React from "react";
import ListDisplay from "../Components/skincarelist";
import Stretch from "../Components/stretchplayer";
function SelfCare() {
  return (
    <div>
      {/* quote */}
      <h1 className="display-1 mb-5">
        "Nothing is impossible, the word itself says im possible"
      </h1>

      <div className="container">
        <div className="row">
          <div className="col mb-3 ">
            {/* skincare list */}
            <ListDisplay />
          </div>
          <div className="col mb-3">
            {/* stretching videos */}
            <Stretch />
          </div>
          <div className="col mb-3">
            <h3>Wellbeing ideas</h3>
            <ul>
              <li>Call or text someone you love.</li>
              <li>Drink a cup of tea of coffee.</li>
              <li>Journal about how you're feeling.</li>
              <li>Take some deep breaths.</li>
              <li>Listen to your favorite music.</li>
              <li>Go for a long walk in nature.</li>
              <li>Cook or order in your favorite meal.</li>
              <li>Read a book.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelfCare;
