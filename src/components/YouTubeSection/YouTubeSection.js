import React, { Component } from 'react';
import YouTube from 'react-youtube';

class YouTubeSection extends Component {
  render() {
    const opts = {
      height: '390px',
      width: '640px',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    }
    return (
      <div style={{ width: '100%', height: 'auto'}}>
        <YouTube
          videoId="doEfRXIamMQ"
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    );
  }
}

export default YouTubeSection;
