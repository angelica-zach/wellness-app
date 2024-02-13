import React from "react";
import YouTube from "react-youtube";
class Stretch extends React.Component {
  render() {
    const opts = {
      width: "320",
      playerVars: {
        controls: 1,
      },
    };

    return (
      <div>
        <h3> Streches </h3>
        <YouTube videoId="aO1boUJhjvk" opts={opts} onReady={this._onReady} />
        <YouTube videoId="y87vSUoIMGU" opts={opts} onReady={this._onReady} />
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Stretch;