import React from 'react';
import Sound from 'react-sound';

const song = ({playing, url}) => {
  let sound = playing ? (<Sound
    url={url}
    playStatus={Sound.status.PLAYING}
    playFromPosition={0}
    onLoading={() => console.log('song loadin')}
    onPlaying={() => console.log('song playing')}
    onFinishedPlaying={() => console.log('song finished')}
    />) : (<div>hi</div>);
  return (
    <div>
    {sound}
    <div>
      <button>PlayPause</button>
    </div>
    </div>
  );
}

const Song = song;

export default Song;
