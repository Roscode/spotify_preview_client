import React, { Component } from 'react';
import Sound from 'react-sound';

class Song extends Component {

  constructor(props) {
    super(props);

    this.state = { playing: true };
  }

  render() {
    return (
      <div>
      <Sound
        url="https://p.scdn.co/mp3-preview/4202dbad9d75f7de52a3c214d8beb7be8d8860b8?cid=null"
        playStatus={this.state.playing ? Sound.status.PLAYING : Sound.status.PAUSED}
        playFromPosition={0}
        onLoading={() => console.log('song loadin')}
        onPlaying={() => console.log('song playing')}
        onFinishedPlaying={() => console.log('song finished')}
        />
      <button onClick={() => this.playPause()}></button>
      </div>
    );
  }

  playPause() {
    if (this.state.playing) {
      this.setState({ playing: false });
    } else {
      this.setState({ playing: true });
    }
  }

}


export default Song;
