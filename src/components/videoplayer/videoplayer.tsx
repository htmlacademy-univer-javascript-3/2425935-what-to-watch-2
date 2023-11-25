import React, { useEffect, useRef } from 'react';

interface Props {
  src: string;
  poster: string;
}

const VIDEO_TIMEOUT = 1000;

export const VideoPlayer: React.FunctionComponent<Props> = ({ src, poster }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setTimeout(() => {
      videoRef.current?.play();
    }, VIDEO_TIMEOUT);
  }, []);

  return (
    <video ref={videoRef} src={src} poster={poster} className="player__video" loop muted>
      <source src={src} type="video/mp4" />
    </video>
  );
};
